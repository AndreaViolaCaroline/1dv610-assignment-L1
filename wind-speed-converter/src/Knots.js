/**
 * Class handling conversion FROM knots TO kmh, m/s, ft/s, mph.
 */

 export class Knots {
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
