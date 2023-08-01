import { parseFromURL } from "@axetroy/iconfont-componentized-parser";
import ReactComponentGenerator from "../src/index";
import path from "path";

describe("generate react", () => {
    it("generate react 1", async () => {
        const nodes = await parseFromURL("https://at.alicdn.com/t/font_caopq7l9o8t1emi.js");

        const gen = new ReactComponentGenerator();

        const components = new ReactComponentGenerator().generates(nodes);

        gen.write(components, path.join(__dirname, "output.spec.1"));
    });
});
