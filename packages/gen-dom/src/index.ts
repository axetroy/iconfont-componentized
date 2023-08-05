import { Icon, parseFromURL } from "@iconfont-componentized/parser";
import { generateSvgDOM, ComponentGenerator, Component, WriteConstructor, GeneratorOptions } from "@iconfont-componentized/share";
import camelcase from "camelcase";

const header = `// generate by iconfont-componentized`;

export default class DOMComponentGenerator implements ComponentGenerator {
    constructor(public Writer: WriteConstructor) {}

    generate(icon: Icon): Component {
        const componentName = camelcase("icon-font-" + icon.id, { pascalCase: true });

        const componentStr = header + "\n\n" + generateSvgDOM(icon.node, 0, componentName);

        const componentDeclaration = `${header}

declare const ${componentName}: () => SVGElement;

export default ${componentName};
`;

        return {
            id: icon.id,
            componentName: componentName,
            files: [
                {
                    filepath: componentName + ".js",
                    content: componentStr,
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
                    content: generateIndexComponent(components),
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
    name: IconFontName
}

declare var IconFont: (props: IconFontProps) => SVGElement;

export default IconFont;
`;
}

function generateIndexComponent(components: Component[]) {
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

export default function IconFont({ name } = {}) {
    switch (name) {
${components
    .map((v) => {
        const indentSpace = " ".repeat(8);

        return `${indentSpace}case '${v.id}': return ${v.componentName}();`;
    })
    .join("\n")}
        default:
            var defaultIcon = document.createElement("i");
            defaultIcon.setAttribute("style", "display: none");
            return defaultIcon;
    }
}`;
}
