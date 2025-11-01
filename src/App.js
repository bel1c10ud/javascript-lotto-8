import Input from "./view/Input.js";
import Output from "./view/Output.js";
import LottoGame from "./model/LottoGame.js";
import LottoStore from "./model/LottoStore.js";

class App {
  async run() {
    const input = new Input();
    const output = new Output();
    const lottoStore = new LottoStore();

    const budget = await input.getBudgetAsync();
    const tickets = lottoStore.publishTicketsByBudget(budget);

    output.printPurchasedTickets(tickets);

    const winningNumbers = await input.getWinningNumbersAsync();
    const bonusNumber = await input.getBonusNumberAsync(winningNumbers);

    const lottoGame = new LottoGame(winningNumbers, bonusNumber);
    const result = lottoGame.evaluateTickets(tickets);

    const counts = result.getCounts();
    const returnOnInvestment = result.getReturnOnInvestment(budget);

    output.printStatistics(counts, returnOnInvestment);
  }
}

export default App;
