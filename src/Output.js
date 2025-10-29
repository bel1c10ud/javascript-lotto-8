import { Console } from "@woowacourse/mission-utils";

class Output {
  static printEmptyLine() {
    Console.print("");
  }

  static printLottoCount(count) {
    Console.print(`${count}개를 구입했습니다.`);
  }

  static printResult(result) {
    Console.print("");
    Console.print("당첨 통계");
    Console.print("---");
    Console.print(`3개 일치 (5,000원) - ${result["5등"]}개`);
    Console.print(`4개 일치 (50,000원) - ${result["4등"]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${result["3등"]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${result["2등"]}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${result["1등"]}개`);
  }

  static printRate(prize, budget) {
    const rate = ((prize / budget) * 100).toFixed(1);
    Console.print(`총 수익률은 ${rate}%입니다.`);
  }
}

export default Output;
