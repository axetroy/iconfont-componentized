import { Icon } from "@iconfont-componentized/parser";

import { Config } from "../config";
import { WriteConstructor, WriterOptions } from "../writer";

export interface File {
    filepath: string; // 完整的文件路径
    content: string | Uint8Array | Buffer;
}

// 组件的定义
export interface Component {
    id: string; // 图标的 ID
    componentName: string; // 组件的名称，一般都是大写驼峰
    files: Array<File>; // 组件包含的文件，一个组件可能会生成多个文件
}

// 组件生成器
export interface ComponentGenerator {
    config: Config;
    Writer: WriteConstructor;
    generate(icon: Icon): Component; // 生成单个组件
    generates(icons: Icon[]): Component[]; // 生成多个组件
    write(url: string | Icon[], options: GeneratorOptions): Promise<void>;
}

export interface GeneratorOptions extends WriterOptions {}

export interface PropertySpread {
    type: "spread";
    value: string;
}

export interface PropertyNormal {
    type: "normal";
    key: string;
    value: unknown;
}

export interface PropertyVariable {
    type: "variable";
    key: string;
    value: unknown;
}

export type Property = PropertySpread | PropertyNormal | PropertyVariable;
