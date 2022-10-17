import { WindError } from './WindError.js'
/**
 * Class handling wind unit validation.
 */
export class WindErrorHandler {
  /**
   * Ensure that the wind unit is a valid unit.
   *
   * @param unit - The unit to validate.
   */
  validateWindUnit (unit) {
    if (!this.isValidWindUnit(unit)) {
      const windError = new WindError()
      throw windError
    }
  }

  /**
   * Is it a valid wind unit?
   *
   * @param unit - unit to be validated.
   * @return - True if includes a valid unit.
   */
  isValidWindUnit (unit) {
    const validUnits = ['kmh', 'ms', 'fts', 'mph', 'knots']

    return validUnits.includes(unit)
  }
}