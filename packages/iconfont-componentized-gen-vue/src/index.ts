import { Icon } from "@axetroy/iconfont-componentized-parser";
import { generateSvg, ComponentGenerator, Component, writeComponentsToDisk } from "@axetroy/iconfont-componentized-share";
import camelcase from "camelcase";

const header = `// generate by iconfont-componentized`;

export default class VueComponentGenerator implements ComponentGenerator {
    generate(icon: Icon): Component {
        const componentName = camelcase("icon-font-" + icon.id, { pascalCase: true });

        const svgStr = generateSvg(icon.node, 4, {
            "v-bind": "$attrs",
            "v-on": "$listeners",
        });

        const componentContent = `<template>
    <!-- ${header} -->
${svgStr}
</template>

<script>
export default {
    name: "${componentName}",
}
</script>
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
                    filepath: `${componentName}.vue`,
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

        components.push({
            id: "index",
            componentName: "index",
            files: [
                {
                    filepath: "index.vue",
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
    write(components: Component[], outputDir: string): void {
        writeComponentsToDisk(components, outputDir);
    }
}

function generateIndexComponent(components: Component[]) {
    return `<template>
    <!-- ${header} -->
${components
    .map((component, index) => {
        const indentSpace = " ".repeat(4);
        return `${indentSpace}<${component.componentName} ${index === 0 ? "v-if" : "v-else-if"}="name === '${
            component.id
        }'" v-bind="$attrs" v-on="$listeners" />`;
    })
    .join("\n")}
    <div v-else style="display: none" v-bind="$attrs" v-on="$listeners"></div>
</template>

<script>
${components
    .map((v) => {
        return `import ${v.componentName} from './${v.componentName}.vue'`;
    })
    .join("\n")}

export default {
    name: "icon-font",
    components: {
${components
    .map((v) => {
        const indentSpace = " ".repeat(8);
        return `${indentSpace}${v.componentName}: ${v.componentName},`;
    })
    .join("\n")}
    },
    props: {
        name: String
    }
}
</script>
`;
}

function generateIndexComponentDeclaration(components: Component[]) {
    return `${header}
import { DefineComponent } from "vue";

type SvgProps = JSX.IntrinsicElements['svg'];

export type IconNames = ${components.map((v) => `"${v.id}"`).join(" | ")}

export interface IconFontProps extends SvgProps {
    name: IconNames
}

declare const IconFont: DefineComponent<IconFontProps>;

export default IconFont;
`;
}
