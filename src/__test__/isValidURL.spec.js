
import { isValidURL } from "../client/js/isValidURL.js";

describe("Testing isValidURL function", () => {
  test("should have isValidURL function defined", () => {
    expect(isValidURL).toBeDefined();
  });

  test("should return false for invalid url", () => {
    expect(isValidURL("invalid url")).toBeFalsy();
  });

  test("should return false if no url is passed", () => {
    expect(isValidURL()).toBeFalsy();
  });

  test("should return false if empty url is passed", () => {
    expect(isValidURL("")).toBeFalsy();
  });

  test("should return true for invalid url", () => {
    expect(isValidURL("https://ankitvashisht.in")).toBeTruthy();
  });

  test("should return true for invalid url", () => {
    expect(isValidURL("https://www.ankitvashisht.in")).toBeTruthy();
  });

  test("should return true for invalid url", () => {
    expect(isValidURL("https://subdomain.ankitvashisht.in/blogs/blog-1")).toBeTruthy();
  });

});
