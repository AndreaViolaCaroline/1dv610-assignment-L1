/**
 * Class handling conversion FROM kilometer per hour TO m/s, ft/s, mph, knots.
 */

export class KilometerPerHour {
  /**
   * Converts value from kilometer per hour to meter per second.
   *
   * @param {number} kmh - The kmh value.
   * @return - The meter per second value.
   */
  convertToMeterPerSecond (kmh) {
    const ms = (kmh * 1000) / 3600

    return ms
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