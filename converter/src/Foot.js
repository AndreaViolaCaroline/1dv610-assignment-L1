/**
 * Class handling conversion FROM feet TO centimeter and meter.
 */
 export class Foot {
  /**
   * Converts the original value.
   *
   * @param {string} fromUnit
   * @param {string} toUnit
   * @param {int} value
   */
   convertOriginalValue (fromUnit, toUnit, value) {
    let convertedValue

    if (fromUnit === 'feet' && toUnit === 'centimeters') {
      convertedValue = this.convertToCentimeters(value)
    } else if (fromUnit === 'feet' && toUnit === 'meters') {
      convertedValue = this.convertToMeters(value)
    }

    return convertedValue
  }

  /**
   * Converts value from feet to centimeter.
   *
   * @param {number} feet - The feet value.
   * @return - The centimeter value.
   */
   convertToCentimeters (feet) {
    const centimeters = feet * 30.48

    return centimeters
  }

  /**
   * Converts value from feet to meters.
   *
   * @param {number} feet - The feet value.
   * @return - The meter value.
   */
   convertToMeters (feet) {
    const meters = feet * 0.3048

    return meters
  }
}
