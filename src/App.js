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

  async run() {
    const budgetStr = await this.getBudgetAsync();
    const winningNumbersStr = await this.getWinningNumbersAsync();
    const bonusNumbersStr = await this.getBonusNumberAsync();
  }
}

export default App;
