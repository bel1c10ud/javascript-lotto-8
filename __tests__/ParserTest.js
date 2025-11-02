import Parser from "../src/utils/Parser.js";
import { ERROR_MESSAGE } from "../src/constants.js";

describe("Parser 클래스 테스트", () => {
  describe("구입 금액 파싱 테스트", () => {
    test("구입 금액이 비어있는 경우 에러가 발생한다.", () => {
      expect(() => {
        Parser.parseBudget("");
      }).toThrow(ERROR_MESSAGE.BUDGET.EMPTY);
    });

    test("구입 금액이 숫자가 아닌 경우 에러가 발생한다.", () => {
      expect(() => {
        Parser.parseBudget("abc");
      }).toThrow(ERROR_MESSAGE.BUDGET.NOT_NUMBER);
    });

    test("구입 금액이 양수가 아닌 경우 에러가 발생한다.", () => {
      expect(() => {
        Parser.parseBudget("-1000");
      }).toThrow(ERROR_MESSAGE.BUDGET.NOT_POSITIVE);
    });

    test("구입 금액이 1000원으로 나누어 떨어지지 않는 경우 에러가 발생한다.", () => {
      expect(() => {
        Parser.parseBudget("1001");
      }).toThrow(ERROR_MESSAGE.BUDGET.NOT_MULTIPLE_OF_1000);
    });

    test("구입 금액이 정상적인 경우 구입 금액이 숫자로 반환된다.", () => {
      expect(Parser.parseBudget("1000")).toBe(1000);
    });
  });

  describe("당첨 번호 파싱 테스트", () => {
    test("당첨 번호가 비어있는 경우 에러가 발생한다.", () => {
      expect(() => {
        Parser.parseWinningNumbers("");
      }).toThrow(ERROR_MESSAGE.WINNING_NUMBERS.EMPTY);
    });

    test("당첨 번호의 갯수가 6개가 아닌 경우 에러가 발생한다.", () => {
      expect(() => {
        Parser.parseWinningNumbers("1,2,3,4,5");
      }).toThrow(ERROR_MESSAGE.WINNING_NUMBERS.NOT_COUNT);
    });

    test("당첨 번호들이 1부터 45 사이의 정수가 아닌 경우 에러가 발생한다.", () => {
      expect(() => {
        Parser.parseWinningNumbers("1,2,3,4,5,46");
      }).toThrow(ERROR_MESSAGE.WINNING_NUMBERS.NOT_IN_RANGE);
    });

    test("당첨 번호들이 중복된 경우 에러가 발생한다.", () => {
      expect(() => {
        Parser.parseWinningNumbers("1,2,3,4,5,5");
      }).toThrow(ERROR_MESSAGE.WINNING_NUMBERS.NOT_UNIQUE);
    });

    test("당첨 번호가 정상적인 경우 당첨 번호가 숫자 배열로 반환된다.", () => {
      expect(Parser.parseWinningNumbers("1,2,3,4,5,6")).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });

  describe("보너스 번호 파싱 테스트", () => {
    test("보너스 번호가 비어있는 경우 에러가 발생한다.", () => {
      expect(() => {
        Parser.parseBonusNumber("", []);
      }).toThrow(ERROR_MESSAGE.BONUS_NUMBER.EMPTY);
    });

    test("보너스 번호가 1부터 45 사이의 정수가 아닌 경우 에러가 발생한다.", () => {
      expect(() => {
        Parser.parseBonusNumber("46", []);
      }).toThrow(ERROR_MESSAGE.BONUS_NUMBER.NOT_IN_RANGE);
    });

    test("보너스 번호가 당첨 번호와 중복된 경우 에러가 발생한다.", () => {
      expect(() => {
        Parser.parseBonusNumber("1", [1]);
      }).toThrow(ERROR_MESSAGE.BONUS_NUMBER.NOT_UNIQUE);
    });

    test("보너스 번호가 정상적인 경우 보너스 번호가 숫자로 반환된다.", () => {
      expect(Parser.parseBonusNumber("1", [2, 3, 4, 5, 6, 7])).toBe(1);
    });
  });
});
