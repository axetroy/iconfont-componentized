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
                value: `size`,
            },
            {
                type: "variable",
                key: "height",
                value: `size`,
            },
            {
                type: "variable",
                key: "class",
                value: `classNames`,
            },
            {
                type: "variable",
                key: "fill",
                value: `props.color`,
            },
        ]);

        const componentContent = `${header}

export default function ${componentName}(props = {}) {
    const classNameParts = ['${classNamePrefix}', '${classNamePrefix}-${icon.id}'];

    if (props.className) {
        classNameParts.push(props.className);
    }

    const classNames = classNameParts.join(' ');

    const size = props.size ?? ${typeof defaultSize === "number" ? defaultSize : '"' + defaultSize + '"'};

${componentStr}
}
`;

        const componentDeclaration = `${header}

export interface ${componentName}Props {
    size?: number | string;
    className?: string;
    color?: string;
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

export const names = [${components.map((v) => '"' + v.id + '"')}];

export default function IconFont(props = {}) {
    switch (name) {
${components
    .map((v) => {
        const indentSpace = " ".repeat(8);

        return `${indentSpace}case '${v.id}': return ${v.componentName}(props);`;
    })
    .join("\n")}
        default:
            throw new Error(\`IconFont\'s name must one of \${JSON.stringify(names)} but got "\${props.name}"\`)
    }
}`;
    }
}

function generateIndexComponentDeclaration(components: Component[]) {
    return `${header}

export type IconFontName = ${components.map((v) => `'${v.id}'`).join(" | ")};
export declare var names: Array<string>;

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

export interface IconFontProps {
    name: IconFontName;
    size?: number | string;
    className?: string;
}

declare var IconFont: (props: IconFontProps) => SVGElement;

export default IconFont;
`;
}
