import { Icon, parseFromURL } from "@iconfont-componentized/parser";
import { Component, ComponentGenerator, Config, generateSvgJSX, GeneratorOptions, WriteConstructor } from "@iconfont-componentized/share";
import camelcase from "camelcase";

const header = `// generate by iconfont-componentized`;

export default class ReactComponentGenerator implements ComponentGenerator {
    constructor(
        public Writer: WriteConstructor,
        public config: Config,
    ) {}

    generate(icon: Icon): Component {
        const componentName = camelcase("icon-font-" + icon.id, { pascalCase: true });

        const defaultSize = this.config.defaultSize;
        const classNamePrefix = this.config.classNamePrefix;

        const svgStr = generateSvgJSX(icon.node, 8, [
            {
                type: "variable",
                key: "width",
                value: "props.size",
            },
            {
                type: "variable",
                key: "height",
                value: "props.size",
            },
            {
                type: "spread",
                value: "props",
            },
            {
                type: "variable",
                key: "className",
                value: `classNames`,
            },
        ]);

        let componentContent = `${header}
import React, { memo, useMemo } from 'react';

function ${componentName} (props) {
    const classNames = useMemo(() => {
        const classNameParts = ['${classNamePrefix}', '${classNamePrefix}-${icon.id}'];

        if (props.className) {
            classNameParts.push(props.className);
        }

        return classNameParts.join(' ');
    }, [props.className]);

    return (
${svgStr}
    )
}

${componentName}.displayName = '${componentName}';
`;

        if (defaultSize && defaultSize) {
            componentContent += `
${componentName}.defaultProps = {
    size: ${defaultSize}
}
`;
        }

        componentContent += `\nexport default memo(${componentName})\n`;

        const componentDeclaration = `${header}

import React from "react";

declare var ${componentName}: React.FC<React.SVGProps<SVGSVGElement> & { size?: number | string }>;

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
                    content: this.generateIndexComponent(components),
                },
                {
                    filepath: "index.d.ts",
                    content: this.generateIndexComponentDeclaration(components),
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

    private generateIndexComponent(components: Component[]) {
        let content = `${header}

import React, { memo } from 'react';

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

function IconFont(props) {
    switch (props.name) {
${components
    .map((v) => {
        const indentSpace = " ".repeat(8);

        return `${indentSpace}case '${v.id}': return <${v.componentName} size={props.size} {...props} />;`;
    })
    .join("\n")}
        default:
            throw new Error(\`IconFont\'s name must one of ${JSON.stringify(components.map((v) => v.id))} but got "\${props.name}"\`)
    }
}
`;

        if (this.config.defaultSize && this.config.defaultSize > 0) {
            content += `
IconFont.defaultProps = {
    size: ${this.config.defaultSize}
}
`;
        }

        content += "\nexport default memo(IconFont)";

        return content;
    }

    private generateIndexComponentDeclaration(components: Component[]) {
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

declare var IconFont: React.FC<React.SVGProps<SVGSVGElement> & { name: IconFontName, size?: number | string }>;

export default IconFont;
`;
    }
}
