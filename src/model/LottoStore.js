import { Random } from "@woowacourse/mission-utils";
import LottoTicket from "./LottoTicket.js";
import {
  LOTTO_MIN_NUMBER,
  LOTTO_MAX_NUMBER,
  LOTTO_PRICE,
  LOTTO_NUMBERS_COUNT,
} from "../constants.js";

class LottoStore {
  #randomUniqueNumbersGenerator;

  constructor(randomUniqueNumbersGenerator) {
    this.#randomUniqueNumbersGenerator =
      randomUniqueNumbersGenerator || Random.pickUniqueNumbersInRange;
  }

  publishTicket() {
    const randomNumbers = this.#randomUniqueNumbersGenerator(
      LOTTO_MIN_NUMBER,
      LOTTO_MAX_NUMBER,
      LOTTO_NUMBERS_COUNT
    );

    return new LottoTicket(randomNumbers);
  }

  publishTicketsByBudget(budget) {
    const tickets = [];
    const count = budget / LOTTO_PRICE;

    for (let i = 0; i < count; i++) {
      tickets.push(this.publishTicket());
    }

    return tickets;
  }
}

export default LottoStore;
