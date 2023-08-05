import { DiskWriter } from "@iconfont-componentized/share";
import VueComponentGenerator from "../src/index";
import path from "path";

describe("generate vue", () => {
    it("generate vue 1", async () => {
        await new VueComponentGenerator(DiskWriter).write("https://at.alicdn.com/t/font_caopq7l9o8t1emi.js", {
            outputDir: path.join(__dirname, "output.spec.1"),
        });
    });
});
