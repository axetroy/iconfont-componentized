import { SvgNode } from "@iconfont-componentized/parser";

export * from "./generator";
export * from "./writer";

const svgNameSpace = "http://www.w3.org/2000/svg";

export function generateSvg(node: SvgNode, indent: number, rootProps: Record<string, any>): string {
    const indentSpace = " ".repeat(indent);

    const attributes: Record<string, string> = { ...node.attributes, ...rootProps };

    delete attributes["id"];
    delete attributes["..."];

    if (node.name === "svg") {
        attributes["xmlns"] = svgNameSpace;
    }

    if (rootProps["..."]) {
        attributes["..."] = rootProps["..."];
    }

    let attrs = Object.keys(attributes || [])
        .map((key) => {
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

    delete attributes["id"]; // remove id property
    delete attributes["..."]; // remove spread property

    if (node.name === "svg") {
        attributes["xmlns"] = svgNameSpace;
    }

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

export function generateSvgDOM(node: SvgNode, indent: number, componentName: string): string {
    let eleIndex = -1;

    function generateTemplate(node: SvgNode, indent: number, parentVarName?: string): string {
        eleIndex += 1;

        const indentSpace = " ".repeat(indent);

        const elementName = `ele${eleIndex}`;

        const declare = `${indentSpace}var ${elementName} = document.createElementNS("${svgNameSpace}", "${node.name}");`;

        const attributes = { ...node.attributes };

        if (node.name === "svg") {
            attributes.xmlns = svgNameSpace;
        }

        let attrs = Object.keys(attributes)
            .filter((v) => v !== "id")
            .map((attr) => {
                return `${indentSpace}${elementName}.setAttribute("${attr}", "${attributes[attr]}");`;
            })
            .join("\n");

        if (attrs) {
            attrs = "\n" + attrs;
        }

        let children = node.children.map((child) => generateTemplate(child, indent + 4, elementName)).join("\n");

        if (children) {
            children = "\n\n" + children + "\n";
        }

        const returnStatement = indentSpace + (parentVarName ? `${parentVarName}.appendChild(${elementName});` : `return ${elementName};`);

        return declare + attrs + children + "\n" + returnStatement;
    }

    return `export default function ${componentName}() {
${generateTemplate(node, indent + 4)}
}`;
}
