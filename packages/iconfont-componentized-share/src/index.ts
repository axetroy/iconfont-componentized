import { SvgNode } from "@axetroy/iconfont-componentized-parser";

export function generateSvg(node: SvgNode, indent: number, props: Record<string, string>): string {
    const indentSpace = " ".repeat(indent);

    const attributes = { ...node.attributes, ...(node.name === "svg" ? { xmlns: "http://www.w3.org/2000/svg", ...props } : {}) };

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

    const children = node.children.length ? "\n" + node.children.map((child) => generateSvg(child, indent + 4, props)).join("\n") : "";

    const endTag = node.children.length ? `\n${indentSpace}</${node.name}>` : "";

    return startTag + children + endTag;
}
