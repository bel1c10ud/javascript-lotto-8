import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import {
  LOTTO_MIN_NUMBER,
  LOTTO_MAX_NUMBER,
  LOTTO_PRICE,
  LOTTO_NUMBERS_COUNT,
} from "../constants.js";

class LottoStore {
  #randomLottoNumbersGenerator;

  constructor(randomLottoNumbersGenerator) {
    this.#randomLottoNumbersGenerator =
      randomLottoNumbersGenerator ||
      (() =>
        Random.pickUniqueNumbersInRange(
          LOTTO_MIN_NUMBER,
          LOTTO_MAX_NUMBER,
          LOTTO_NUMBERS_COUNT
        ));
  }

  publishTicket() {
    const randomLottoNumbers = this.#randomLottoNumbersGenerator();
    return new Lotto(randomLottoNumbers);
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
