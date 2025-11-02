import {
  LOTTO_MIN_NUMBER,
  LOTTO_MAX_NUMBER,
  LOTTO_NUMBERS_COUNT,
  ERROR_MESSAGE,
} from "../constants.js";

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
    this.#validateCount(numbers);
    this.#validateRange(numbers);
    this.#validateUnique(numbers);
  }

  #validateCount(numbers) {
    if (numbers.length !== LOTTO_NUMBERS_COUNT) {
      throw new Error(ERROR_MESSAGE.LOTTO_NUMBERS.NOT_COUNT);
    }
  }

  #validateRange(numbers) {
    if (
      numbers.some(
        (number) =>
          Number.isNaN(number) ||
          !Number.isInteger(number) ||
          number < LOTTO_MIN_NUMBER ||
          number > LOTTO_MAX_NUMBER
      )
    ) {
      throw new Error(ERROR_MESSAGE.LOTTO_NUMBERS.NOT_IN_RANGE);
    }
  }

  #validateUnique(numbers) {
    if (new Set(numbers).size !== LOTTO_NUMBERS_COUNT) {
      throw new Error(ERROR_MESSAGE.LOTTO_NUMBERS.NOT_UNIQUE);
    }
  }
}

export default Lotto;
