import { DEFAULT_CONFIG, DiskWriter } from "@iconfont-componentized/share";
import SVGComponentGenerator from "../src/index";
import path from "path";

describe("generate svg", () => {
    it("generate svg 1", async () => {
        await new SVGComponentGenerator(DiskWriter, DEFAULT_CONFIG).write("https://at.alicdn.com/t/font_caopq7l9o8t1emi.js", {
            outputDir: path.join(__dirname, "output.spec.1"),
        });
    });
});
