function stringToByteArray(str) {
    const byteArray = [];
    for (let i = 0; i < str.length; i++) {
        byteArray.push(str.charCodeAt(i) & 0xff);
    }
    return byteArray;
}

function byteArrayToBase64(byteArray) {
    const binaryString = String.fromCharCode.apply(null, byteArray);
    return btoa(binaryString);
}

export function svgToBase64(svgString) {
    const svgBytes = stringToByteArray(svgString);
    const base64Encoded = byteArrayToBase64(svgBytes);
    return base64Encoded;
}

const svgNameSpace = "http://www.w3.org/2000/svg";

export function generateSvgJSX(node, indent, props) {
    const indentSpace = " ".repeat(indent);

    const attributes = { ...node.attributes };

    // 删除掉一些不需要的属性
    ["id", "class"].forEach((property) => {
        delete attributes[property];
    });

    if (node.name === "svg") {
        attributes["xmlns"] = svgNameSpace;
    }

    const properties = Object.keys(attributes)
        .map((key) => {
            const prop = {
                type: "normal",
                key: key,
                value: attributes[key],
            };

            return prop;
        })
        .concat(props);

    function renderProperty(prop) {
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
