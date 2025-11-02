import {
  LOTTO_MIN_NUMBER,
  LOTTO_MAX_NUMBER,
  LOTTO_PRICE,
  LOTTO_NUMBERS_COUNT,
  ERROR_MESSAGE,
} from "../constants.js";

class Parser {
  static parseBudget(input) {
    this.#validateNotEmpty(input, ERROR_MESSAGE.BUDGET.EMPTY);

    const budget = Number(input);

    this.#validateNumber(budget, ERROR_MESSAGE.BUDGET.NOT_NUMBER);
    this.#validatePositive(budget, ERROR_MESSAGE.BUDGET.NOT_POSITIVE);
    this.#validateMultiple(
      budget,
      LOTTO_PRICE,
      ERROR_MESSAGE.BUDGET.NOT_MULTIPLE_OF_1000
    );

    return budget;
  }

  static parseWinningNumbers(input) {
    this.#validateNotEmpty(input, ERROR_MESSAGE.WINNING_NUMBERS.EMPTY);

    const winningNumbers = input.split(",").map(Number);

    this.#validateCount(winningNumbers, ERROR_MESSAGE.WINNING_NUMBERS.NOT_COUNT);
    winningNumbers.forEach((number) =>
      this.#validateRange(number, ERROR_MESSAGE.WINNING_NUMBERS.NOT_IN_RANGE)
    );
    this.#validateUnique(winningNumbers, ERROR_MESSAGE.WINNING_NUMBERS.NOT_UNIQUE);

    return winningNumbers;
  }

  static parseBonusNumber(input, winningNumbers) {
    this.#validateNotEmpty(input, ERROR_MESSAGE.BONUS_NUMBER.EMPTY);

    const bonusNumber = Number(input);
    
    this.#validateRange(bonusNumber, ERROR_MESSAGE.BONUS_NUMBER.NOT_IN_RANGE);
    this.#validateUnique(
      [...winningNumbers, bonusNumber],
      ERROR_MESSAGE.BONUS_NUMBER.NOT_UNIQUE
    );

    return bonusNumber;
  }

  static #validateNotEmpty(input, errorMessage) {
    if (!input || input.trim() === "") {
      throw new Error(errorMessage);
    }
  }

  static #validateNumber(input, errorMessage) {
    if (Number.isNaN(input)) {
      throw new Error(errorMessage);
    }
  }

  static #validatePositive(input, errorMessage) {
    if (input <= 0) {
      throw new Error(errorMessage);
    }
  }

  static #validateMultiple(input, base, errorMessage) {
    if (input % base !== 0) {
      throw new Error(errorMessage);
    }
  }

  static #validateRange(input, errorMessage) {
    if (
      Number.isNaN(input) ||
      !Number.isInteger(input) ||
      input < LOTTO_MIN_NUMBER ||
      input > LOTTO_MAX_NUMBER
    ) {
      throw new Error(errorMessage);
    }
  }

  static #validateCount(input, errorMessage) {
    if (input.length !== LOTTO_NUMBERS_COUNT) {
      throw new Error(errorMessage);
    }
  }

  static #validateUnique(input, errorMessage) {
    if (new Set(input).size !== input.length) {
      throw new Error(errorMessage);
    }
  }
}

export default Parser;
