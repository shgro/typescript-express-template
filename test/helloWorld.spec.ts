import * as assert from "power-assert";
import { HelloWorld } from "../src/helloWorld";
describe("hello", () => {
  describe("正常系", () => {
    test("期待する文字列が得られる", () => {
      const actual = HelloWorld.hello();
      const expected = "Hello, world.";
      assert.strictEqual(actual, expected);
    });
  });
});
