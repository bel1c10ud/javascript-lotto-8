import Input from "./view/Input.js";
import Output from "./view/Output.js";
import LottoGame from "./model/LottoGame.js";
import LottoStore from "./model/LottoStore.js";

class App {
  async run() {
    const budget = await Input.getBudgetAsync();

    const lottoStore = new LottoStore();
    const tickets = lottoStore.publishTicketsByBudget(budget);

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
