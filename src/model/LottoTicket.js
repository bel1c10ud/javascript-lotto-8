import { Random } from "@woowacourse/mission-utils";
import {
  LOTTO_MIN_NUMBER,
  LOTTO_MAX_NUMBER,
  LOTTO_PRICE,
  LOTTO_NUMBERS_COUNT,
  ERROR_MESSAGE,
} from "../constants.js";

class LottoTicket {
  static publish() {
    const randomNumbers = Random.pickUniqueNumbersInRange(
      LOTTO_MIN_NUMBER,
      LOTTO_MAX_NUMBER,
      LOTTO_NUMBERS_COUNT
    );
    return new LottoTicket(randomNumbers);
  }

  static publishByBudget(budget) {
    const tickets = [];
    const count = budget / LOTTO_PRICE;

    for (let i = 0; i < count; i++) {
      tickets.push(LottoTicket.publish());
    }

    return tickets;
  }

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
