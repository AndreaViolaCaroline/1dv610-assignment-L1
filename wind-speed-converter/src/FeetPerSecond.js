/**
 * Class handling conversion FROM feet per second TO kmh, ft/s, mph, knots.
 */

 export class FeetPerSecond {
  /**
   * Converts value from feet per second to kilometer per hour.
   *
   * @param {number} fts - The feet per second value.
   * @return - The kilometer per hour value.
   */
   convertToKilometerPerHour (fts) {
    const kmPerHour = fts * 1.09728

    return kmPerHour
  }

  /**
   * Converts value from feet per second to meter per second.
   *
   * @param {number} fts - The feet per second value.
   * @return - The meter per second value.
   */
   convertToMeterPerSecond (fts) {
    const meterPerSecond = fts * 0.3048

    return meterPerSecond
  }

  /**
   * Converts value from feet per second to miles per hour.
   *
   * @param {number} fts - The feet per second value.
   * @return - The miles per hour value.
   */
   convertToMilesPerHour (fts) {
    const milesPerHour = fts * 0.681818

    return milesPerHour
  }

  /**
   * Converts value from feet per second to knots.
   *
   * @param {number} fts - The feet per second value.
   * @return - The knots value.
   */
   convertToKnots (fts) {
    const knots = fts * 0.592484

    return knots
  }
}