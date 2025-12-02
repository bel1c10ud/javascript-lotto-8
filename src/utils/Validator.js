import { LOTTO } from "../constants.js";

class Validator {
  static validateNotEmpty(input, errorMessage) {
    if (!input || input.trim() === "") {
      throw new Error(errorMessage);
    }
  }

  static validateNumber(input, errorMessage) {
    if (Number.isNaN(input)) {
      throw new Error(errorMessage);
    }
  }

  static validateInteger(input, errorMessage) {
    if (!Number.isInteger(input)) {
      throw new Error(errorMessage);
    }
  }

  static validatePositive(input, errorMessage) {
    if (input <= 0) {
      throw new Error(errorMessage);
    }
  }

  static validateMultiple(input, base, errorMessage) {
    if (input % base !== 0) {
      throw new Error(errorMessage);
    }
  }

  static validateRange(input, errorMessage) {
    if (input < LOTTO.MIN_NUMBER || input > LOTTO.MAX_NUMBER) {
      throw new Error(errorMessage);
    }
  }

  static validateCount(input, errorMessage) {
    if (input.length !== LOTTO.NUMBERS_COUNT) {
      throw new Error(errorMessage);
    }
  }

  static validateUnique(input, errorMessage) {
    if (new Set(input).size !== input.length) {
      throw new Error(errorMessage);
    }
  }
}

export default Validator;
