import { Random } from "@woowacourse/mission-utils";

class LottoTicket {
  static MIN_NUMBER = 1;
  static MAX_NUMBER = 45;
  static NUMBERS_COUNT = 6;
  static PRICE = 1000;

  static publish() {
    const randomNumbers = Random.pickUniqueNumbersInRange(
      LottoTicket.MIN_NUMBER,
      LottoTicket.MAX_NUMBER,
      LottoTicket.NUMBERS_COUNT
    );
    return new LottoTicket(randomNumbers);
  }

  static publishByBudget(budget) {
    const tickets = [];
    const count = budget / LottoTicket.PRICE;

    for (let i = 0; i < count; i++) {
      tickets.push(LottoTicket.publish());
    }

    return tickets;
  }

  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = [...numbers].sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (numbers.length !== LottoTicket.NUMBERS_COUNT) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    if (new Set(numbers).size !== LottoTicket.NUMBERS_COUNT) {
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }

    if (
      numbers.some(
        (number) =>
          isNaN(number) ||
          number < LottoTicket.MIN_NUMBER ||
          number > LottoTicket.MAX_NUMBER ||
          !Number.isInteger(number)
      )
    ) {
      throw new Error("[ERROR] 로또 번호는 1에서 45 사이의 숫자여야 합니다.");
    }
  }

  getNumbers() {
    return [...this.#numbers];
  }
}

export default LottoTicket;
