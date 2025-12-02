import AppError from "../error/AppError.js";
import { LOTTO } from "../constants.js";

class Validator {
  static validateNotEmpty(input, errorMessage) {
    if (!input || input.trim() === "") {
      throw new AppError(errorMessage);
    }
  }

  static validateNumber(input, errorMessage) {
    if (Number.isNaN(input)) {
      throw new AppError(errorMessage);
    }
  }

  static validateInteger(input, errorMessage) {
    if (!Number.isInteger(input)) {
      throw new AppError(errorMessage);
    }
  }

  static validatePositive(input, errorMessage) {
    if (input <= 0) {
      throw new AppError(errorMessage);
    }
  }

  static validateMultiple(input, base, errorMessage) {
    if (input % base !== 0) {
      throw new AppError(errorMessage);
    }
  }

  static validateRange(input, errorMessage) {
    if (input < LOTTO.MIN_NUMBER || input > LOTTO.MAX_NUMBER) {
      throw new AppError(errorMessage);
    }
  }

  static validateCount(input, errorMessage) {
    if (input.length !== LOTTO.NUMBERS_COUNT) {
      throw new AppError(errorMessage);
    }
  }

  static validateUnique(input, errorMessage) {
    if (new Set(input).size !== input.length) {
      throw new AppError(errorMessage);
    }
  }
}

export default Validator;
