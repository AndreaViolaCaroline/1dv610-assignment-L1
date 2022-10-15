/**
 * Class handling conversion FROM miles TO meter and kilometer.
 */
export class Mile {
  /**
   * Converts the original value.
   *
   * @param {string} fromUnit
   * @param {string} toUnit
   * @param {int} value
   */
   convertOriginalValue (fromUnit, toUnit, value) {
    let convertedValue

    if (fromUnit === 'miles' && toUnit === 'meters') {
      convertedValue = this.convertToMeters(value)
    } else if (fromUnit === 'miles' && toUnit === 'kilometers') {
      convertedValue = this.convertToKilometers(value)
    }

    return convertedValue
  }

  /**
   * Converts value from miles to meters.
   *
   * @param {number} miles - The miles value.
   * @return - The meter value.
   */
  convertToMeters (miles) {
    const meters = miles * 1609.344

    return meters
  }

  /**
   * Converts value from miles to kilometer.
   *
   * @param {number} miles - The miles value.
   * @return - The kilometer value.
   */
  convertToKilometers (miles) {
    const kilometers = miles * 1.60934

    return kilometers
  }
}