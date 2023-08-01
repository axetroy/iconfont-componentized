import { Icon } from "@axetroy/iconfont-componentized-parser";
import { generateSvg } from "@axetroy/iconfont-componentized-share";
import camelcase from "camelcase";
import fs from "fs";
import path from "path";
import decamelize from "decamelize";

const header = `// generate by iconfont-gen-react`;

export interface Component {
    id: string;
    name: string;
    content: string;
}

export function generateComponents(icons: Icon[]) {
    return icons.map((c) => generateComponent(c));
}

export function generate(icons: Icon[], outputDir: string) {
    const components = generateComponents(icons);

    // generate component file
    for (const component of components) {
        fs.writeFileSync(path.join(outputDir, component.name + ".js"), component.content);
    }

    fs.writeFileSync(path.join(outputDir, "index.js"), generateIndexComponent(components));
}

function generateIndexComponent(components: Component[]) {
    return `${header}

${components
    .map((component) => {
        return `export * from "./${component.name}";`;
    })
    .join("\n")}
`;
}

function generateComponent(icon: Icon): Component {
    const componentName = camelcase("icon-font-" + icon.id, { pascalCase: true });

    const svgStr = generateSvg(icon.node, 12, {});

    const componentStr = `${header}

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

customElements.define('${decamelize(componentName, { separator: "-" })}', ${componentName});
`;

    return {
        id: icon.id,
        name: componentName,
        content: componentStr,
    };
}
