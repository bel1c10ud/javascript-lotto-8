import Validator from "../src/utils/Validator.js";

describe("Validator 클래스 테스트", () => {
  test("입력값이 비어있는 경우 에러가 발생한다.", () => {
    expect(() => {
      Validator.validateNotEmpty("", "");
    }).toThrow("");
  });

  test("입력값이 숫자가 아닌 경우 에러가 발생한다.", () => {
    expect(() => {
      Validator.validateNumber("abc", "");
    }).toThrow("[ERROR]");
  });

  test("입력값이 정수가 아닌경우 에러가 발생한다.", () => {
    expect(() => {
      Validator.validateInteger(3.14, "");
    }).toThrow("");
  });

  test("입력값이 양수가 아닌경우 에러가 발생한다.", () => {
    expect(() => {
      Validator.validatePositive(-1, "");
    }).toThrow("");
  });

  test("입력한 첫번째 값이 두번째 값의 배수가 아닌경우 에러가 발생한다.", () => {
    expect(() => {
      Validator.validateMultiple(11, 2, "");
    }).toThrow("");
  });
});
