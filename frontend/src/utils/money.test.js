import { describe, it, expect } from "vitest";
import { formatCurrency } from "./money.js";

describe("formatCurrency", () => {
  it("formats 1999 as '19.99'", () => {
    expect(formatCurrency(1999)).toBe("19.99");
  });

  it("displays 2 decimals", () => {
    expect(formatCurrency(1090)).toBe("10.90");
    expect(formatCurrency(100)).toBe("1.00");
  });

  it("works with 0", () => {
    expect(formatCurrency(0)).toBe("0.00");
  })

  it("works with negative numbers", () => {
    expect(formatCurrency(-100)).toBe("-1.00");
    expect(formatCurrency(-999)).toBe("-9.99");
  })
});
