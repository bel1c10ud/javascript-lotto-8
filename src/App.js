import Input from "./view/Input.js";
import Output from "./view/Output.js";
import LottoTicket from "./model/LottoTicket.js";
import LottoGame from "./model/LottoGame.js";

class App {
  async run() {
    const budget = await Input.getBudgetAsync();

    const tickets = LottoTicket.publishByBudget(budget);

    Output.printPurchasedLottos(tickets);

    const winningNumbers = await Input.getWinningNumbersAsync();
    const bonusNumber = await Input.getBonusNumberAsync(winningNumbers);

    const lottoGame = new LottoGame(winningNumbers, bonusNumber);
    const result = lottoGame.evaluateTickets(tickets);

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
