import { Icon, parseFromURL } from "@iconfont-componentized/parser";
import { Component, ComponentGenerator, Config, generateVueVNode, GeneratorOptions, WriteConstructor } from "@iconfont-componentized/share";
import camelcase from "camelcase";

const header = `// generate by iconfont-componentized`;

export default class VueComponentGenerator implements ComponentGenerator {
    constructor(
        public Writer: WriteConstructor,
        public config: Config,
    ) {}

    generate(icon: Icon): Component {
        const componentName = camelcase("icon-font-" + icon.id, { pascalCase: true });

        const defaultSize = this.config.defaultSize;
        const classNamePrefix = this.config.classNamePrefix;

        const vNodeString = generateVueVNode(
            icon.node,
            12,
            {
                attrs: [
                    {
                        type: "spread",
                        value: "(this.$attrs || {})",
                    },
                    {
                        type: "variable",
                        key: "width",
                        value: "this.size",
                    },
                    {
                        type: "variable",
                        key: "height",
                        value: "this.size",
                    },
                    {
                        type: "variable",
                        key: "className",
                        value: "this.classNames",
                    },
                ],
                listeners: [
                    {
                        type: "spread",
                        value: "(this.$listeners || {})",
                    },
                ],
            },
            "h",
        );

        const componentContent = `${header}

export default {
    name: "${componentName}",
    props: {
        size: {
            type: [String, Number],
            default: ${defaultSize}
        }
    },
    computed: {
        classNames({ $attrs }) {
            const classNameParts = ['${classNamePrefix}', '${classNamePrefix}-${icon.id}'];

            if ($attrs.className) {
                classNameParts.push($attrs.className);
            }

            return classNameParts.join(' ');
        }
    },
    render(h) {
        return (
${vNodeString}
        )
    }
}
`;

        const componentDeclaration = `${header}

import { DefineComponent } from 'vue';

type SvgProps = JSX.IntrinsicElements['svg'];

export interface ${componentName}Props extends SvgProps {
}

declare const ${componentName}: DefineComponent<${componentName}Props>;

export default ${componentName};
`;

        return {
            id: icon.id,
            componentName: componentName,
            files: [
                {
                    filepath: `${componentName}.js`,
                    content: componentContent,
                },
                {
                    filepath: `${componentName}.d.ts`,
                    content: componentDeclaration,
                },
            ],
        };
    }
    generates(icons: Icon[]): Component[] {
        const components = icons.map((v) => this.generate(v));

        components.push(
            {
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
            },
            {
                id: "plugin",
                componentName: "plugin",
                files: [
                    {
                        filepath: "plugin.js",
                        content: generatePlugin(components),
                    },
                    {
                        filepath: "plugin.d.ts",
                        content: generatePluginDeclaration(components),
                    },
                ],
            },
        );

        return components;
    }
    async write(url: string | Icon[], options: GeneratorOptions): Promise<void> {
        const icons = typeof url === "string" ? await parseFromURL(url) : url;

        const components = this.generates(icons);

        await new this.Writer().write(components, options);
    }

    private generateIndexComponent(components: Component[]) {
        const defaultSize = this.config.defaultSize;

        return `${header}

${components
    .map((v) => {
        return `import ${v.componentName} from './${v.componentName}'`;
    })
    .join("\n")}

${components
    .map((v) => {
        return `export { ${v.componentName} };`;
    })
    .join("\n")}

export default {
    name: "IconFont",
    components: {
${components
    .map((v) => {
        const indentSpace = " ".repeat(8);
        return `${indentSpace}${v.componentName}: ${v.componentName},`;
    })
    .join("\n")}
    },
    props: {
        name: {
            type: String,
            required: true
        },
        size: {
            type: [String, Number],
            default: ${defaultSize}
        }
    },
    render(h) {
        switch (this.name) {
${components
    .map((v) => {
        const indentSpace = " ".repeat(12);
        return `${indentSpace}case "${v.id}": return ${generateVueVNode(
            {
                name: v.componentName,
                type: v.componentName,
                value: "",
                attributes: {},
                children: [],
            },
            0,
            {
                attrs: [
                    {
                        type: "spread",
                        value: "(this.$attrs || {})",
                    },
                ],
                props: [
                    {
                        type: "variable",
                        key: "size",
                        value: "this.size",
                    },
                ],
                listeners: [
                    {
                        type: "spread",
                        value: "(this.$listeners || {})",
                    },
                ],
            },
            "h",
        )};`;
    })
    .join("\n")}
            default:
                throw new Error(\`IconFont\'s name must one of ${JSON.stringify(components.map((v) => v.id))} but got "\${this.name}"\`)
        }
    }
}
`;
    }
}

function generateIndexComponentDeclaration(components: Component[]) {
    return `${header}

import { DefineComponent } from "vue";

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

type SvgProps = JSX.IntrinsicElements['svg'];

export type IconNames = ${components.map((v) => `"${v.id}"`).join(" | ")}

export interface IconFontProps extends SvgProps {
    name: IconNames
}

declare const IconFont: DefineComponent<IconFontProps>;

export default IconFont;
`;
}

function generatePlugin(components: Component[]) {
    const pluginIndentSpace = " ".repeat(8);

    return `${header}

${components
    .map((v) => {
        return `import ${v.componentName} from './${v.componentName}'`;
    })
    .join("\n")}
import IconFont from './index';

const IconFontPlugin = {
    install(Vue) {
${components
    .map((v) => {
        return `${pluginIndentSpace}Vue.component('${v.componentName}', ${v.componentName})`;
    })
    .join("\n")}
${pluginIndentSpace}Vue.component('IconFont', IconFont);
    }
}

export default IconFontPlugin;
`;
}

function generatePluginDeclaration(components: Component[]) {
    return `${header}
import Vue from 'vue';
import { ComponentOptions } from 'vue';

declare module 'IconFontComponentsPlugin' {
${components
    .map((v) => {
        const indentSpace = " ".repeat(4);

        return `${indentSpace}export const ${v.componentName}: ComponentOptions<Vue>;`;
    })
    .join("\n")}
    export const IconFont: ComponentOptions<Vue>;

    const IconFontComponentsPlugin: {
        install(Vue: typeof import('vue')): void;
    };

    export default IconFontComponentsPlugin;
}
`;
}
