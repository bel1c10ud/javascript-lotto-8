import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { LOTTO } from "../constants.js";

class LottoStore {
  #randomLottoNumbersGenerator;

  constructor(randomLottoNumbersGenerator) {
    this.#randomLottoNumbersGenerator =
      randomLottoNumbersGenerator ??
      (() => Random.pickUniqueNumbersInRange(LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER, LOTTO.NUMBERS_COUNT));
  }

  publishTicket() {
    const randomLottoNumbers = this.#randomLottoNumbersGenerator();
    return new Lotto(randomLottoNumbers);
  }

  publishTicketsByBudget(budget) {
    const tickets = [];
    const count = budget / LOTTO.PRICE;

    for (let i = 0; i < count; i++) {
      tickets.push(this.publishTicket());
    }

    return tickets;
  }
}

export default LottoStore;
