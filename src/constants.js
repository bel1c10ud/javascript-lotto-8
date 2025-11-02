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

export const RANK_PRIZE = {
  [RANK.FIRST]: 2_000_000_000,
  [RANK.SECOND]: 30_000_000,
  [RANK.THIRD]: 1_500_000,
  [RANK.FOURTH]: 50_000,
  [RANK.FIFTH]: 5_000,
};

export const RANK_PRINT_ORDER = [
  RANK.FIFTH,
  RANK.FOURTH,
  RANK.THIRD,
  RANK.SECOND,
  RANK.FIRST,
];

export const RANK_LABEL = {
  [RANK.FIFTH]: "3개 일치 (5,000원)",
  [RANK.FOURTH]: "4개 일치 (50,000원)",
  [RANK.THIRD]: "5개 일치 (1,500,000원)",
  [RANK.SECOND]: "5개 일치, 보너스 볼 일치 (30,000,000원)",
  [RANK.FIRST]: "6개 일치 (2,000,000,000원)",
};

export const INPUT_MESSAGE = {
  BUDGET: "구입금액을 입력해 주세요.\n",
  WINNING_NUMBERS: "당첨 번호를 입력해 주세요.\n",
  BONUS_NUMBER: "보너스 번호를 입력해 주세요.\n",
};

export const ERROR_MESSAGE = {
  BUDGET: {
    FAIL_INPUT: "[ERROR] 구입 금액을 입력받던 중 오류가 발생했습니다.",
    EMPTY: "[ERROR] 구입 금액이 입력되지 않았습니다.",
    NOT_NUMBER: "[ERROR] 구입 금액은 숫자여야 합니다.",
    NOT_POSITIVE: "[ERROR] 구입 금액은 0보다 커야 합니다.",
    NOT_MULTIPLE_OF_1000: "[ERROR] 구입 금액은 1000으로 나누어 떨어야 합니다.",
  },
  WINNING_NUMBERS: {
    FAIL_INPUT: "[ERROR] 당첨 번호를 입력받던 중 오류가 발생했습니다.",
    EMPTY: "[ERROR] 당첨 번호가 입력되지 않았습니다.",
    NOT_IN_RANGE: "[ERROR] 당첨 번호는 1에서 45 사이의 숫자여야 합니다.",
    NOT_COUNT: "[ERROR] 당첨 번호는 6개여야 합니다.",
    NOT_UNIQUE: "[ERROR] 당첨 번호는 중복될 수 없습니다.",
  },
  BONUS_NUMBER: {
    FAIL_INPUT: "[ERROR] 보너스 번호를 입력받던 중 오류가 발생했습니다.",
    EMPTY: "[ERROR] 보너스 번호가 입력되지 않았습니다.",
    NOT_IN_RANGE: "[ERROR] 보너스 번호는 1에서 45 사이의 숫자여야 합니다.",
    NOT_UNIQUE: "[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.",
  },
  LOTTO_NUMBERS: {
    NOT_COUNT: "[ERROR] 로또 번호는 6개여야 합니다.",
    NOT_UNIQUE: "[ERROR] 로또 번호는 중복될 수 없습니다.",
    NOT_IN_RANGE: "[ERROR] 로또 번호는 1에서 45 사이의 숫자여야 합니다.",
  },
};
