import { RANK_PRIZE } from "../constants.js";

class LottoResult {
  #counts;

  constructor(counts) {
    this.#counts = { ...counts };
  }

  getPrize() {
    return Object.entries(this.#counts).reduce(
      (acc, [rank, count]) => acc + RANK_PRIZE[rank] * count,
      0
    );
  }

  getReturnOnInvestment(budget) {
    if (budget <= 0) return 0;
    const prize = this.getPrize();
    return (prize / budget) * 100;
  }

  getCounts() {
    return { ...this.#counts };
  }
}

export default LottoResult;
