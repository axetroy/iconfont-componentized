import { Icon, parseFromURL } from "@iconfont-componentized/parser";
import { Component, ComponentGenerator, Config, generateSvgDOM, GeneratorOptions, WriteConstructor } from "@iconfont-componentized/share";
import camelcase from "camelcase";

const header = `// generate by iconfont-componentized`;

export default class DOMComponentGenerator implements ComponentGenerator {
    constructor(
        public Writer: WriteConstructor,
        public config: Config,
    ) {}

    generate(icon: Icon): Component {
        const componentName = camelcase("icon-font-" + icon.id, { pascalCase: true });

        const defaultSize = this.config.defaultSize;
        const classNamePrefix = this.config.classNamePrefix;

        const componentStr = generateSvgDOM(icon.node, 4, [
            {
                type: "variable",
                key: "width",
                value: `props.size ?? "${defaultSize}"`,
            },
            {
                type: "variable",
                key: "height",
                value: `props.size ?? "${defaultSize}"`,
            },
            {
                type: "variable",
                key: "class",
                value: `classNames`,
            },
        ]);

        const componentContent = `${header}

export default function ${componentName}(props) {
    const classNameParts = ['${classNamePrefix}', '${classNamePrefix}-${icon.id}'];

    if (props.className) {
        classNameParts.push(props.className);
    }

    const classNames = classNameParts.join(' ');

${componentStr}
}
`;

        const componentDeclaration = `${header}

export interface ${componentName}Props {
    size?: number | string;
    className?: string;
}

declare const ${componentName}: (props: ${componentName}Props) => SVGElement;

export default ${componentName};
`;

        return {
            id: icon.id,
            componentName: componentName,
            files: [
                {
                    filepath: componentName + ".js",
                    content: componentContent,
                },
                {
                    filepath: componentName + ".d.ts",
                    content: componentDeclaration,
                },
            ],
        };
    }
    generates(icons: Icon[]): Component[] {
        const components = icons.map((v) => this.generate(v));

        components.push({
            id: "index",
            componentName: "index",
            files: [
                {
                    filepath: "index.js",
                    content: this.generateIndexComponent(components),
                },
                {
                    filepath: "index.d.ts",
                    content: generateIndexComponentDeclaration(components),
                },
            ],
        });

        return components;
    }
    async write(url: string | Icon[], options: GeneratorOptions): Promise<void> {
        const icons = typeof url === "string" ? await parseFromURL(url) : url;

        const components = this.generates(icons);

        await new this.Writer().write(components, options);
    }

    private generateIndexComponent(components: Component[]) {
        return `${header}

${components
    .map((component) => {
        return `import ${component.componentName} from "./${component.componentName}";`;
    })
    .join("\n")}

${components
    .map((component) => {
        return `export { ${component.componentName} };`;
    })
    .join("\n")}

export default function IconFont({ name, size, className } = {}) {
    switch (name) {
${components
    .map((v) => {
        const indentSpace = " ".repeat(8);

        return `${indentSpace}case '${v.id}': return ${v.componentName}({ size, className });`;
    })
    .join("\n")}
        default:
            throw new Error(\`IconFont\'s name must one of ${JSON.stringify(components.map((v) => v.id))} but got "\${name}"\`)
    }
}`;
    }
}

function generateIndexComponentDeclaration(components: Component[]) {
    return `${header}

export type IconFontName = ${components.map((v) => `'${v.id}'`).join(" | ")};

${components
    .map((v) => {
        return `import ${v.componentName} from './${v.componentName}';`;
    })
    .join("\n")}

${components
    .map((v) => {
        return `export { ${v.componentName} };`;
    })
    .join("\n")}

interface IconFontProps {
    name: IconFontName;
    size?: number | string;
    className?: string;
}

declare var IconFont: (props: IconFontProps) => SVGElement;

export default IconFont;
`;
}
