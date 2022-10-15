/**
 * Class handling conversion FROM pounds TO grams, kilograms.
 */
export class Pound {
  /**
   * Converts the original value.
   *
   * @param {string} fromUnit
   * @param {int} value
   */
  convertOriginalValue (fromUnit, toUnit, value) {
    let convertedValue

    if (fromUnit === 'pounds' && toUnit === 'grams') {
      convertedValue = converter.convertToGrams(value)
    } else if (fromUnit === 'pounds' && toUnit === 'kilograms') {
      convertedValue = converter.convertToKilograms(value)
    }

    return convertedValue
  }

  /**
   * Converts value from pounds to grams.
   *
   * @param {number} pounds - The pounds value.
   * @return - The grams value.
   */
  convertToGrams (pounds) {
    const grams = pounds * 453.59237

    return grams
  }

  /**
   * Converts value from pounds to kilograms.
   *
   * @param {number} pounds - The pounds value.
   * @return - The kilograms value.
   */
  convertToKilograms (pounds) {
    const kilograms = pounds * 0.45359237

    return kilograms
  }
}