import { suma } from "../js/ejmplo-export.js";

describe("Suma 2 números", () => {
  test("Sumar 10 y 20, debe dar como resultado 30", () => {
    expect(suma(10, 20)).toBe(30);
  });
});
