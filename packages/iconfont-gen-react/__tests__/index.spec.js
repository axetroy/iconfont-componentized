import { parseFromURL } from "iconfont-parser";
import { generateComponents, generate } from "../src/index";
import path from "path";

describe("generate react", () => {
    it("generate react 1", async () => {
        const nodes = await parseFromURL("https://at.alicdn.com/t/font_caopq7l9o8t1emi.js");

        const components = generateComponents(nodes);

        console.log(JSON.stringify(components, null, 4))

        expect(components).toEqual(require("./index.spec.1.json"));
    });

    it("generate react 2", async () => {
        const nodes = await parseFromURL("https://at.alicdn.com/t/font_caopq7l9o8t1emi.js");

        generate(nodes, path.join(__dirname, 'output.spec.1'));
    });
});
