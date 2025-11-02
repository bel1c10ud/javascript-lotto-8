import LottoDraw from "./model/LottoDraw.js";

class App {
  constructor({ input, output, lottoStore }) {
    this.input = input;
    this.output = output;
    this.lottoStore = lottoStore;
  }

  async run() {
    const budget = await this.input.getBudgetAsync();
    const tickets = this.lottoStore.publishTicketsByBudget(budget);
    this.output.printPurchasedTickets(tickets);

    const winningNumbers = await this.input.getWinningNumbersAsync();
    const bonusNumber = await this.input.getBonusNumberAsync(winningNumbers);

    const lottoDraw = new LottoDraw(winningNumbers, bonusNumber);
    const result = lottoDraw.evaluateTickets(tickets);

    const counts = result.getCounts();
    const returnOnInvestment = result.getReturnOnInvestment(budget);
    this.output.printStatistics(counts, returnOnInvestment);
  }
}

export default App;
