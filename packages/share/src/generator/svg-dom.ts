import { SvgNode } from "@iconfont-componentized/parser";

import { Property } from "./generator";

const svgNameSpace = "http://www.w3.org/2000/svg";

export function generateSvgDOM(node: SvgNode, indent: number, props: Property[]): string {
    let eleIndex = -1;

    function generateTemplate(node: SvgNode, indent: number, parentVarName?: string): string {
        eleIndex += 1;

        const indentSpace = " ".repeat(indent);

        const elementName = `ele${eleIndex}`;

        const declare = `${indentSpace}var ${elementName} = document.createElementNS(namespace, "${node.name}");`;

        const attributes = { ...node.attributes };

        // 删除掉一些不需要的属性
        ["id", "class"].forEach((property) => {
            delete attributes[property];
        });

        if (node.name === "svg") {
            attributes.xmlns = svgNameSpace;
        }

        function renderProperty(prop: Property) {
            if (prop.type === "spread") {
                return `${indentSpace}Object.keys(${prop.value}).forEach((key) => ${prop.value}[key] !== undefined && ${prop.value}[key] !== null && ${elementName}.setAttribute(key, ${prop.value}[key]));`;
            }

            if (prop.type === "variable") {
                return `${indentSpace}(${prop.value}) !== undefined && (${prop.value}) !== null && ${elementName}.setAttribute("${prop.key}", ${prop.value});`;
            }

            return `${indentSpace}${elementName}.setAttribute("${prop.key}", ${JSON.stringify(prop.value)});`;
        }

        let attrs = Object.keys(attributes)
            .map((attr) => {
                return `${indentSpace}${elementName}.setAttribute("${attr}", "${attributes[attr]}");`;
            })
            .concat(eleIndex === 0 ? props.map(renderProperty) : [])
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

    return `${" ".repeat(indent)}var namespace = "${svgNameSpace}";
${generateTemplate(node, indent)}`;
}
