/**
 *
 */
import { getMonth } from "./index";

describe("Date helper", () => {
  describe("When getMonth is called", () => {
    it("the function return janvier for 2022-01-01 as date", () => {
      // ici j'ai complete ce test
      const date = new Date("2022-01-01");
      const month = getMonth(date);
      expect(month).toBe("janvier");
    });

    it("the function return juillet for 2022-07-08 as date", () => {
      // ici j'ai complete ce test
      const date = new Date(" 2022-07-08");
      const month = getMonth(date);
      expect(month).toBe("juillet");
    });
    //  ici j'ajoute une possibilitée de date erronée
    it("the function return undefined for 2022-13-01 as date", () => {
      const date = new Date(" 2022-13-01");
      const month = getMonth(date);
      expect(month).toBe(undefined);
    });
  });
});
