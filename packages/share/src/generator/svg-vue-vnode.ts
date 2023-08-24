import { SvgNode } from "@iconfont-componentized/parser";

import { Property } from "./generator";

const svgNameSpace = "http://www.w3.org/2000/svg";

interface VNodePreset {
    props?: Property[];
    attrs?: Property[];
    listeners?: Property[];
}

export function generateVueVNode(node: SvgNode, indent: number, preset: VNodePreset, name: string): string {
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
    ).concat(preset.attrs || []);

    function renderProperty(prop: Property) {
        if (prop.type === "spread") {
            return `...${prop.value}`;
        }

        if (prop.type === "variable") {
            return `${prop.key}: ${prop.value}`;
        }

        return `"${prop.key}": ${JSON.stringify(prop.value)}`;
    }

    const attrs = (() => {
        const attrParts: Array<{ key: string; value: string }> = [];

        const attrStr = properties.map(renderProperty).join(", ");
        const propsStr = (preset.props || []).map(renderProperty).join(", ");
        const listenersStr = (preset.listeners || []).map(renderProperty).join(", ");

        if (attrStr) {
            attrParts.push({
                key: "attrs",
                value: "{" + attrStr + "}",
            });
        }

        if (propsStr) {
            attrParts.push({
                key: "props",
                value: "{" + propsStr + "}",
            });
        }

        if (listenersStr) {
            attrParts.push({
                key: "on",
                value: "{" + listenersStr + "}",
            });
        }

        return `{ ${attrParts
            .filter((v) => v.value)
            .map((item) => `"${item.key}": ${item.value}`)
            .join(", ")} }`;
    })();

    const children = (() => {
        let childrenStr = node.children
            .map((v) => {
                return "\n" + generateVueVNode(v, indent + 4, {}, name);
            })
            .join(",");

        if (childrenStr) {
            childrenStr = ", [" + childrenStr + "\n" + indentSpace + "]";
        }

        return childrenStr;
    })();

    return `${indentSpace}${name}("${node.name}", ${attrs}${children})`;
}
