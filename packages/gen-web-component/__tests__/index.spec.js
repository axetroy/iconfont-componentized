import { parseFromURL } from "@iconfont-componentized/parser";
import WebComponentGenerator from "../src/index";
import path from "path";

describe("generate web component", () => {
    it("generate web component 1", async () => {
        const nodes = await parseFromURL("https://at.alicdn.com/t/font_caopq7l9o8t1emi.js");

        const gen = new WebComponentGenerator();

        const components = gen.generates(nodes);

        gen.write(components, path.join(__dirname, "output.spec.1"));
    });
});
