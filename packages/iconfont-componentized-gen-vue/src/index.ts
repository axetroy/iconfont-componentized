import { Icon } from "@axetroy/iconfont-componentized-parser";
import { generateSvg } from "@axetroy/iconfont-componentized-share";
import camelcase from "camelcase";
import fs from "fs";
import path from "path";

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
        fs.writeFileSync(path.join(outputDir, component.name + ".vue"), component.content);
    }

    fs.writeFileSync(path.join(outputDir, "index.vue"), generateIndexComponent(components));
}

function generateIndexComponent(components: Component[]) {
    return `<template>
    <!-- ${header} -->
${components
    .map((component, index) => {
        const indentSpace = " ".repeat(4);
        return `${indentSpace}<${component.name} ${index === 0 ? "v-if" : "v-else-if"}="name === '${component.id}'" v-bind="$attrs" v-on="$listeners" />`;
    })
    .join("\n")}
    <div v-else style="display: none" v-bind="$attrs" v-on="$listeners"></div>
</template>

<script>
${components
    .map((v) => {
        return `import ${v.name} from './${v.name}.vue'`;
    })
    .join("\n")}

export default {
    name: "icon-font",
    components: {
${components
    .map((v) => {
        const indentSpace = " ".repeat(8);
        return `${indentSpace}${v.name}: ${v.name},`;
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

function generateComponent(icon: Icon): Component {
    const componentName = camelcase("icon-font-" + icon.id, { pascalCase: true });

    const svgStr = generateSvg(icon.node, 4, {
        xmlns: "http://www.w3.org/2000/svg",
        "v-bind": "$attrs",
        "v-on": "$listeners",
    });

    const componentStr = `<template>
    <!-- ${header} -->
${svgStr}
</template>

<script>
export default {
    name: "${componentName}",
}
</script>
`;

    return {
        id: icon.id,
        name: componentName,
        content: componentStr,
    };
}
