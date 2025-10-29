class BonusNumber {
  #bonusNumber;

  constructor(input) {
    this.#bonusNumber = this.#validate(input);
  }

  #validate(input) {
    if (!input || input.trim() === "") {
      throw new Error("[ERROR] 보너스 번호가 입력되지 않았습니다.");
    }

    const bonusNumber = Number(input);

    if (isNaN(bonusNumber)) {
      throw new Error(
        "[ERROR] 보너스 번호는 1부터 45 사이의 숫자만 입력할 수 있습니다."
      );
    }

    return bonusNumber;
  }

  get value() {
    return this.#bonusNumber;
  }
}

export default BonusNumber;
