/**
 * Class handling conversion FROM knots TO kmh, m/s, ft/s, mph.
 */

 export class Knots {
  /**
   * Converts the original value.
   *
   * @param {string} fromUnit
   * @param {string} toUnit
   * @param {int} value
   */
   convertOriginalValue (fromUnit, toUnit, value) {
    /* MOVED THESE IF STATEMENTS INTO THEIR RESPECTIVE CLASSES SINCE THAT ON IS REALLY THE INFORMATION EXPERT */
    let convertedValue
    if (fromUnit === 'knots' && toUnit === 'kmh') {
      convertedValue = this.convertToKilometerPerHour(value)
    } else if (fromUnit === 'knots' && toUnit === 'ms') {
      convertedValue = this.convertToMeterPerSecond(value)
    } else if (fromUnit === 'knots' && toUnit === 'fts') {
      convertedValue = this.convertToFeetPerSecond(value)
    } else if (fromUnit === 'knots' && toUnit === 'mph') {
      convertedValue = this.convertToMilesPerHour(value)
    }

    return convertedValue
  }

  /**
   * Converts value from knots to kilometer per hour.
   *
   * @param {number} knots - The knots value.
   * @return - The kilometer per hour value.
   */
   convertToKilometerPerHour (knots) {
    const kmPerHour = knots * 1.852

    return kmPerHour
  }

  /**
   * Converts value from knots to meter per second.
   *
   * @param {number} knots - The knots value.
   * @return - The meter per second value.
   */
   convertToMeterPerSecond (knots) {
    const meterPerSecond = knots * 0.514444

    return meterPerSecond
  }

  /**
   * Converts value from knots to feet per second.
   *
   * @param {number} knots - The knots value.
   * @return - The feet per second value.
   */
   convertToFeetPerSecond (knots) {
    const feetPerSecond = knots * 1.68781

    return feetPerSecond
  }

  /**
   * Converts value from knots to miles per hour.
   *
   * @param {number} knots - The knots value.
   * @return - The miles per hour value.
   */
   convertToMilesPerHour (knots) {
    const milesPerHour = knots * 1.151

    return milesPerHour
  }
}
