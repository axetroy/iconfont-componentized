import axios from "axios";
import { INode, parse } from "svgson";

export interface Icon {
    id: string;
    node: INode;
}

export type SvgNode = INode;

function trimTextNode(node: SvgNode) {
    if (!node.children) return;

    node.children = node.children.filter((v) => v.type !== "text");

    for (const child of node.children) {
        trimTextNode(child);
    }
}

/**
 * 从 URL 中解析出 svg 图标
 * @param url
 * @returns
 */
export async function parseFromURL(url: string): Promise<Icon[]> {
    url = /^\/\//.test(url) ? "https:" + url : url;

    const resp = await axios(url);

    const matcher = /<svg>(.+?)<\/svg>/.exec(resp.data);

    if (!matcher) {
        throw new Error(`'${url}' is not a valid icon font url`);
    }

    const svgStr = matcher[0];

    const node = await parse(svgStr);

    trimTextNode(node);

    const icons: Icon[] = [];

    for (const child of node.children) {
        if (child.name === "symbol") {
            const svgNode = {
                ...node,
                children: [],
                attributes: { ...node.attributes, ...child.attributes },
            };

            icons.push({
                id: child.attributes.id.replace(/^icon(font)?[-_]{0,}(.+)/, (_, __, $2) => $2),
                node: {
                    ...svgNode,
                    children: child.children,
                },
            });
        }
    }

    return icons;
}
