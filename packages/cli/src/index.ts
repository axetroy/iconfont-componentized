#!/usr/bin/env node
import DOMComponentGenerator from "@iconfont-componentized/gen-dom";
import ReactComponentGenerator from "@iconfont-componentized/gen-react";
import SVGComponentGenerator from "@iconfont-componentized/gen-svg";
import VueComponentGenerator from "@iconfont-componentized/gen-vue";
import WebComponentGenerator from "@iconfont-componentized/gen-web-component";
import { parseFromURL } from "@iconfont-componentized/parser";
import { ComponentGenerator, Config, DiskWriter, getConfig } from "@iconfont-componentized/share";
import path from "path";
import { hideBin } from "yargs/helpers";
import yargs from "yargs/yargs";

const argv = yargs(hideBin(process.argv)).argv;

function printHelp(exitCode: number = 0) {
    process.stderr.write(`Usage: iconfont-componentized-cli [options]

[options]:
    --url          Url of iconfont symbol for generate icon component.
    --target       The generate target. multiple targets split with ','. support 'react', 'vue', 'svg', 'web-component'
    --output       The output directory. defaults to '$PWD/components'
    --config       The config file path of componentized.
    -h,--help      Print help
    -V,--version   Print version
`);

    process.exit(exitCode);
}

function printVersion(exitCode: number = 0) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const pkg = require("../package.json");

    process.stdout.write(pkg.version);

    process.exit(exitCode);
}

if (argv["V"] || argv["version"]) {
    printVersion();
}

if (argv["h"] || argv["help"]) {
    printHelp();
}

const symbolURL = argv["url"];
const outputDir = argv["output"] ?? path.join(process.cwd(), "components");
const targetStr = (argv["target"] as string) ?? "react,vue,svg,web-component,dom";
const configFilePath = (argv["config"] as string) ?? "iconfont-componentized.json";
const targets = targetStr.split(",").map((v) => v.trim());

function getGenerator(target: string, config: Config) {
    let gen: ComponentGenerator;

    switch (target.toLowerCase()) {
        case "react":
            gen = new ReactComponentGenerator(DiskWriter, config);
            break;
        case "svg":
            gen = new SVGComponentGenerator(DiskWriter, config);
            break;
        case "vue":
            gen = new VueComponentGenerator(DiskWriter, config);
            break;
        case "web-component":
            gen = new WebComponentGenerator(DiskWriter, config);
            break;
        case "dom":
            gen = new DOMComponentGenerator(DiskWriter, config);
        default:
            throw new Error('Invalid target, support "react", "vue", "svg", "web-component", "dom"');
    }

    return gen;
}

if (!symbolURL) {
    throw new Error("Missing required argument: url");
}

async function main() {
    const config = await getConfig(configFilePath);

    const icons = await parseFromURL(symbolURL);

    for (const target of targets) {
        const dest = path.join(outputDir, target.toLowerCase());

        const gen = getGenerator(target, config);

        gen.write(icons, {
            outputDir: dest,
        });
    }
}

main().catch((err) => {
    console.error(err);

    process.exit(1);
});
