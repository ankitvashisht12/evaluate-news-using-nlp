import { handleSubmit } from "../client/js/formHandler.js";

describe("Testing handleSubmit function", () => {
  test("should have handleSubmit function defined", () => {
    expect(handleSubmit).toBeDefined();
  });

  test("should get exactly one parameter that is onsubmit event", () => {
    expect(handleSubmit.length).toBe(1);
  })
});
