import { Icon } from "@axetroy/iconfont-componentized-parser";
import fs from "fs-extra";
import path from "path";

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
    generate(icon: Icon): Component; // 生成单个组件
    generates(icons: Icon[]): Component[]; // 生成多个组件
    write(components: Array<Component>, outputDir: string): void; // 写入磁盘
}

// 将组件写入磁盘
export function writeComponentsToDisk(components: Component[], outputDir: string) {
    for (const component of components) {
        for (const file of component.files) {
            const absoluteFilepath = path.join(outputDir, ...file.filepath.split("/"));

            fs.ensureDirSync(path.dirname(absoluteFilepath));

            fs.writeFileSync(absoluteFilepath, file.content);
        }
    }
}