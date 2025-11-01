import {
  LOTTO_MIN_NUMBER,
  LOTTO_MAX_NUMBER,
  LOTTO_NUMBERS_COUNT,
  ERROR_MESSAGE,
} from "../constants.js";

class LottoTicket {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = [...numbers].sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_NUMBERS_COUNT) {
      throw new Error(ERROR_MESSAGE.LOTTO_NUMBERS.NOT_COUNT);
    }

    if (new Set(numbers).size !== LOTTO_NUMBERS_COUNT) {
      throw new Error(ERROR_MESSAGE.LOTTO_NUMBERS.NOT_UNIQUE);
    }

    if (
      numbers.some(
        (number) =>
          Number.isNaN(number) ||
          number < LOTTO_MIN_NUMBER ||
          number > LOTTO_MAX_NUMBER ||
          !Number.isInteger(number)
      )
    ) {
      throw new Error(ERROR_MESSAGE.LOTTO_NUMBERS.NOT_IN_RANGE);
    }
  }

  getNumbers() {
    return [...this.#numbers];
  }
}

export default LottoTicket;
