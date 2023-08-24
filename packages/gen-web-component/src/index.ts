import { Icon, parseFromURL } from "@iconfont-componentized/parser";
import { Component, ComponentGenerator, Config, generateSvgDOM, GeneratorOptions, WriteConstructor } from "@iconfont-componentized/share";
import camelcase from "camelcase";
import decamelize from "decamelize";

const header = `// generate by iconfont-componentized`;

export default class WebComponentGenerator implements ComponentGenerator {
    constructor(
        public Writer: WriteConstructor,
        public config: Config,
    ) {}

    generate(icon: Icon): Component {
        const componentName = camelcase("icon-font-" + icon.id, { pascalCase: true });
        const webComponentName = decamelize(componentName, { separator: "-" });

        const defaultSize = this.config.defaultSize;
        const classNamePrefix = this.config.classNamePrefix;

        const componentContent = `${header}

export default class ${componentName} extends HTMLElement {
    constructor () {
        super();

        this.attachShadow({ mode: 'open' })

        const svgElement = this.shadowRoot.querySelector('svg');

        const attributes = Array.from(this.attributes)

        for (const attr of attributes) {
            svgElement.setAttribute(attr.name, attr.value);
        }
    }

    connectedCallback() {
        this.render(); // 初始渲染
    }

    // 当任何属性发生变化时被调用
    attributeChangedCallback(name, oldValue, newValue) {
        this.render(); // 重新渲染
    }

    // 开启属性变化监视器
    static get observedAttributes() {
        // 获取所有属性名称
        const attributes = [];
        for (const attr of this.attributes) {
            attributes.push(attr.name);
        }
        return attributes;
    }

    render() {
        this.shadowRoot.innerHTML = ''; // 清空 shadow DOM
        const size = this.getAttribute('size') ?? ${defaultSize};

        const attrs = this.getAttributeNames();

        const attrsMap = {};

        for (const attr of attrs) {
            attrsMap[attr] = this.getAttribute(attr);
        }

        const classNameParts = ['${classNamePrefix}', '${classNamePrefix}-${icon.id}'];

        if (attrsMap['class']) {
            classNameParts.push(attrsMap['class']);
        }

        const classNames = classNameParts.join(' ');

        const createDom = (props) => {
${generateSvgDOM(icon.node, 12, [
    {
        type: "variable",
        key: "width",
        value: `props.size`,
    },
    {
        type: "variable",
        key: "height",
        value: `props.size`,
    },
    {
        type: "spread",
        value: `attrsMap`,
    },
    {
        type: "variable",
        key: "class",
        value: "props.classNames",
    },
])}
        }



        const dom = createDom({ size: size, className: classNames });

        this.shadowRoot.appendChild(dom);
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

    async write(url: string | Icon[], options: GeneratorOptions): Promise<void> {
        const icons = typeof url === "string" ? await parseFromURL(url) : url;

        const components = this.generates(icons);

        await new this.Writer().write(components, options);
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
