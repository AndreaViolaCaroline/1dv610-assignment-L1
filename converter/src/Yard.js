/**
 * Class handling conversion FROM yard TO meter and kilometer.
 */
export class Yard {
  /**
   * Converts value from yards to meters.
   *
   * @param {number} yards - The yards value.
   * @return - The meter value.
   */
  convertToMeters (yards) {
    const meters = yards * 0.9144

    return meters
  }

  /**
   * Converts value from yards to kilometer.
   *
   * @param {number} yards - The yards value.
   * @return - The kilometer value.
   */
  convertToKilometers (yards) {
    const kilometers = yards * 0.000914

    return kilometers
  }
}