/**
 * Class handling conversion FROM ounces TO grams, kilograms.
 */
export class Ounce {
  /**
   * Converts the original value.
   *
   * @param {string} fromUnit
   * @param {int} value
   */
  convertOriginalValue (fromUnit, toUnit, value) {
    let convertedValue

    if (fromUnit === 'ounces' && toUnit === 'grams') {
      convertedValue = this.convertToGrams(value)
    } else if (fromUnit === 'ounces' && toUnit === 'kilograms') {
      convertedValue = this.convertToKilograms(value)
    }

    return convertedValue
  }

  /**
   * Converts value from ounces to grams.
   *
   * @param {number} ounces - The ounces value.
   * @return - The grams value.
   */
  convertToGrams (ounces) {
    const grams = ounces * 28.349523

    return grams
  }

  /**
   * Converts value from ounces to kilograms.
   *
   * @param {number} ounces - The ounces value.
   * @return - The meter value.
   */
  convertToKilograms (ounces) {
    const kilograms = ounces * 0.028349523

    return kilograms
  }
}