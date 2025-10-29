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

    Output.printLottoCount(lottos.length);

    lottos.forEach((lotto) => {
      lotto.print();
    });

    Output.printEmptyLine();

    const winningNumbers = await Input.getWinningNumbersAsync();
    const bonusNumber = await Input.getBonusNumberAsync(winningNumbers);

    const lottoGame = new LottoGame(winningNumbers, bonusNumber);
    const result = lottoGame.getResult(lottos);

    Output.printResult(result);
    Output.printRate(result["상금"], budget);
  }
}

export default App;
