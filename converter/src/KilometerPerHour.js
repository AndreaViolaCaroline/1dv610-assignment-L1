/**
 * Class handling conversion FROM kilometer per hour TO m/s, ft/s, mph, knots.
 */

export class KilometerPerHour {
  /**
   * Converts the original value.
   *
   * @param {string} fromUnit
   * @param {string} toUnit
   * @param {int} value
   */
  convertOriginalValue (fromUnit, toUnit, value) {
    let convertedValue 
    if (fromUnit === 'kmh' && toUnit === 'ms') {
      convertedValue = this.convertToMeterPerSecond(value)
    } else if (fromUnit === 'kmh' && toUnit === 'fts') {
      convertedValue = this.convertToFeetPerSecond(value)
    } else if (fromUnit === 'kmh' && toUnit === 'mph') {
      convertedValue = this.convertToMilesPerHour(value)
    } else if (fromUnit === 'kmh' && toUnit === 'knots') {
      convertedValue = this.convertToKnots(value)
    }

    return convertedValue
  }

  /**
   * Converts value from kilometer per hour to meter per second.
   *
   * @param {number} kmh - The kmh value.
   * @return - The meter per second value.
   */
  convertToMeterPerSecond (kmh) {
    const meterPerSecond = (kmh * 1000) / 3600

    return meterPerSecond
  }

  /**
   * Converts value from kilometer per hour to feet per second.
   *
   * @param {number} kmh - The kmh value.
   * @return - The feet per second value.
   */
   convertToFeetPerSecond (kmh) {
    const feetPerSecond = kmh * 0.911344

    return feetPerSecond
  }

  /**
   * Converts value from kilometer per hour to miles per hour.
   *
   * @param {number} kmh - The kmh value.
   * @return - The miles per hour value.
   */
   convertToMilesPerHour (kmh) {
    const milesPerHour = kmh / 1.609344

    return milesPerHour
  }

  /**
   * Converts value from kilometer per hour to knots.
   *
   * @param {number} kmh - The kmh value.
   * @return - The knots value.
   */
   convertToKnots (kmh) {
    const knots = kmh * 0.539957

    return knots
  }
}