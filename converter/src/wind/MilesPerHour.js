/**
 * Class handling conversion FROM miles per hour TO kmh, m/s, ft/s, knots.
 */

 export class MilesPerHour {
  /**
   * Converts the original value.
   *
   * @param {string} fromUnit
   * @param {string} toUnit
   * @param {int} value
   */
   convertOriginalValue (fromUnit, toUnit, value) {
    let convertedValue
    if (fromUnit === 'mph' && toUnit === 'kmh') {
      convertedValue = this.convertToKilometerPerHour(value)
    } else if (fromUnit === 'mph' && toUnit === 'ms') {
      convertedValue = this.convertToMeterPerSecond(value)
    } else if (fromUnit === 'mph' && toUnit === 'fts') {
      convertedValue = this.convertToFeetPerSecond(value)
    } else if (fromUnit === 'mph' && toUnit === 'knots') {
      convertedValue = this.convertToKnots(value)
    }

    return convertedValue
  }
  
  /**
   * Converts value from miles per hour to kilometer per hour.
   *
   * @param {number} mph - The miles per hour value.
   * @return - The kilometer per hour value.
   */
   convertToKilometerPerHour (mph) {
    const kmPerHour = mph * 1.609344

    return kmPerHour
  }

  /**
   * Converts value from miles per hour to meter per second.
   *
   * @param {number} mph - The miles per hour value.
   * @return - The meter per second value.
   */
   convertToMeterPerSecond (mph) {
    const meterPerSecond = mph * 0.44704

    return meterPerSecond
  }

  /**
   * Converts value from miles per hour to feet per second.
   *
   * @param {number} mph - The miles per hour value.
   * @return - The feet per second value.
   */
   convertToFeetPerSecond (mph) {
    const feetPerSecond = mph * 1.466667

    return feetPerSecond
  }

  /**
   * Converts value from miles per hour to knots.
   *
   * @param {number} mph - The miles per hour value.
   * @return - The knots value.
   */
   convertToKnots (mph) {
    const knots = mph * 0.868976

    return knots
  }
}
