import { Random } from "@woowacourse/mission-utils";
import Input from "./Input.js";
import Output from "./Output.js";
import Lotto from "./Lotto.js";
import LottoGame from "./LottoGame.js";

class App {
  async run() {
    const budget = await Input.getBudgetAsync();

    const lottos = [];

    for (let i = 0; i < budget / 1000; i++) {
      const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(randomNumbers);
      lottos.push(lotto);
    }

    Output.printPurchasedLottos(lottos);

    const winningNumbers = await Input.getWinningNumbersAsync();
    const bonusNumber = await Input.getBonusNumberAsync(winningNumbers);

    const lottoGame = new LottoGame(winningNumbers, bonusNumber);
    const result = lottoGame.evaluateTickets(lottos);

    const prize = LottoGame.calculatePrize(result);
    const returnOnInvestment = LottoGame.calculateReturnOnInvestment(
      prize,
      budget
    );

    Output.printResult(result);
    Output.printReturnOnInvestment(returnOnInvestment);
  }
}

export default App;
