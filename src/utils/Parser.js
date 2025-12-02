import Validator from "./Validator.js";
import { LOTTO, ERROR_MESSAGE } from "../constants.js";

class Parser {
  static parseBudget(input) {
    Validator.validateNotEmpty(input, ERROR_MESSAGE.BUDGET.EMPTY);

    const budget = Number(input);

    Validator.validateNumber(budget, ERROR_MESSAGE.BUDGET.NOT_NUMBER);
    Validator.validatePositive(budget, ERROR_MESSAGE.BUDGET.NOT_POSITIVE);
    Validator.validateMultiple(
      budget,
      LOTTO.PRICE,
      ERROR_MESSAGE.BUDGET.NOT_MULTIPLE_OF_1000
    );

    return budget;
  }

  static parseWinningNumbers(input) {
    Validator.validateNotEmpty(input, ERROR_MESSAGE.WINNING_NUMBERS.EMPTY);

    const winningNumbers = input.split(",").map(Number);

    Validator.validateCount(winningNumbers, ERROR_MESSAGE.WINNING_NUMBERS.NOT_COUNT);
    winningNumbers.forEach((number) => {
      Validator.validateNumber(number, ERROR_MESSAGE.WINNING_NUMBERS.NOT_IN_RANGE);
      Validator.validateInteger(number, ERROR_MESSAGE.WINNING_NUMBERS.NOT_IN_RANGE);
      Validator.validateRange(number, ERROR_MESSAGE.WINNING_NUMBERS.NOT_IN_RANGE);
    });
    Validator.validateUnique(winningNumbers, ERROR_MESSAGE.WINNING_NUMBERS.NOT_UNIQUE);

    return winningNumbers;
  }

  static parseBonusNumber(input, winningNumbers) {
    Validator.validateNotEmpty(input, ERROR_MESSAGE.BONUS_NUMBER.EMPTY);

    const bonusNumber = Number(input);

    Validator.validateNumber(bonusNumber, ERROR_MESSAGE.BONUS_NUMBER.NOT_IN_RANGE);
    Validator.validateInteger(bonusNumber, ERROR_MESSAGE.BONUS_NUMBER.NOT_IN_RANGE);
    Validator.validateRange(bonusNumber, ERROR_MESSAGE.BONUS_NUMBER.NOT_IN_RANGE);
    Validator.validateUnique([...winningNumbers, bonusNumber], ERROR_MESSAGE.BONUS_NUMBER.NOT_UNIQUE);

    return bonusNumber;
  }
}

export default Parser;
