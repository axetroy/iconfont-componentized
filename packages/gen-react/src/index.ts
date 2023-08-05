import { Icon, parseFromURL } from "@iconfont-componentized/parser";
import { generateSvg, ComponentGenerator, Component, WriteConstructor, GeneratorOptions } from "@iconfont-componentized/share";
import camelcase from "camelcase";

const header = `// generate by iconfont-componentized`;

export default class ReactComponentGenerator implements ComponentGenerator {
    constructor(public Writer: WriteConstructor) {}

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
    async write(url: string | Icon[], options: GeneratorOptions): Promise<void> {
        const icons = typeof url === "string" ? await parseFromURL(url) : url;

        const components = this.generates(icons);

        await new this.Writer().write(components, options);
    }
}

function generateIndexComponentDeclaration(components: Component[]) {
    return `${header}

import React from 'react';

export type IconFontName = ${components.map((v) => `'${v.id}'`).join(" | ")};

${components
    .map((v) => {
        return `import ${v.componentName} from './${v.componentName}';`;
    })
    .join("\n")}

${components
    .map((v) => {
        return `export { ${v.componentName} };`;
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
        return `export { ${component.componentName} };`;
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
