import { parseFromURL } from "@axetroy/iconfont-componentized-parser";
import { generateComponents, generate } from "../src/index";
import path from "path";

describe("generate svg", () => {
    it("generate svg 1", async () => {
        const nodes = await parseFromURL("https://at.alicdn.com/t/font_caopq7l9o8t1emi.js");

        const components = generateComponents(nodes);

        expect(components).toEqual(require("./index.spec.1.json"));
    });

    it("generate svg 2", async () => {
        const nodes = await parseFromURL("https://at.alicdn.com/t/font_caopq7l9o8t1emi.js");

        generate(nodes, path.join(__dirname, 'output.spec.1'));
    });
});
