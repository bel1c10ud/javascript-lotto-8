import { Console } from "@woowacourse/mission-utils";
import { RANK, RANK_LABEL } from "../constants.js";

class Output {
  static printPurchasedLottos(tickets) {
    Console.print(`${tickets.length}개를 구매했습니다.`);

    tickets.forEach((ticket) => {
      const lottoNumbers = ticket.getNumbers();
      Console.print(`[${lottoNumbers.join(", ")}]`);
    });

    Console.print("");
  }

  static printStatistics(counts, returnOnInvestment) {
    Console.print("당첨 통계");
    Console.print("---");
    Object.values(RANK)
      .reverse()
      .forEach((rank) => {
        Console.print(`${RANK_LABEL[rank]} - ${counts[rank]}개`);
      });
    Console.print(`총 수익률은 ${returnOnInvestment.toFixed(1)}%입니다.`);
  }
}

export default Output;
