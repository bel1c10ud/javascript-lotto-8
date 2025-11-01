import Input from "./view/Input.js";
import Output from "./view/Output.js";
import LottoTicket from "./model/LottoTicket.js";
import LottoGame from "./model/LottoGame.js";

class App {
  async run() {
    const budget = await Input.getBudgetAsync();

    const tickets = LottoTicket.publishByBudget(budget);

    Output.printPurchasedTickets(tickets);

    const winningNumbers = await Input.getWinningNumbersAsync();
    const bonusNumber = await Input.getBonusNumberAsync(winningNumbers);

    const lottoGame = new LottoGame(winningNumbers, bonusNumber);
    const result = lottoGame.evaluateTickets(tickets);

    const counts = result.getCounts();
    const returnOnInvestment = result.getReturnOnInvestment(budget);

    Output.printStatistics(counts, returnOnInvestment);
  }
}

export default App;
