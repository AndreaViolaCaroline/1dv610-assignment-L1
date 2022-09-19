/**
 * Class handling conversion FROM inches TO cm and decimeter.
 */
export class Inch {
  /**
   * Converts value from inches to centimeter.
   *
   * @param {number} inches - The inches value.
   * @return - The centimeter value.
   */
   convertToCentimeters (inches) {
    const centimeters = inches * 2.54

    return centimeters
  }

  /**
   * Converts value from inches to meters.
   *
   * @param {number} inches - The inches value.
   * @return - The meter value.
   */
   convertToMeters (inches) {
    const meters = inches / 39.37

    return meters
  }
}