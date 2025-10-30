import { Console } from "@woowacourse/mission-utils";

class Output {
  static printLottoCount(count) {
    Console.print(`${count}개를 구매했습니다.`);
  }

  static printPurchasedLottos(tickets) {
    Console.print(`${tickets.length}개를 구매했습니다.`);

    tickets.forEach((ticket) => {
      const lottoNumbers = ticket.getNumbers();
      Console.print(`[${lottoNumbers.join(", ")}]`);
    });

    Console.print("");
  }

  static printResult(result) {
    Console.print("당첨 통계");
    Console.print("---");
    Console.print(`3개 일치 (5,000원) - ${result["RANK_5"]}개`);
    Console.print(`4개 일치 (50,000원) - ${result["RANK_4"]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${result["RANK_3"]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${result["RANK_2"]}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${result["RANK_1"]}개`);
  }

  static printReturnOnInvestment(returnOnInvestment) {
    Console.print(`총 수익률은 ${returnOnInvestment.toFixed(1)}%입니다.`);
  }
}

export default Output;
