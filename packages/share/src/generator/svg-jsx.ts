import { SvgNode } from "@iconfont-componentized/parser";

import { Property } from "./generator";

const svgNameSpace = "http://www.w3.org/2000/svg";

export function generateSvgJSX(node: SvgNode, indent: number, props: Property[]): string {
    const indentSpace = " ".repeat(indent);

    const attributes = { ...node.attributes };

    // 删除掉一些不需要的属性
    ["id", "class"].forEach((property) => {
        delete attributes[property];
    });

    if (node.name === "svg") {
        attributes["xmlns"] = svgNameSpace;
    }

    const properties: Property[] = (
        Object.keys(attributes).map((key) => {
            const prop: Property = {
                type: "normal",
                key: key,
                value: attributes[key],
            };

            return prop;
        }) as Property[]
    ).concat(props);

    function renderProperty(prop: Property) {
        if (prop.type === "spread") {
            return `{...${prop.value}}`;
        }

        if (prop.type === "variable") {
            return `${prop.key}={${prop.value}}`;
        }

        return `${prop.key}="${prop.value}"`;
    }

    const attrs = properties.map(renderProperty).join(" ");

    const startTag = node.children.length ? `${indentSpace}<${node.name} ${attrs}>` : `${indentSpace}<${node.name} ${attrs} />`;

    const children = node.children.length ? "\n" + node.children.map((child) => generateSvgJSX(child, indent + 4, [])).join("\n") : "";

    const endTag = node.children.length ? `\n${indentSpace}</${node.name}>` : "";

    return startTag + children + endTag;
}
