import { Console } from "@woowacourse/mission-utils";

class Output {
  static printEmptyLine() {
    Console.print("");
  }

  static printLottoCount(count) {
    Console.print(`${count}개를 구매했습니다.`);
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

  static printRate(prize, budget) {
    const rate = ((prize / budget) * 100).toFixed(1);
    Console.print(`총 수익률은 ${rate}%입니다.`);
  }
}

export default Output;
