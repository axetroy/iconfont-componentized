import { DiskWriter } from "@iconfont-componentized/share";

import ReactComponentGenerator from "../src/index";
import path from "path";

describe("generate react", () => {
    it("generate react 1", async () => {
        await new ReactComponentGenerator(DiskWriter).write("https://at.alicdn.com/t/font_caopq7l9o8t1emi.js", {
            outputDir: path.join(__dirname, "output.spec.1"),
        });
    });
});
