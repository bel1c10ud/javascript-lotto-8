export const LOTTO_MIN_NUMBER = 1;
export const LOTTO_MAX_NUMBER = 45;
export const LOTTO_NUMBERS_COUNT = 6;
export const LOTTO_PRICE = 1000;

export const RANK = {
  FIRST: "RANK_1",
  SECOND: "RANK_2",
  THIRD: "RANK_3",
  FOURTH: "RANK_4",
  FIFTH: "RANK_5",
};

export const PRIZE_MAP = {
  [RANK.FIRST]: 2_000_000_000,
  [RANK.SECOND]: 30_000_000,
  [RANK.THIRD]: 1_500_000,
  [RANK.FOURTH]: 50_000,
  [RANK.FIFTH]: 5_000,
};

export const RANK_LABEL = {
  [RANK.FIFTH]: "3개 일치 (5,000원)",
  [RANK.FOURTH]: "4개 일치 (50,000원)",
  [RANK.THIRD]: "5개 일치 (1,500,000원)",
  [RANK.SECOND]: "5개 일치, 보너스 볼 일치 (30,000,000원)",
  [RANK.FIRST]: "6개 일치 (2,000,000,000원)",
};
