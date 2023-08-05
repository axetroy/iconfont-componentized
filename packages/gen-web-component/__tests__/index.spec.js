import { DiskWriter } from "@iconfont-componentized/share";
import WebComponentGenerator from "../src/index";
import path from "path";

describe("generate web component", () => {
    it("generate web component 1", async () => {
        await new WebComponentGenerator(DiskWriter).write("https://at.alicdn.com/t/font_caopq7l9o8t1emi.js", {
            outputDir: path.join(__dirname, "output.spec.1"),
        });
    });
});
