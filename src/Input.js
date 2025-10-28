import { Console } from "@woowacourse/mission-utils";

class Input {
  static async readBudgetAsync() {
    try {
      const budget = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
      return budget;
    } catch (error) {
      throw new Error("[ERROR] 구입 금액을 입력받던 중 오류가 발생했습니다.");
    }
  }

  static async readWinningNumbersAsync() {
    try {
      const winningNumbers = await Console.readLineAsync(
        "당첨 번호를 입력해 주세요.\n"
      );
      return winningNumbers;
    } catch (error) {
      throw new Error("[ERROR] 당첨 번호를 입력받던 중 오류가 발생했습니다.");
    }
  }

  static async readBonusNumberAsync() {
    try {
      const bonusNumber = await Console.readLineAsync(
        "보너스 번호를 입력해 주세요.\n"
      );
      return bonusNumber;
    } catch (error) {
      throw new Error("[ERROR] 보너스 번호를 입력받던 중 오류가 발생했습니다.");
    }
  }
}

export default Input;
