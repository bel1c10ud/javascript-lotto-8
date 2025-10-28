import { Console } from "@woowacourse/mission-utils";

class App {
  async getBudgetAsync() {
    try {
      const budget = await Console.readLineAsync("구입금액을 입력해 주세요.");
      return budget;
    } catch (error) {
      throw new Error("[ERROR] 구입 금액을 입력받던 중 오류가 발생했습니다.");
    }
  }

  async getWinningNumbersAsync() {
    try {
      const winningNumbers = await Console.readLineAsync("당첨 번호를 입력해 주세요.");
      return winningNumbers;
    } catch (error) {
      throw new Error("[ERROR] 당첨 번호를 입력받던 중 오류가 발생했습니다.");
    }
  }

  async getBonusNumberAsync() {
    try {
      const bonusNumber = await Console.readLineAsync("보너스 번호를 입력해 주세요.");
      return bonusNumber;
    } catch (error) {
      throw new Error("[ERROR] 보너스 번호를 입력받던 중 오류가 발생했습니다.");
    }
  }

  parseBudget(budgetStr) {
    return Number(budgetStr);
  }

  parseWinningNumbers(winningNumbersStr) {
    return winningNumbersStr.split(',').map(Number);
  }

  parseBonusNumber(bonusNumberStr) {
    return Number(bonusNumberStr);
  }

  async run() {
    const budgetStr = await this.getBudgetAsync();
    const budget = this.parseBudget(budgetStr);

    const winningNumbersStr = await this.getWinningNumbersAsync();
    const winningNumbers = this.parseWinningNumbers(winningNumbersStr);
    
    const bonusNumbersStr = await this.getBonusNumberAsync();
    const bonusNumber = this.parseBonusNumber(bonusNumbersStr);
  }
}

export default App;
