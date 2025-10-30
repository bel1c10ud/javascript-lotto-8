import { Random } from "@woowacourse/mission-utils";

class Lotto {
  static MIN_NUMBER = 1;
  static MAX_NUMBER = 45;
  static NUMBERS_COUNT = 6;
  static PRICE = 1000;

  static publish() {
    const randomNumbers = Random.pickUniqueNumbersInRange(
      Lotto.MIN_NUMBER,
      Lotto.MAX_NUMBER,
      Lotto.NUMBERS_COUNT
    );
    return new Lotto(randomNumbers);
  }

  static publishByBudget(budget) {
    const tickets = [];
    const count = budget / Lotto.PRICE;

    for (let i = 0; i < count; i++) {
      tickets.push(Lotto.publish());
    }

    return tickets;
  }

  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }

    if (numbers.some((number) => isNaN(number) || number < 1 || number > 45)) {
      throw new Error("[ERROR] 로또 번호는 1에서 45 사이의 숫자여야 합니다.");
    }
  }

  getNumbers() {
    return [...this.#numbers];
  }
}

export default Lotto;
