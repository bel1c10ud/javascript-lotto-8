import LottoDraw from "../src/model/entity/LottoDraw.js";

describe("LottoDraw 클래스 테스트", () => {
  describe("getNumbers 메서드 테스트", () => {
    test("당첨 번호를 반환한다.", () => {
      const lottoDraw = new LottoDraw([1, 2, 3, 4, 5, 6], 7);
      expect(lottoDraw.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });

  describe("getBonusNumber 메서드 테스트", () => {
    test("보너스 번호를 반환한다.", () => {
      const lottoDraw = new LottoDraw([1, 2, 3, 4, 5, 6], 7);
      expect(lottoDraw.getBonusNumber()).toBe(7);
    });
  });
});
