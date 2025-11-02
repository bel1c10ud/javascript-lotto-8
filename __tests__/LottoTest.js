import Lotto from "../src/model/Lotto.js";
import { ERROR_MESSAGE } from "../src/constants.js";

describe("Lotto 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR_MESSAGE.LOTTO_NUMBERS.NOT_COUNT);
  });

  test("로또 번호가 1부터 45 사이의 정수가 아닌 경우 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow(ERROR_MESSAGE.LOTTO_NUMBERS.NOT_IN_RANGE);
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR_MESSAGE.LOTTO_NUMBERS.NOT_UNIQUE);
  });
});
