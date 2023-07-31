import { SvgNode } from "@axetroy/iconfont-componentized-parser";

export function generateSvg(node: SvgNode, indent: number, props: Record<string, string>): string {
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
