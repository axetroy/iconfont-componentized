import { Icon } from "@axetroy/iconfont-componentized-parser";
import { generateSvg, ComponentGenerator, Component, writeComponentsToDisk } from "@axetroy/iconfont-componentized-share";
import camelcase from "camelcase";

const header = `// generate by iconfont-componentized`;

export default class ReactComponentGenerator implements ComponentGenerator {
    generate(icon: Icon): Component {
        const componentName = camelcase("icon-font-" + icon.id, { pascalCase: true });

        const svgStr = generateSvg(icon.node, 8, {
            "...": "props",
        });

        const componentContent = `import React from 'react';

export default function ${componentName} (props) {
    return (
${svgStr}
    )
}

${componentName}.displayName = '${componentName}';
`;

        const componentDeclaration = `${header}

import React from "react";

declare var ${componentName}: React.FC<React.SVGProps<SVGSVGElement>>;

export default ${componentName};
`;

        return {
            id: icon.id,
            componentName: componentName,
            files: [
                {
                    filepath: componentName + ".jsx",
                    content: componentContent,
                },
                {
                    filepath: componentName + ".d.ts",
                    content: componentDeclaration,
                },
            ],
        };
    }
    generates(icons: Icon[]): Component[] {
        const components = icons.map((v) => this.generate(v));

        // generate index file
        components.push({
            id: "index",
            componentName: "index",
            files: [
                {
                    filepath: "index.jsx",
                    content: generateIndexComponent(components),
                },
                {
                    filepath: "index.d.ts",
                    content: generateIndexComponentDeclaration(components),
                },
            ],
        });

        return components;
    }
    write(components: Component[], outputDir: string): void {
        writeComponentsToDisk(components, outputDir);
    }
}

function generateIndexComponentDeclaration(components: Component[]) {
    return `${header}

import React from 'react';

export type IconFontName = ${components.map((v) => `'${v.id}'`).join(" | ")};

${components
    .map((v) => {
        return `export * from './${v.componentName}';`;
    })
    .join("\n")}

declare var IconFont: React.FC<React.SVGProps<SVGSVGElement> & { name: IconFontName }>;

export default IconFont;
`;
}

function generateIndexComponent(components: Component[]) {
    return `${header}

import React from 'react';

${components
    .map((component) => {
        return `import ${component.componentName} from "./${component.componentName}";`;
    })
    .join("\n")}

${components
    .map((component) => {
        return `export * from "./${component.componentName}";`;
    })
    .join("\n")}

export default function IconFont(props) {
    switch (props.name) {
${components
    .map((v) => {
        const indentSpace = " ".repeat(8);

        return `${indentSpace}case '${v.id}': return <${v.componentName} {...props} />;`;
    })
    .join("\n")}
        default:
            return <i style="display: none" {...props} />
    }
}`;
}
