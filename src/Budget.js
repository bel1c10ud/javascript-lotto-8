class Budget {
  #budget;

  constructor(input) {
    this.#budget = this.#validate(input);
  }

  #validate(input) {
    if (!input || input.trim() === "") {
      throw new Error("[ERROR] 구입 금액이 입력되지 않았습니다.");
    }

    const budget = Number(input);

    if (isNaN(budget)) {
      throw new Error("[ERROR] 구입 금액은 숫자여야 합니다.");
    }

    if (budget < 0) {
      throw new Error("[ERROR] 구입 금액은 음수일 수 없습니다.");
    }

    if (budget % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1000원 단위여야 합니다.");
    }

    return budget;
  }

  get value() {
    return this.#budget;
  }

  get lottoCount() {
    return this.#budget / 1000;
  }
}

export default Budget;
