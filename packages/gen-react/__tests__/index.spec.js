import { DiskWriter, DEFAULT_CONFIG } from "@iconfont-componentized/share";

import TaroReactComponentGenerator from "../src/index";
import path from "path";

describe("generate react", () => {
    it("generate react 1", async () => {
        await new TaroReactComponentGenerator(DiskWriter, DEFAULT_CONFIG).write("//at.alicdn.com/t/c/font_298888_fto194kdmti.js", {
            outputDir: path.join(__dirname, "output.spec.1"),
        });
    });
});
