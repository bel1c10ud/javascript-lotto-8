import { Console } from "@woowacourse/mission-utils";
import Parser from "../utils/Parser.js";
import { INPUT_MESSAGE, ERROR_MESSAGE } from "../constants.js";

class Input {
  #print;
  #readLineAsync;

  constructor(print, readLineAsync) {
    this.#print = print || Console.print;
    this.#readLineAsync = readLineAsync || Console.readLineAsync;
  }

  async getBudgetAsync() {
    while (true) {
      try {
        const budgetStr = await this.#readBudgetAsync();
        const budget = Parser.parseBudget(budgetStr);

        this.#print("");

        return budget;
      } catch (error) {
        this.#print(error.message);
      }
    }
  }

  async getWinningNumbersAsync() {
    while (true) {
      try {
        const winningNumbersStr = await this.#readWinningNumbersAsync();
        const winningNumbers = Parser.parseWinningNumbers(winningNumbersStr);

        this.#print("");

        return winningNumbers;
      } catch (error) {
        this.#print(error.message);
      }
    }
  }

  async getBonusNumberAsync(winningNumbers) {
    while (true) {
      try {
        const bonusNumberStr = await this.#readBonusNumberAsync();
        const bonusNumber = Parser.parseBonusNumber(bonusNumberStr, winningNumbers);

        this.#print("");

        return bonusNumber;
      } catch (error) {
        this.#print(error.message);
      }
    }
  }

  async #readBudgetAsync() {
    try {
      const budget = await this.#readLineAsync(INPUT_MESSAGE.BUDGET);
      return budget;
    } catch (error) {
      throw new Error(ERROR_MESSAGE.BUDGET.FAIL_INPUT);
    }
  }

  async #readWinningNumbersAsync() {
    try {
      const winningNumbers = await this.#readLineAsync(INPUT_MESSAGE.WINNING_NUMBERS);
      return winningNumbers;
    } catch (error) {
      throw new Error(ERROR_MESSAGE.WINNING_NUMBERS.FAIL_INPUT);
    }
  }

  async #readBonusNumberAsync() {
    try {
      const bonusNumber = await this.#readLineAsync(INPUT_MESSAGE.BONUS_NUMBER);
      return bonusNumber;
    } catch (error) {
      throw new Error(ERROR_MESSAGE.BONUS_NUMBER.FAIL_INPUT);
    }
  }
}

export default Input;
