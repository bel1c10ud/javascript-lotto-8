import Validator from "../../utils/Validator.js";
import { ERROR_MESSAGE } from "../../constants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = [...numbers].sort((a, b) => a - b);
  }

  getNumbers() {
    return [...this.#numbers];
  }

  #validate(numbers) {
    Validator.validateCount(numbers, ERROR_MESSAGE.LOTTO_NUMBERS.NOT_COUNT);
    numbers.forEach((number) => {
      Validator.validateNumber(number, ERROR_MESSAGE.LOTTO_NUMBERS.NOT_IN_RANGE);
      Validator.validateInteger(number, ERROR_MESSAGE.LOTTO_NUMBERS.NOT_IN_RANGE);
      Validator.validateRange(number, ERROR_MESSAGE.LOTTO_NUMBERS.NOT_IN_RANGE);
    });
    Validator.validateUnique(numbers, ERROR_MESSAGE.LOTTO_NUMBERS.NOT_UNIQUE);
  }
}

export default Lotto;
