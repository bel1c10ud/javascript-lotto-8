import LottoResult from "../src/model/LottoResult.js";
import { PRIZE_MAP, RANK } from "../src/constants.js";

describe("LottoResult 클래스 테스트", () => {
  const ALL_RANKS_ONE_COUNTS = {
    [RANK.FIRST]: 1,
    [RANK.SECOND]: 1,
    [RANK.THIRD]: 1,
    [RANK.FOURTH]: 1,
    [RANK.FIFTH]: 1,
  };

  const ALL_RANKS_ZERO_COUNTS = {
    [RANK.FIRST]: 0,
    [RANK.SECOND]: 0,
    [RANK.THIRD]: 0,
    [RANK.FOURTH]: 0,
    [RANK.FIFTH]: 0,
  };

  const FIFTH_ONLY_COUNTS = {
    [RANK.FIRST]: 0,
    [RANK.SECOND]: 0,
    [RANK.THIRD]: 0,
    [RANK.FOURTH]: 0,
    [RANK.FIFTH]: 1,
  };

  describe("getPrize 메서드 테스트", () => {
    test("당첨 결과에 따라 상금을 계산한다.", () => {
      const lottoResult = new LottoResult(ALL_RANKS_ONE_COUNTS);
      expect(lottoResult.getPrize()).toBe(
        PRIZE_MAP[RANK.FIRST] +
          PRIZE_MAP[RANK.SECOND] +
          PRIZE_MAP[RANK.THIRD] +
          PRIZE_MAP[RANK.FOURTH] +
          PRIZE_MAP[RANK.FIFTH]
      );
    });

    test("당첨된 로또 티켓이 없는 경우 0을 반환한다.", () => {
      const lottoResult = new LottoResult(ALL_RANKS_ZERO_COUNTS);
      expect(lottoResult.getPrize()).toBe(0);
    });
  });

  describe("getReturnOnInvestment 메서드 테스트", () => {
    test("투자금이 주어지면 수익률을 계산한다.", () => {
      const lottoResult = new LottoResult(FIFTH_ONLY_COUNTS);
      expect(lottoResult.getReturnOnInvestment(5000)).toBe(100);
    });

    test("투자금이 0인 경우 0을 반환한다.", () => {
      const lottoResult = new LottoResult(FIFTH_ONLY_COUNTS);
      expect(lottoResult.getReturnOnInvestment(0)).toBe(0);
    });
  });

  describe("getCounts 메서드 테스트", () => {
    test("당첨 결과를 그대로 반환한다.", () => {
      const lottoResult = new LottoResult(ALL_RANKS_ONE_COUNTS);
      expect(lottoResult.getCounts()).toEqual({ ...ALL_RANKS_ONE_COUNTS});
    });
  });
});
