import LottoStore from "../src/model/service/LottoStore";

describe("LottoStore 클래스 테스트", () => {
  describe("publishTicketsByBudget() 메서드 테스트", () => {
    test("구입 금액만큼 로또를 발행한다.", () => {
      const lottoStore = new LottoStore();
      const lottoTickets = lottoStore.publishTicketsByBudget(10000);
      expect(lottoTickets).toHaveLength(10);
    });

    test("구입 금액이 0인 경우 로또를 발행하지 않는다.", () => {
      const lottoStore = new LottoStore();
      const lottoTickets = lottoStore.publishTicketsByBudget(0);
      expect(lottoTickets).toHaveLength(0);
    });
  });
});
