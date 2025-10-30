class LottoGame {
  #winningNumbers;
  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  static prizeMap = {
    "RANK_1": 2000000000,
    "RANK_2": 30000000,
    "RANK_3": 1500000,
    "RANK_4": 50000,
    "RANK_5": 5000,
  };

  getRank(lotto) {
    const lottoNumbers = lotto.getNumbers();
    const matchCount = lottoNumbers.filter((number) =>
      this.#winningNumbers.includes(number)
    ).length;
    const hasBonus = lottoNumbers.includes(this.#bonusNumber);

    if (matchCount === 6) return "RANK_1";
    if (matchCount === 5 && hasBonus) return "RANK_2";
    if (matchCount === 5) return "RANK_3";
    if (matchCount === 4) return "RANK_4";
    if (matchCount === 3) return "RANK_5";
    return null;
  }

  getResult(lottos) {
    const result = { "RANK_1": 0, "RANK_2": 0, "RANK_3": 0, "RANK_4": 0, "RANK_5": 0 };

    lottos.forEach((lotto) => {
      const rank = this.getRank(lotto);
      if (rank) result[rank]++;
    });

    const prize = Object.entries(result).reduce(
      (acc, [rank, count]) => acc + LottoGame.prizeMap[rank] * count,
      0
    );

    return { ...result, 상금: prize };
  }
}

export default LottoGame;
