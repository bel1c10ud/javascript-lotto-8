class InputParser {
  static parseBudget(budgetStr) {
    if (!budgetStr || budgetStr.trim() === "") {
      throw new Error("[ERROR] 구입 금액이 입력되지 않았습니다.");
    }

    const budget = Number(budgetStr);

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

  static parseWinningNumbers(winningNumbersStr) {
    if (!winningNumbersStr || winningNumbersStr.trim() === "") {
      throw new Error("[ERROR] 당첨 번호가 입력되지 않았습니다.");
    }

    const winningNumbers = winningNumbersStr.split(",").map(Number);

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

  static parseBonusNumber(bonusNumberStr, winningNumbers) {
    if (!bonusNumberStr || bonusNumberStr.trim() === "") {
      throw new Error("[ERROR] 보너스 번호가 입력되지 않았습니다.");
    }

    const bonusNumber = Number(bonusNumberStr);

    if (isNaN(bonusNumber)) {
      throw new Error(
        "[ERROR] 보너스 번호는 1부터 45 사이의 숫자만 입력할 수 있습니다."
      );
    }

    if (winningNumbers && winningNumbers.includes(bonusNumber)) {
      throw new Error("[ERROR] 당첨 번호와 보너스 번호는 중복 될 수 없습니다.");
    }

    return bonusNumber;
  }
}

export default InputParser;
