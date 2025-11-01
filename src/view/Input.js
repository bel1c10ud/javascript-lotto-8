import { Console } from "@woowacourse/mission-utils";
import Parser from "../utils/Parser.js";
import { INPUT_MESSAGE, ERROR_MESSAGE } from "../constants.js";

class Input {
  static async getBudgetAsync() {
    while (true) {
      try {
        const budgetStr = await this.readBudgetAsync();
        const budget = Parser.parseBudget(budgetStr);

        Console.print("");

        return budget;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  static async getWinningNumbersAsync() {
    while (true) {
      try {
        const winningNumbersStr = await this.readWinningNumbersAsync();
        const winningNumbers = Parser.parseWinningNumbers(winningNumbersStr);

        Console.print("");

        return winningNumbers;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  static async getBonusNumberAsync(winningNumbers) {
    while (true) {
      try {
        const bonusNumberStr = await this.readBonusNumberAsync();
        const bonusNumber = Parser.parseBonusNumber(
          bonusNumberStr,
          winningNumbers
        );

        Console.print("");

        return bonusNumber;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  static async readBudgetAsync() {
    try {
      const budget = await Console.readLineAsync(INPUT_MESSAGE.BUDGET);
      return budget;
    } catch (error) {
      throw new Error(ERROR_MESSAGE.BUDGET.FAIL_INPUT);
    }
  }

  static async readWinningNumbersAsync() {
    try {
      const winningNumbers = await Console.readLineAsync(
        INPUT_MESSAGE.WINNING_NUMBERS
      );
      return winningNumbers;
    } catch (error) {
      throw new Error(ERROR_MESSAGE.WINNING_NUMBERS.FAIL_INPUT);
    }
  }

  static async readBonusNumberAsync() {
    try {
      const bonusNumber = await Console.readLineAsync(
        INPUT_MESSAGE.BONUS_NUMBER
      );
      return bonusNumber;
    } catch (error) {
      throw new Error(ERROR_MESSAGE.BONUS_NUMBER.FAIL_INPUT);
    }
  }
}

export default Input;
