class LottoGame {
  #winningNumbers;
  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  getRank(lotto) {
    const lottoNumbers = lotto.getNumbers();
    const matchCount = lottoNumbers.filter((number) =>
      this.#winningNumbers.includes(number)
    ).length;
    const hasBonus = lottoNumbers.includes(this.#bonusNumber);

    if (matchCount === 6) return "1등";
    if (matchCount === 5 && hasBonus) return "2등";
    if (matchCount === 5) return "3등";
    if (matchCount === 4) return "4등";
    if (matchCount === 3) return "5등";
    return null;
  }

  getResult(lottos) {
    const result = { "1등": 0, "2등": 0, "3등": 0, "4등": 0, "5등": 0 };

    lottos.forEach((lotto) => {
      const rank = this.getRank(lotto);
      if (rank) result[rank]++;
    });

    return result;
  }
}

export default LottoGame;
