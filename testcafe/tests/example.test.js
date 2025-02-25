import { Selector } from "testcafe";

fixture`Getting Started`.page`http://localhost:4200`;

test("My first test", async (t) => {
  await t.expect(Selector("title").innerText).eql("AngularBlogs");
});
