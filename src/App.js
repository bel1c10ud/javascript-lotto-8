import Input from "./view/Input.js";
import Output from "./view/Output.js";
import LottoDraw from "./model/entity/LottoDraw.js";
import LottoStore from "./model/service/LottoStore.js";
import LottoEvaluator from "./model/service/LottoEvaluator.js";

class App {
  constructor({ input, output, lottoStore } = {}) {
    this.input = input ?? new Input();
    this.output = output ?? new Output();
    this.lottoStore = lottoStore ?? new LottoStore();
  }

  async run() {
    const budget = await this.input.getBudgetAsync();
    const tickets = this.lottoStore.publishTicketsByBudget(budget);
    this.output.printPurchasedTickets(tickets);

    const winningNumbers = await this.input.getWinningNumbersAsync();
    const bonusNumber = await this.input.getBonusNumberAsync(winningNumbers);

    const lottoDraw = new LottoDraw(winningNumbers, bonusNumber);
    const result = LottoEvaluator.evaluateTickets(lottoDraw, tickets);

    const counts = result.getCounts();
    const returnOnInvestment = result.getReturnOnInvestment(budget);
    this.output.printStatistics(counts, returnOnInvestment);
  }
}

export default App;
