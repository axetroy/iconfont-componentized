import { Icon } from "@iconfont-componentized/parser";
import { ComponentGenerator, Component, writeComponentsToDisk, generateVueVNode } from "@iconfont-componentized/share";
import camelcase from "camelcase";

const header = `// generate by iconfont-componentized`;

export default class VueComponentGenerator implements ComponentGenerator {
    generate(icon: Icon): Component {
        const componentName = camelcase("icon-font-" + icon.id, { pascalCase: true });

        const vNodeString = generateVueVNode(
            icon.node,
            12,
            {
                xmlns: "http://www.w3.org/2000/svg",
                "...": "this.$attrs",
            },
            "h",
        );

        const componentContent = `${header}

export default {
    name: "${componentName}",
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
                        content: generateIndexComponent(components),
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
    write(components: Component[], outputDir: string): void {
        writeComponentsToDisk(components, outputDir);
    }
}

function generateIndexComponent(components: Component[]) {
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
        name: String,
        required: true
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
            { "...": "this.$attrs" },
            "h",
        )};`;
    })
    .join("\n")}
            default:
                return ${generateVueVNode(
                    {
                        name: "div",
                        type: "div",
                        value: "",
                        attributes: {},
                        children: [],
                    },
                    0,
                    { style: { display: "none" }, "...": "this.$attrs" },
                    "h",
                )};
        }
    }
}
`;
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
