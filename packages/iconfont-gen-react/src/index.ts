import { Icon, SvgNode } from "iconfont-parser";
import camelcase from "camelcase";
import fs from "fs";
import path from "path";

const header = `// generate by iconfont-gen-react`;

export interface Component {
    id: string;
    name: string;
    content: string;
    declaration: string;
}

export function generateComponents(icons: Icon[]) {
    return icons.map((c) => generateComponent(c));
}

export function generate(icons: Icon[], outputDir: string) {
    const components = generateComponents(icons);

    // generate component file
    for (const component of components) {
        fs.writeFileSync(path.join(outputDir, component.name + ".jsx"), component.content);
        fs.writeFileSync(path.join(outputDir, component.name + ".d.ts"), component.declaration);
    }

    fs.writeFileSync(path.join(outputDir, "index.jsx"), generateIndexComponent(components));
    fs.writeFileSync(path.join(outputDir, "index.d.ts"), generateIndexComponentDeclaration(components));
}

function generateIndexComponentDeclaration(components: Component[]) {
    return `${header}

import React from 'react';

export type IconFontName = ${components.map((v) => `'${v.id}'`).join(" | ")};

${components
    .map((v) => {
        return `export { ${v.name} } from './${v.name}'`;
    })
    .join("\n")}

export declare var IconFont: React.FC<React.SVGProps<SVGSVGElement> & { name: IconFontName }>;
`;
}

function generateIndexComponent(components: Component[]) {
    return `${header}

import React from 'react';

${components
    .map((component) => {
        return `import ${component.name} from "./${component.name}";`;
    })
    .join("\n")}

${components
    .map((component) => {
        return `export * from "./${component.name}";`;
    })
    .join("\n")}

export default function IconFont(props) {
    switch (props.name) {
${components
    .map((v) => {
        const indentSpace = " ".repeat(8);

        return `${indentSpace}case '${v.id}': return <${v.name} {...props} />;`;
    })
    .join("\n")}
        default:
            return <i style="display: none" {...props} />
    }
}`;
}

function generateSvg(node: SvgNode, indent: number, props: Record<string, string>) {
    const indentSpace = " ".repeat(indent);

    let attrs = Object.keys(node.attributes || [])
        .map((key) => {
            if (key === "id") {
                return;
            }

            return `${key}="${node.attributes[key]}"`;
        })
        .filter((v) => v)
        .join(" ");

    if (node.name === "svg") {
        const rootAttrs = Object.keys(props)
            .map((key) => {
                if (key === "...") {
                    return `{ ...${props[key]} }`;
                }

                return `${key}="${props[key]}"`;
            })
            .join(" ");

        if (rootAttrs) {
            attrs += " " + rootAttrs;
        }
    }

    const startTag = node.children.length ? `${indentSpace}<${node.name} ${attrs}>` : `${indentSpace}<${node.name} ${attrs} />`;

    const children = node.children.length ? "\n" + node.children.map((child) => generateSvg(child, indent + 4, props)).join("\n") : "";

    const endTag = node.children.length ? `\n${indentSpace}</${node.name}>` : "";

    return startTag + children + endTag;
}

function generateComponent(icon: Icon): Component {
    const componentName = camelcase("icon-font-" + icon.id, { pascalCase: true });

    const svgStr = generateSvg(icon.node, 8, {
        xmlns: "http://www.w3.org/2000/svg",
        "...": "props",
    });

    const componentStr = `${header}

import React from 'react';

export default function ${componentName} (props) {
    return (
${svgStr}
    )
}

${componentName}.displayName = '${componentName}';
`;

    return {
        id: icon.id,
        name: componentName,
        content: componentStr,
        declaration: `${header}\n\nimport React from 'react';\n\nexport declare var ${componentName}: React.FC<React.SVGProps<SVGSVGElement>>;\n`,
    };
}
