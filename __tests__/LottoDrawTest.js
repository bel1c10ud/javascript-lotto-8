import Lotto from "../src/model/Lotto.js";
import LottoDraw from "../src/model/LottoDraw.js";
import { RANK } from "../src/constants.js";

describe("LottoDraw 클래스 테스트", () => {
  describe("evaluateTicket 메서드 테스트", () => {
    test("3개의 숫자가 일치할 경우 5등을 반환한다.", () => {
      const ticket = new Lotto([1, 2, 3, 4, 5, 6]);
      const lottoDraw = new LottoDraw([1, 2, 3, 42, 43, 44], 45);
      expect(lottoDraw.evaluateTicket(ticket)).toBe(RANK.FIFTH);
    });

    test("4개의 숫자가 일치할 경우 4등을 반환한다.", () => {
      const ticket = new Lotto([1, 2, 3, 4, 5, 6]);
      const lottoDraw = new LottoDraw([1, 2, 3, 4, 43, 44], 45);
      expect(lottoDraw.evaluateTicket(ticket)).toBe(RANK.FOURTH);
    });

    test("5개의 숫자가 일치할 경우 3등을 반환한다.", () => {
      const ticket = new Lotto([1, 2, 3, 4, 5, 6]);
      const lottoDraw = new LottoDraw([1, 2, 3, 4, 5, 44], 45);
      expect(lottoDraw.evaluateTicket(ticket)).toBe(RANK.THIRD);
    });

    test("5개의 숫자와 보너스 번호가 일치할 경우 2등을 반환한다.", () => {
      const ticket = new Lotto([1, 2, 3, 4, 5, 6]);
      const lottoDraw = new LottoDraw([1, 2, 3, 4, 5, 45], 6);
      expect(lottoDraw.evaluateTicket(ticket)).toBe(RANK.SECOND);
    });

    test("6개의 숫자가 일치하는 경우 1등을 반환한다.", () => {
      const ticket = new Lotto([1, 2, 3, 4, 5, 6]);
      const lottoDraw = new LottoDraw([1, 2, 3, 4, 5, 6], 7);
      expect(lottoDraw.evaluateTicket(ticket)).toBe(RANK.FIRST);
    });
  });

  describe("evaluateTickets 메서드 테스트", () => {
    test("로또 티켓들을 평가하여 당첨 결과를 반환한다.", () => {
      const tickets = [
        new Lotto([1, 2, 3, 4, 5, 6]),
        new Lotto([1, 2, 3, 4, 5, 7]),
        new Lotto([1, 2, 3, 4, 5, 45]),
        new Lotto([1, 2, 3, 4, 44, 45]),
        new Lotto([1, 2, 3, 43, 44, 45]),
      ];
      const lottoDraw = new LottoDraw([1, 2, 3, 4, 5, 6], 7);
      const result = lottoDraw.evaluateTickets(tickets);
      const counts = result.getCounts();

      expect(counts).toEqual({
        [RANK.FIRST]: 1,
        [RANK.SECOND]: 1,
        [RANK.THIRD]: 1,
        [RANK.FOURTH]: 1,
        [RANK.FIFTH]: 1,
      });
    });

    test("평가할 로또 티켓이 없는 경우 모든 등수 카운트는 0이다.", () => {
      const tickets = [];
      const lottoDraw = new LottoDraw([1, 2, 3, 4, 5, 6], 7);
      const result = lottoDraw.evaluateTickets(tickets);
      const counts = result.getCounts();

      expect(counts).toEqual({
        [RANK.FIRST]: 0,
        [RANK.SECOND]: 0,
        [RANK.THIRD]: 0,
        [RANK.FOURTH]: 0,
        [RANK.FIFTH]: 0,
      });
    });

    test("당첨된 로또 티켓이 없는 경우 모든 등수 카운트는 0이다.", () => {
      const tickets = [
        new Lotto([11, 12, 13, 14, 15, 16]),
        new Lotto([11, 12, 13, 14, 15, 17]),
        new Lotto([11, 12, 13, 14, 15, 45]),
      ];
      const lottoDraw = new LottoDraw([1, 2, 3, 4, 5, 6], 7);
      const result = lottoDraw.evaluateTickets(tickets);
      const counts = result.getCounts();

      expect(counts).toEqual({
        [RANK.FIRST]: 0,
        [RANK.SECOND]: 0,
        [RANK.THIRD]: 0,
        [RANK.FOURTH]: 0,
        [RANK.FIFTH]: 0,
      });
    });
  });
});
