import Lotto from "./Lotto.js";
import { ERROR_MESSAGE } from "../../constants.js";
import Validator from "../../utils/Validator.js";

class LottoDraw extends Lotto {
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    super(numbers);
    Validator.validateUnique([...this.getNumbers(), bonusNumber], ERROR_MESSAGE.BONUS_NUMBER.NOT_UNIQUE);
    this.#bonusNumber = bonusNumber;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default LottoDraw;
