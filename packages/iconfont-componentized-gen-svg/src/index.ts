import { Icon } from "@axetroy/iconfont-componentized-parser";
import { generateSvg } from "@axetroy/iconfont-componentized-share";
import fs from "fs";
import path from "path";

export interface Component {
    id: string;
    content: string;
}

export function generateComponents(icons: Icon[]) {
    return icons.map((c) => generateComponent(c));
}

export function generate(icons: Icon[], outputDir: string) {
    const components = generateComponents(icons);

    // generate component file
    for (const component of components) {
        fs.writeFileSync(path.join(outputDir, component.id + ".svg"), component.content);
    }
}

function generateComponent(icon: Icon): Component {
    const svgHeader = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd" >
`;

    const svgStr = svgHeader + generateSvg(icon.node, 0, {});

    return {
        id: icon.id,
        content: svgStr,
    };
}
