/**
 * Class handling generic errors.
 */
export class ErrorHandler {
  /**
   * Ensure that temp value is a number.
   *
   * @param input - The input to validate.
   */
  validateValue (input) {
    if (this.isEmpty(input)) {
      throw new Error('The value is empty')
    } else if (this.isNotNumber(input)) {
      throw new Error('The value is not a number')
    }
  }

  /**
   * Ensure that value is a positive number.
   *
   * @param input - The input to validate.
   */
  validatePositiveValue (input) {
    if (this.isEmpty(input)) {
      throw new Error('The value is empty')
    } else if (this.isNotNumber(input)) {
      throw new Error('The value is not a number')
    } else if (!this.isPositive(input)) {
      throw new Error('Number must be positive')
    }
  }

  /**
   * Is the input empty?
   *
   * @param input - Input to be validated.
   * @return - True if input is empty.
   */
  isEmpty (input) {
    return input === ''
  }

  /**
   * Is the input a number?
   *
   * @param input - Input to be validated.
   * @return - True if input is NOT a number of digits.
   */
  isNotNumber (input) {
    return isNaN(input)
  }

  /**
   * Is the number a POSITIVE number?
   *
   * @param number - number to be validated.
   * @return - True if number is positive.
   */
  isPositive (number) {
    return number > 0
  }
}