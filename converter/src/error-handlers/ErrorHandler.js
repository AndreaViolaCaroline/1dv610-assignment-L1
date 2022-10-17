/**
 * Class handling generic errors.
 */
export class ErrorHandler {
  /**
   * Ensure that temp value is a number. Throws an error if it is not.
   *
   * @param input - The input to validate.
   */
  validateValue (input) {
    this.isEmpty(input)
    if (this.isNotNumber(input)) {
      throw new Error('The value is not a number')
    }
  }

  /**
   * Ensure that value is a positive number. Throws an error if it is not.
   *
   * @param input - The input to validate.
   */
  validatePositiveValue (input) {
    this.isEmpty(input)
    if (this.isNotNumber(input)) {
      throw new Error('The value is not a number')
    } else if (!this.isPositive(input)) {
      throw new Error('Number must be positive')
    }
  }

  /**
   * Is the input empty? Throws an error if true.
   *
   * @param input - Input to be validated.
   */
  isEmpty (input) {
    if (input === '') {
      throw new Error('You have not provided all necessary info (unit to convert from/to or the value)')
    } 
  }

  /**
   * Is unit identical? Throws an error if true.
   *
   * @param fromUnit - From unit to be validated.
   * @param toUnit - To unit to be validated.
   */
  isIdenticalUnit (fromUnit, toUnit) {
    if (fromUnit === toUnit) {
      throw new Error('You can not convert from and to the same unit')
    }
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