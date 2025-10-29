import { Random } from "@woowacourse/mission-utils";
import Input from "./Input.js";
import Output from "./Output.js";
import Budget from "./Budget.js";
import Lotto from "./Lotto.js";
import LottoGame from "./LottoGame.js";

class App {
  parseWinningNumbers(winningNumbersStr) {
    return winningNumbersStr.split(",").map(Number);
  }

  parseBonusNumber(bonusNumberStr) {
    return Number(bonusNumberStr);
  }

  async run() {
    const budgetStr = await Input.readBudgetAsync();
    const budget = new Budget(budgetStr);

    const lottos = [];

    for (let i = 0; i < budget.lottoCount; i++) {
      const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(randomNumbers);
      lottos.push(lotto);
    }

    Output.printEmptyLine();
    Output.printLottoCount(lottos.length);

    lottos.forEach((lotto) => {
      lotto.print();
    });

    Output.printEmptyLine();

    const winningNumbersStr = await Input.readWinningNumbersAsync();
    const winningNumbers = this.parseWinningNumbers(winningNumbersStr);

    Output.printEmptyLine();

    const bonusNumbersStr = await Input.readBonusNumberAsync();
    const bonusNumber = this.parseBonusNumber(bonusNumbersStr);

    const lottoGame = new LottoGame(winningNumbers, bonusNumber);
    const result = lottoGame.getResult(lottos);

    Output.printResult(result);
    Output.printRate(result["상금"], budget.value);
  }
}

export default App;
