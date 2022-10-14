/**
 * Class handling conversion FROM pint and gallon TO litres.
 */
export class Volume {
  /**
   * Converts the original value.
   *
   * @param {string} fromUnit
   * @param {int} value
   */
  convertOriginalValue (fromUnit, value) {
    let convertedValue

    switch (fromUnit) {
      case 'pints':
        convertedValue = this.convertPintsToLitres(value)
        break
      case 'gallons':
        convertedValue = this.convertGallonsToLitres(value)
        break
      default:
        break;
    }

    return convertedValue
  }
  /**
   * Converts value from pints to litres.
   *
   * @param {number} pints - The pints value.
   * @return - The litres value.
   */
  convertPintsToLitres (pints) {
    const litres = pints * 0.473176

    return litres
  }

  /**
   * Converts value from gallons to litres.
   *
   * @param {number} gallons - The gallons value.
   * @return - The liter value.
   */
  convertGallonsToLitres (gallons) {
    const litres = gallons * 3.785412

    return litres
  }
}