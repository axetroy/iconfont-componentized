import { parseFromURL } from "@axetroy/iconfont-componentized-parser";
import DOMComponentGenerator from "../src/index";
import path from "path";

describe("generate svg", () => {
    it("generate svg 1", async () => {
        const nodes = await parseFromURL("https://at.alicdn.com/t/font_caopq7l9o8t1emi.js");

        const gen = new DOMComponentGenerator();

        const components = gen.generates(nodes);

        gen.write(components, path.join(__dirname, "output.spec.1"));
    });
});
