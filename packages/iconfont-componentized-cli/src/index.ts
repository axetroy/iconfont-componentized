import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const argv = yargs(hideBin(process.argv)).argv;

function printHelp(exitCode: number = 0) {
    process.stderr.write(`Usage: iconfont-componentized-cli <command> [options]

<command>:
    generate  Generate icon component from iconfont url

[options]:
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

const url = argv[0];

console.log(argv, url);
