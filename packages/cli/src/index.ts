import path from "path";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import { parseFromURL } from "@iconfont-componentized/parser";
import { ComponentGenerator } from "@iconfont-componentized/share";
import ReactComponentGenerator from "@iconfont-componentized/gen-react";
import SVGComponentGenerator from "@iconfont-componentized/gen-svg";
import VueComponentGenerator from "@iconfont-componentized/gen-vue";
import WebComponentComponentGenerator from "@iconfont-componentized/gen-web-component";

const argv = yargs(hideBin(process.argv)).argv;

function printHelp(exitCode: number = 0) {
    process.stderr.write(`Usage: iconfont-componentized-cli <command> [options]

<command>:
    generate  Generate icon component from iconfont url

[options]:
    --url          Url of iconfont symbol for generate icon component
    --target       The generate target. support 'react', 'vue', 'svg', 'web-component'
    --output       The output directory. defaults to '$PWD/components'
    -h,--help      Print help
    -V,--version   Print version
    `);

    process.exit(exitCode);
}

function printVersion(exitCode: number = 0) {
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
const targetStr = (argv["target"] as string) ?? "react,vue,svg,web-component";
const targets = targetStr.split(",").map((v) => v.trim());

function getGenerator(target: string) {
    let gen: ComponentGenerator;

    switch (target.toLowerCase()) {
        case "react":
            gen = new ReactComponentGenerator();
            break;
        case "svg":
            gen = new SVGComponentGenerator();
            break;
        case "vue":
            gen = new VueComponentGenerator();
            break;
        case "web-component":
            gen = new WebComponentComponentGenerator();
            break;
        default:
            throw new Error('Invalid target, support "react", "vue", "svg", "web-component"');
    }

    return gen;
}

if (!symbolURL) {
    throw new Error("Missing required argument: url");
}

parseFromURL(symbolURL)
    .then((icons) => {
        for (const target of targets) {
            const gen = getGenerator(target);

            const components = gen.generates(icons);

            const dest = path.join(outputDir, target.toLowerCase());

            gen.write(components, dest);
        }
    })
    .catch((err) => {
        console.error(err);

        process.exit(1);
    });
