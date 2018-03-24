import * as assert from "assert";
import * as supertest from "supertest";

import { app } from "../src/app";

const agent = supertest.agent(app);

describe("各エントリポイントのテスト", () => {
  describe("正常系", () => {
    test("/", async () => {
      const res = await agent.get("/");
      assert.strictEqual(res.status, 200);
    });
  });
});
