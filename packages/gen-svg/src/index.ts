import { Icon, parseFromURL } from "@iconfont-componentized/parser";
import { Component, ComponentGenerator, Config, generateSvgJSX, GeneratorOptions, WriteConstructor } from "@iconfont-componentized/share";
import camelcase from "camelcase";

const header = `// generate by iconfont-componentized`;

export default class SVGComponentGenerator implements ComponentGenerator {
    constructor(
        public Writer: WriteConstructor,
        public config: Config,
    ) {}

    generate(icon: Icon): Component {
        const componentName = camelcase("icon-font-" + icon.id, { pascalCase: true });

        const defaultSize = this.config.defaultSize;
        const classNamePrefix = this.config.classNamePrefix;

        const svgHeader = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd" >
`;

        const svgStr =
            svgHeader +
            generateSvgJSX(icon.node, 0, [
                { type: "normal", key: "width", value: defaultSize },
                { type: "normal", key: "height", value: defaultSize },
                { type: "normal", key: "class", value: `${classNamePrefix} ${classNamePrefix}-${icon.id}` },
            ]);

        const componentDeclaration = `${header}

declare const ${componentName}: string;

export default ${componentName};
`;

        return {
            id: icon.id,
            componentName: componentName,
            files: [
                {
                    filepath: componentName + ".svg",
                    content: svgStr,
                },
                {
                    filepath: componentName + ".d.ts",
                    content: componentDeclaration,
                },
            ],
        };
    }

    generates(icons: Icon[]): Component[] {
        return icons.map((v) => this.generate(v));
    }

    async write(url: string | Icon[], options: GeneratorOptions): Promise<void> {
        const icons = typeof url === "string" ? await parseFromURL(url) : url;

        const components = this.generates(icons);

        await new this.Writer().write(components, options);
    }
}
