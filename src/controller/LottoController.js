import Input from "../view/Input.js";
import Output from "../view/Output.js";
import LottoDraw from "../model/entity/LottoDraw.js";
import LottoEvaluator from "../model/service/LottoEvaluator.js";
import LottoStore from "../model/service/LottoStore.js";
import { LOTTO } from "../constants.js";

class LottoController {
  #input;
  #output;
  #lottoStore;

  constructor({ input, output, lottoStore } = {}) {
    this.#input = input ?? new Input();
    this.#output = output ?? new Output();
    this.#lottoStore = lottoStore ?? new LottoStore();
  }

  async start() {
    const tickets = await this.#purchaseTickets();
    this.#output.printPurchasedTickets(tickets);

    const lottoDraw = await this.#drawLotto();

    const { counts, returnOnInvestment } = this.#getStatistics(lottoDraw, tickets);
    this.#output.printStatistics(counts, returnOnInvestment);
  }

  async #purchaseTickets() {
    const budget = await this.#input.getBudgetAsync();
    const tickets = this.#lottoStore.publishTicketsByBudget(budget);
    return tickets;
  }

  async #drawLotto() {
    const winningNumbers = await this.#input.getWinningNumbersAsync();
    const bonusNumber = await this.#input.getBonusNumberAsync(winningNumbers);
    return new LottoDraw(winningNumbers, bonusNumber);
  }

  #getStatistics(lottoDraw, tickets) {
    const result = LottoEvaluator.evaluateTickets(lottoDraw, tickets);
    const counts = result.getCounts();
    const returnOnInvestment = result.getReturnOnInvestment(tickets.length * LOTTO.PRICE);
    return { counts, returnOnInvestment };
  }
}

export default LottoController;
