import { Icon, parseFromURL } from "@iconfont-componentized/parser";
import { Component, ComponentGenerator, Config, GeneratorOptions, WriteConstructor } from "@iconfont-componentized/share";
import camelcase from "camelcase";
import fs from "fs";
import path from "path";

const header = `// generate by iconfont-componentized`;

export default class TaroReactComponentGenerator implements ComponentGenerator {
    constructor(
        public Writer: WriteConstructor,
        public config: Config,
    ) {}

    generate(icon: Icon): Component {
        const componentName = camelcase("icon-font-" + icon.id, { pascalCase: true });

        const defaultSize = this.config.defaultSize;
        const classNamePrefix = this.config.classNamePrefix;

        let componentContent = `${header}
import React, { memo, useMemo, useEffect } from 'react';
import Taro from '@tarojs/taro'
import { Image } from '@tarojs/components';

import { svgToBase64, generateSvgJSX } from './share';

let node;
let referenceCount = 0;

function ${componentName} (props) {
    const classNames = useMemo(() => {
        const classNameParts = ['${classNamePrefix}', '${classNamePrefix}-${icon.id}'];

        if (props.className) {
            classNameParts.push(props.className);
        }

        return classNameParts.join(' ');
    }, [props.className]);

    const src = useMemo(() => {
        // 避免大量使用组件造成的重复内存申请
        // 这么做只是为了降低内存使用量
        node = node || ${JSON.stringify(icon.node)};

        const svgStr = generateSvgJSX(node, 0, [props.color ? { type: "normal", key: "fill", value: props.color } : undefined].filter(v=>v));

        return "data:image/svg+xml;base64," + svgToBase64(svgStr);
    }, [props.color])

    const styles = useMemo(() => {
        const size = typeof props.size === "number" ? Taro.pxTransform(props.size) : props.size

        return {
            width: size,
            height: size,
            ...(props.style || {})
        }
    }, [props.size, props.style])

    useEffect(() => {
        referenceCount+=1;

        return () => {
            referenceCount-=1;

            if (referenceCount === 0) {
                node = null; // 释放内存
            }
        }
    }, [])

    return <Image lazyLoad {...props} className={classNames} style={styles} src={src} />
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
import { ImageProps } from '@tarojs/components';

declare var ${componentName}: React.FC<Omit<ImageProps, "src"> & { size?: number | string, color?: string }>;

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

        // generate share file
        components.push({
            id: "share",
            componentName: "share",
            files: [
                {
                    filepath: "share.js",
                    content: fs.readFileSync(path.join(__dirname, "share", "share.js"), { encoding: "utf-8" }),
                },
                {
                    filepath: "share.d.ts",
                    content: fs.readFileSync(path.join(__dirname, "share", "share.d.ts"), { encoding: "utf-8" }),
                },
            ],
        });

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

        return `${indentSpace}case '${v.id}': return <${v.componentName} {...props} />;`;
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
import { ImageProps } from '@tarojs/components';

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

declare var IconFont: React.FC<Omit<ImageProps, "src"> & { name: IconFontName, size?: number | string, color?: string }>;

export default IconFont;
`;
    }
}
