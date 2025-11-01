import { PRIZE_MAP } from "../constants.js";

class LottoResult {
  #counts;

  constructor(counts) {
    this.#counts = { ...counts };
  }

  getPrize() {
    return Object.entries(this.#counts).reduce(
      (acc, [rank, count]) => acc + PRIZE_MAP[rank] * count,
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
