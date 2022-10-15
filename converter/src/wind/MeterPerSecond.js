/**
 * Class handling conversion FROM meter per second TO kmh, ft/s, mph, knots.
 */

export class MeterPerSecond {
  /**
   * Converts the original value.
   */
  convertOriginalValue (fromUnit, toUnit, value) {
    let convertedValue
    if (fromUnit === 'ms' && toUnit === 'kmh') {
      convertedValue = this.convertToKilometerPerHour(value)
    } else if (fromUnit === 'ms' && toUnit === 'fts') {
      convertedValue = this.convertToFeetPerSecond(value)
    } else if (fromUnit === 'ms' && toUnit === 'mph') {
      convertedValue = this.convertToMilesPerHour(value)
    } else if (fromUnit === 'ms' && toUnit === 'knots') {
      convertedValue = this.convertToKnots(value)
    }

    return convertedValue
  }

  /**
   * Converts value from meter per second to kilometer per hour.
   *
   * @param {number} ms - The ms value.
   * @return - The kilometer per hour value.
   */
   convertToKilometerPerHour (ms) {
    const kmPerHour = (ms / 1000) * 3600

    return kmPerHour
  }

  /**
   * Converts value from meter per second to feet per second.
   *
   * @param {number} ms - The ms value.
   * @return - The feet per second value.
   */
   convertToFeetPerSecond (ms) {
    const feetPerSecond = ms * 3.28084

    return feetPerSecond
  }

  /**
   * Converts value from meter per second to miles per hour.
   *
   * @param {number} ms - The ms value.
   * @return - The miles per hour value.
   */
   convertToMilesPerHour (ms) {
    const milesPerHour = ms * 2.2369

    return milesPerHour
  }

  /**
   * Converts value from meter per second to knots.
   *
   * @param {number} ms - The ms value.
   * @return - The knots value.
   */
   convertToKnots (ms) {
    const knots = ms * 1.943844

    return knots
  }
}
