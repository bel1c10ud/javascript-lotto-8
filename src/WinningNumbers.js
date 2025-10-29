class WinningNumbers {
  #winningNumbers;

  constructor(input) {
    this.#winningNumbers = this.#validate(input);
  }

  #validate(input) {
    if (!input || input.trim() === "") {
      throw new Error("[ERROR] 당첨 번호가 입력되지 않았습니다.");
    }

    const winningNumbers = input.split(",").map(Number);

    if (
      winningNumbers.some(
        (number) => isNaN(number) || number < 1 || number > 45
      )
    ) {
      throw new Error(
        "[ERROR] 당첨 번호는 1부터 45 사이의 숫자만 입력할 수 있습니다."
      );
    }

    if (winningNumbers.length !== 6) {
      throw new Error("[ERROR] 당첨 번호는 6자리여야 합니다.");
    }

    if (new Set(winningNumbers).size !== 6) {
      throw new Error("[ERROR] 당첨 번호는 중복될 수 없습니다.");
    }

    return winningNumbers;
  }

  get value() {
    return this.#winningNumbers;
  }
}

export default WinningNumbers;
