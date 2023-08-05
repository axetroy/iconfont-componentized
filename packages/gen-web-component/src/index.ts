import { Icon } from "@iconfont-componentized/parser";
import { generateSvg, ComponentGenerator, Component, writeComponentsToDisk } from "@iconfont-componentized/share";
import camelcase from "camelcase";
import decamelize from "decamelize";

const header = `// generate by iconfont-componentized`;

export default class WebComponentGenerator implements ComponentGenerator {
    generate(icon: Icon): Component {
        const componentName = camelcase("icon-font-" + icon.id, { pascalCase: true });
        const webComponentName = decamelize(componentName, { separator: "-" });

        const svgStr = generateSvg(icon.node, 12, {});

        const componentContent = `${header}

export default class ${componentName} extends HTMLElement {
    constructor () {
        super();

        this.attachShadow({ mode: 'open' })

        this.shadowRoot.innerHTML = \`
${svgStr}
        \`;

        const svgElement = this.shadowRoot.querySelector('svg');

        const attributes = Array.from(this.attributes)

        for (const attr of attributes) {
            svgElement.setAttribute(attr.name, attr.value);
        }
    }
}

customElements.define('${webComponentName}', ${componentName});
`;

        const componentDeclaration = `${header}

export declare class ${componentName} extends HTMLElement {
    constructor();
}

declare global {
    interface HTMLElementTagNameMap {
        '${webComponentName}': ${componentName};
    }
}
`;

        return {
            id: icon.id,
            componentName: componentName,
            files: [
                { filepath: componentName + ".js", content: componentContent },
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
                    content: generateIndexDeclaration(components),
                },
            ],
        });

        return components;
    }
    write(components: Component[], outputDir: string): void {
        writeComponentsToDisk(components, outputDir);
    }
}

function generateIndexComponent(components: Component[]): string {
    return `${header}

${components
    .map((component) => {
        return `export * from "./${component.componentName}";`;
    })
    .join("\n")}
`;
}

function generateIndexDeclaration(components: Component[]): string {
    return `${header}

${components
    .map((component) => {
        return `export * from "./${component.componentName}";`;
    })
    .join("\n")}
`;
}
