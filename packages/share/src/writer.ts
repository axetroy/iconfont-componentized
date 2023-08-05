import path from "path";
import fs from "fs-extra";
import JSZip from "jszip";
import { Component } from "./generator";

export interface WriterOptions {
    outputDir?: string;
}

export interface Writer {
    write(components: Component[], options: WriterOptions): Promise<void>;
}

export interface WriteConstructor {
    new (): Writer;
}

export class DiskWriter implements Writer {
    async write(components: Component[], options: WriterOptions): Promise<void> {
        if (!options.outputDir) {
            throw new Error("outputDir is required");
        }

        for (const component of components) {
            for (const file of component.files) {
                const absoluteFilepath = path.join(options.outputDir, ...file.filepath.split("/"));

                await fs.ensureDir(path.dirname(absoluteFilepath));

                await fs.writeFile(absoluteFilepath, file.content);
            }
        }
    }
}

export class WebZipWriter implements Writer {
    private createZip(components: Component[]) {
        const zip = new JSZip();

        for (const component of components) {
            for (const file of component.files) {
                zip.file(file.filepath, file.content);
            }
        }

        return zip;
    }

    async write(components: Component[], _options: WriterOptions): Promise<void> {
        // TODO
        this.createZip(components);
    }
}
