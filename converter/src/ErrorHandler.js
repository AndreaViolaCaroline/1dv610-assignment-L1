/**
 * Class validating input to be converted.
 */
export class ErrorHandler {
  /**
   * Ensure that the temperature unit is valid.
   */
  validateTempUnit (unit) {
    if (this.isEmpty(unit)) {
      throw 'The unit is empty'
    } else if (!this.isValidTempUnit(unit)) {
      throw 'The unit is not a valid unit (celsius/fahrenheit)'
    }
  }

  /**
   * Ensure that the wind unit is a valid unit.
   *
   * @param unit - The unit to validate.
   */
  validateWindUnit (unit) {
    if (this.isEmpty(unit)) {
      throw 'The unit is empty'
    } else if (!this.isValidWindUnit(unit)) {
      throw 'The unit is not a valid unit (kmh, ms, fts, mph, knots)'
    }
  }

  /**
   * Ensure that the distance unit is a valid unit.
   *
   * @param unit - The unit to validate.
   */
  validateDistanceFromUnit (unit) {
    if (this.isEmpty(unit)) {
      throw 'The unit is empty'
    } else if (!this.isValidDistanceFromUnit(unit)) {
      throw 'The unit is not a valid unit (inches, feet, yards, miles)'
    }
  }

  /**
   * Ensure that the distance unit is a valid unit.
   *
   * @param unit - The unit to validate.
   */
   validateDistanceToCentimeterAndMeter (unit) {
    if (this.isEmpty(unit)) {
      throw 'The unit is empty'
    } else if (!this.isValidDistanceToUnitCmAndM(unit)) {
      throw 'The unit is not a valid unit (centimeters, meters)'
    }
  }

  /**
   * Ensure that the distance unit is a valid unit.
   *
   * @param unit - The unit to validate.
   */
   validateDistanceToMeterAndKilometer (unit) {
    if (this.isEmpty(unit)) {
      throw 'The unit is empty'
    } else if (!this.isValidDistanceToUnitMeterAndKm(unit)) {
      throw 'The unit is not a valid unit (meters, kilometers)'
    }
  }

  /**
   * Ensure that temp value is a number.
   *
   * @param input - The input to validate.
   */
  validateValue (input) {
    if (this.isEmpty(input)) {
      throw 'The value is empty'
    } else if (this.isNotNumber(input)) {
      throw 'The value is not a number'
    }
  }

  /**
   * Ensure that wind value is a positive number.
   *
   * @param input - The input to validate.
   */
  validatePositiveValue (input) {
    if (this.isEmpty(input)) {
      throw 'The value is empty'
    } else if (this.isNotNumber(input)) {
      throw 'The value is not a number'
    } else if (!this.isPositive(input)) {
      throw 'Number must be positive'
    }
  }

  /**
   * Is it a valid temp unit?
   *
   * @param unit - unit to be validated.
   * @return - True if includes a valid unit.
   */
  isValidTempUnit (unit) {
    const validUnits = ['celsius', 'fahrenheit']

    return validUnits.includes(unit)
  }

  /**
   * Is it a valid wind unit?
   *
   * @param unit - unit to be validated.
   * @return - True if includes a valid unit.
   */
  isValidWindUnit (unit) {
    const validUnits = ['kmh', 'ms', 'fts', 'mph', 'knots']

    return validUnits.includes(unit)
  }

  /**
  * Is it a valid distance unit to convert FROM?
  *
  * @param unit - unit to be validated.
  * @return - True if includes a valid unit.
  */
  isValidDistanceFromUnit (unit) {
    const validUnits = ['inches', 'feet', 'yards', 'miles']

    return validUnits.includes(unit)
  }

  /**
  * Is it a valid distance unit to convert TO, centimeters/meters?
  *
  * @param unit - unit to be validated.
  * @return - True if includes a valid unit.
  */
   isValidDistanceToUnitCmAndM (unit) {
    const validUnits = ['centimeters', 'meters']

    return validUnits.includes(unit)
  }

  /**
  * Is it a valid distance unit to convert TO meters/kilometers?
  *
  * @param unit - unit to be validated.
  * @return - True if includes a valid unit.
  */
   isValidDistanceToUnitMeterAndKm (unit) {
    const validUnits = ['meters', 'kilometers']

    return validUnits.includes(unit)
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