import { describe, it, expect } from "vitest";
import { sum } from "../src/index";

describe("sum", () => {
  it("should return the sum of two numbers", () => {
    expect(sum(2, 3)).toBe(5);
  });

  it("should return a negative number when summing two negative numbers", () => {
    expect(sum(-2, -3)).toBe(-5);
  });

  it("should return zero when summing zero and zero", () => {
    expect(sum(0, 0)).toBe(0);
  });
});
