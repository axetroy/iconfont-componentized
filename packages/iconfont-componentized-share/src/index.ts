import { SvgNode } from "@axetroy/iconfont-componentized-parser";

export * from "./generator";

export function generateSvg(node: SvgNode, indent: number, rootProps: Record<string, any>): string {
    const indentSpace = " ".repeat(indent);

    const attributes: Record<string, string> = { ...node.attributes, ...(node.name === "svg" ? { xmlns: "http://www.w3.org/2000/svg", ...rootProps } : {}) };

    let attrs = Object.keys(attributes || [])
        .map((key) => {
            if (node.name === "svg" && key === "id") {
                return;
            }

            if (key === "...") {
                return `{ ...${attributes[key]} }`;
            }

            return `${key}="${attributes[key]}"`;
        })
        .filter((v) => v)
        .join(" ");

    const startTag = node.children.length ? `${indentSpace}<${node.name} ${attrs}>` : `${indentSpace}<${node.name} ${attrs} />`;

    const children = node.children.length ? "\n" + node.children.map((child) => generateSvg(child, indent + 4, {})).join("\n") : "";

    const endTag = node.children.length ? `\n${indentSpace}</${node.name}>` : "";

    return startTag + children + endTag;
}

export function generateVueVNode(node: SvgNode, indent: number, rootProps: Record<string, any>, name: string): string {
    const indentSpace = " ".repeat(indent);

    let attributes: Record<string, any> = { ...node.attributes, ...rootProps };

    delete attributes["..."];

    const properties = (() => {
        const hasCustomProperty = Object.keys(attributes).length;

        let propertyString = hasCustomProperty ? `${JSON.stringify({ attrs: attributes })}` : "";

        const spreadPropsValue = rootProps["..."];

        if (spreadPropsValue) {
            if (hasCustomProperty) {
                propertyString = propertyString.replace(/\}\}$/, `, ...${spreadPropsValue}}}`);
            } else {
                propertyString = `{ attrs: ${spreadPropsValue} }`;
            }
        }

        if (propertyString) {
            propertyString = ", " + propertyString;
        }

        return propertyString;
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

    return `${indentSpace}${name}("${node.name}"${properties}${children})`;
}
