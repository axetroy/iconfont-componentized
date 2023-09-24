import { SvgNode } from "@iconfont-componentized/parser";

import { Property, PropertyVariable } from "./generator";

const svgNameSpace = "http://www.w3.org/2000/svg";

export function generateSvgJSX(node: SvgNode, indent: number, props: Property[], fill?: PropertyVariable): string {
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

    const colorProperty = fill ?? (properties.find((v) => v.type === "variable" && v.key === "fill") as PropertyVariable);

    if (colorProperty) {
        const fillableTags = ["rect", "circle", "ellipse", "line", "polyline", "polygon", "path", "text"];

        if (fillableTags.includes(node.name)) {
            const definedProp = properties.find((v) => v.type === "normal" && v.key === colorProperty.key);

            if (definedProp) {
                definedProp.type = "variable";
                definedProp.value = `${colorProperty.value} || '${definedProp.value}'`;
            } else {
                properties.push({
                    type: "variable",
                    key: colorProperty.key,
                    value: `${colorProperty.value}`,
                });
            }
        }
    }

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

    const children = node.children.length ? "\n" + node.children.map((child) => generateSvgJSX(child, indent + 4, [], colorProperty)).join("\n") : "";

    const endTag = node.children.length ? `\n${indentSpace}</${node.name}>` : "";

    return startTag + children + endTag;
}
