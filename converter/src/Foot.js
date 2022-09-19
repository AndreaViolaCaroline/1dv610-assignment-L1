/**
 * Class handling conversion FROM feet TO centimeter and meter.
 */
 export class Foot {
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
