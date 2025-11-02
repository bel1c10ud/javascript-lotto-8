import { Console } from "@woowacourse/mission-utils";
import { RANK_PRINT_ORDER, RANK_LABEL } from "../constants.js";

class Output {
  #print;

  constructor(print) {
    this.#print = print || Console.print;
  }

  printPurchasedTickets(tickets) {
    this.#print(`${tickets.length}개를 구매했습니다.`);

    tickets.forEach((ticket) => {
      const lottoNumbers = ticket.getNumbers();
      this.#print(`[${lottoNumbers.join(", ")}]`);
    });

    this.#print("");
  }

  printStatistics(counts, returnOnInvestment) {
    this.#print("당첨 통계");
    this.#print("---");

    RANK_PRINT_ORDER.forEach((rank) => {
      this.#print(`${RANK_LABEL[rank]} - ${counts[rank]}개`);
    });

    this.#print(`총 수익률은 ${returnOnInvestment.toFixed(1)}%입니다.`);
  }
}

export default Output;
