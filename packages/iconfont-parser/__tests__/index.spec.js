import { parseFromURL } from "../src/index";

describe("parse", () => {
  it("parse 1", async () => {
    const nodes = await parseFromURL(
      "https://at.alicdn.com/t/font_caopq7l9o8t1emi.js"
    );

    expect(nodes).toEqual(require('./index.spec.1.json'));
  });
});
