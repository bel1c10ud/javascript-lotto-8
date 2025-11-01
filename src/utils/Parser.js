import {
  LOTTO_MIN_NUMBER,
  LOTTO_MAX_NUMBER,
  LOTTO_PRICE,
  LOTTO_NUMBERS_COUNT,
  ERROR_MESSAGE,
} from "../constants.js";

class Parser {
  static parseBudget(budgetStr) {
    if (!budgetStr || budgetStr.trim() === "") {
      throw new Error(ERROR_MESSAGE.BUDGET.EMPTY);
    }

    const budget = Number(budgetStr);

    if (Number.isNaN(budget)) {
      throw new Error(ERROR_MESSAGE.BUDGET.NOT_NUMBER);
    }

    if (budget <= 0) {
      throw new Error(ERROR_MESSAGE.BUDGET.NOT_POSITIVE);
    }

    if (budget % LOTTO_PRICE !== 0) {
      throw new Error(ERROR_MESSAGE.BUDGET.NOT_MULTIPLE_OF_1000);
    }

    return budget;
  }

  static parseWinningNumbers(winningNumbersStr) {
    if (!winningNumbersStr || winningNumbersStr.trim() === "") {
      throw new Error(ERROR_MESSAGE.WINNING_NUMBERS.EMPTY);
    }

    const winningNumbers = winningNumbersStr.split(",").map(Number);

    if (
      winningNumbers.some(
        (number) =>
          Number.isNaN(number) ||
          number < LOTTO_MIN_NUMBER ||
          number > LOTTO_MAX_NUMBER ||
          !Number.isInteger(number)
      )
    ) {
      throw new Error(ERROR_MESSAGE.WINNING_NUMBERS.NOT_IN_RANGE);
    }

    if (winningNumbers.length !== LOTTO_NUMBERS_COUNT) {
      throw new Error(ERROR_MESSAGE.WINNING_NUMBERS.NOT_COUNT);
    }

    if (new Set(winningNumbers).size !== LOTTO_NUMBERS_COUNT) {
      throw new Error(ERROR_MESSAGE.WINNING_NUMBERS.NOT_UNIQUE);
    }

    return winningNumbers;
  }

  static parseBonusNumber(bonusNumberStr, winningNumbers) {
    if (!bonusNumberStr || bonusNumberStr.trim() === "") {
      throw new Error(ERROR_MESSAGE.BONUS_NUMBER.EMPTY);
    }

    const bonusNumber = Number(bonusNumberStr);

    if (
      Number.isNaN(bonusNumber) ||
      bonusNumber < LOTTO_MIN_NUMBER ||
      bonusNumber > LOTTO_MAX_NUMBER ||
      !Number.isInteger(bonusNumber)
    ) {
      throw new Error(ERROR_MESSAGE.BONUS_NUMBER.NOT_IN_RANGE);
    }

    if (winningNumbers && winningNumbers.includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.BONUS_NUMBER.NOT_UNIQUE);
    }

    return bonusNumber;
  }
}

export default Parser;
