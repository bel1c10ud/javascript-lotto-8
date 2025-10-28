import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async getBudgetAsync() {
    try {
      const budget = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
      return budget;
    } catch (error) {
      throw new Error("[ERROR] 구입 금액을 입력받던 중 오류가 발생했습니다.");
    }
  }

  async getWinningNumbersAsync() {
    try {
      const winningNumbers = await Console.readLineAsync(
        "당첨 번호를 입력해 주세요.\n"
      );
      return winningNumbers;
    } catch (error) {
      throw new Error("[ERROR] 당첨 번호를 입력받던 중 오류가 발생했습니다.");
    }
  }

  async getBonusNumberAsync() {
    try {
      const bonusNumber = await Console.readLineAsync(
        "보너스 번호를 입력해 주세요.\n"
      );
      return bonusNumber;
    } catch (error) {
      throw new Error("[ERROR] 보너스 번호를 입력받던 중 오류가 발생했습니다.");
    }
  }

  parseBudget(budgetStr) {
    return Number(budgetStr);
  }

  parseWinningNumbers(winningNumbersStr) {
    return winningNumbersStr.split(",").map(Number);
  }

  parseBonusNumber(bonusNumberStr) {
    return Number(bonusNumberStr);
  }

  printEmptyLine() {
    Console.print("");
  }

  printLottoCount(count) {
    Console.print(`${count}개를 구입했습니다.`);
  }

  async run() {
    const budgetStr = await this.getBudgetAsync();
    const budget = this.parseBudget(budgetStr);

    const lottos = [];

    for (let i = 0; i < budget / 1000; i++) {
      const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(randomNumbers);
      lottos.push(lotto);
    }

    this.printEmptyLine();
    this.printLottoCount(lottos.length);

    lottos.forEach((lotto) => {
      lotto.print();
    });

    this.printEmptyLine();

    const winningNumbersStr = await this.getWinningNumbersAsync();
    const winningNumbers = this.parseWinningNumbers(winningNumbersStr);

    const bonusNumbersStr = await this.getBonusNumberAsync();
    const bonusNumber = this.parseBonusNumber(bonusNumbersStr);
  }
}

export default App;
