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
}