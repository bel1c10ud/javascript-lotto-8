import Lotto from "./Lotto.js";
import LottoResult from "./LottoResult.js";
import { ERROR_MESSAGE, RANK } from "../constants.js";
import Validator from "../utils/Validator.js";

class LottoDraw extends Lotto {
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    super(numbers);
    Validator.validateUnique([...this.getNumbers(), bonusNumber], ERROR_MESSAGE.BONUS_NUMBER.NOT_UNIQUE);
    this.#bonusNumber = bonusNumber;
  }

  evaluateTicket(ticket) {
    const lottoNumbers = ticket.getNumbers();
    const matchCount = lottoNumbers.filter((number) => this.getNumbers().includes(number)).length;
    const hasBonus = lottoNumbers.includes(this.#bonusNumber);

    if (matchCount === 6) return RANK.FIRST;
    if (matchCount === 5 && hasBonus) return RANK.SECOND;
    if (matchCount === 5) return RANK.THIRD;
    if (matchCount === 4) return RANK.FOURTH;
    if (matchCount === 3) return RANK.FIFTH;
    return null;
  }

  evaluateTickets(tickets) {
    const counts = Object.values(RANK).reduce((acc, rank) => {
      acc[rank] = 0;
      return acc;
    }, {});

    tickets.forEach((ticket) => {
      const rank = this.evaluateTicket(ticket);
      if (rank) counts[rank]++;
    });

    return new LottoResult(counts);
  }
}

export default LottoDraw;
