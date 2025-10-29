class LottoGame {
  #winningNumbers;
  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    this.#validate(winningNumbers, bonusNumber);
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  #validate(winningNumbers, bonusNumber) {
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error("[ERROR] 당첨 번호와 보너스 번호는 중복 될 수 없습니다.");
    }
  }

  static prizeMap = {
    "1등": 2000000000,
    "2등": 30000000,
    "3등": 1500000,
    "4등": 50000,
    "5등": 5000,
  };

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

    const prize = Object.entries(result).reduce(
      (acc, [rank, count]) => acc + LottoGame.prizeMap[rank] * count,
      0
    );

    return { ...result, 상금: prize };
  }
}

export default LottoGame;
