import { describe, expect, it } from "vitest";
import { isArray, isFalsy, isNil, isObject, isString } from "../utils.ts";

describe("isString", () => {
  it("should return true for strings", () => {
    expect(isString("string")).toBe(true);
    expect(isString("")).toBe(true);
  });

  it("should return false for non-strings", () => {
    expect(isString(123)).toBe(false);
    expect(isString(true)).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString({})).toBe(false);
    expect(isString([])).toBe(false);
  });
});

describe("isArray", () => {
  it("should return true for arrays", () => {
    expect(isArray([1, 2, 3])).toBe(true);
  });

  it("should return false for non-arrays", () => {
    expect(isArray("hello")).toBe(false);
    expect(isArray(123)).toBe(false);
    expect(isArray(true)).toBe(false);
    expect(isArray(null)).toBe(false);
    expect(isArray(undefined)).toBe(false);
    expect(isArray({})).toBe(false);
  });
});

describe("isFalsy", () => {
  it("should return true for falsy values", () => {
    expect(isFalsy("")).toBe(true);
    expect(isFalsy(0)).toBe(true);
    expect(isFalsy(false)).toBe(true);
    expect(isFalsy(null)).toBe(true);
    expect(isFalsy(undefined)).toBe(true);
  });

  it("should return false for truthy values", () => {
    expect(isFalsy("hello")).toBe(false);
    expect(isFalsy(123)).toBe(false);
    expect(isFalsy(true)).toBe(false);
    expect(isFalsy({})).toBe(false);
    expect(isFalsy([])).toBe(false);
  });
});

describe("isObject", () => {
  it("should return true for plain objects", () => {
    expect(isObject({ key: "value" })).toBe(true);
  });

  it("should return false for non-objects", () => {
    expect(isObject([])).toBe(false);
    expect(isObject("hello")).toBe(false);
    expect(isObject(123)).toBe(false);
    expect(isObject(true)).toBe(false);
    expect(isObject(null)).toBe(false);
    expect(isObject(undefined)).toBe(false);
  });
});

describe("isNil", () => {
  it("should return true for null and undefined", () => {
    expect(isNil(null)).toBe(true);
    expect(isNil(undefined)).toBe(true);
  });

  it("should return false for non-nil values", () => {
    expect(isNil("hello")).toBe(false);
    expect(isNil(123)).toBe(false);
    expect(isNil(true)).toBe(false);
    expect(isNil({})).toBe(false);
    expect(isNil([])).toBe(false);
  });
});
