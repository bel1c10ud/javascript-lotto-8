import LottoResult from "../entity/LottoResult.js";
import { RANK } from "../../constants.js";

class LottoEvaluator {
  static evaluateTicket(lottoDraw, ticket) {
    const numbers = ticket.getNumbers();
    const winningNumbers = lottoDraw.getNumbers();
    const bonusNumber = lottoDraw.getBonusNumber();
    const matchCount = numbers.filter((number) => winningNumbers.includes(number)).length;
    const hasBonus = numbers.includes(bonusNumber);

    if (matchCount === 6) return RANK.FIRST;
    if (matchCount === 5 && hasBonus) return RANK.SECOND;
    if (matchCount === 5) return RANK.THIRD;
    if (matchCount === 4) return RANK.FOURTH;
    if (matchCount === 3) return RANK.FIFTH;
    return null;
  }

  static evaluateTickets(lottoDraw, tickets) {
    const counts = Object.values(RANK).reduce((acc, rank) => {
      acc[rank] = 0;
      return acc;
    }, {});

    tickets.forEach((ticket) => {
      const rank = this.evaluateTicket(lottoDraw, ticket);
      if (rank) counts[rank]++;
    });

    return new LottoResult(counts);
  }
}

export default LottoEvaluator;