import { DistanceError } from './DistanceError.js'
/**
 * Class handling distance unit validation.
 */
export class DistanceErrorHandler {
  /**
   * Ensure that the distance unit is a valid unit.
   *
   * @param unit - The unit to validate.
   */
  validateDistanceFromUnit (unit) {
    if (!this.isValidDistanceFromUnit(unit)) {
      const distanceError = new DistanceError()
      distanceError.setErrorInfo('The unit is not a valid FROM unit (inches, feet, yards, miles)')
      throw distanceError
    }
  }

  /**
   * Ensure that the distance unit validating TO is a valid unit.
   *
   * @param unit - The unit to validate.
   */
  validateDistanceToCentimeterAndMeter (unit) {
    if (!this.isValidDistanceToUnitCmAndM(unit)) {
      const distanceError = new DistanceError()
      distanceError.setErrorInfo('The unit is not a valid TO unit (centimeters, meters)')
      throw distanceError
    }
  }

  /**
   * Ensure that the distance unit validating TO is a valid unit.
   *
   * @param unit - The unit to validate.
   */
  validateDistanceToMeterAndKilometer (unit) {
    if (!this.isValidDistanceToUnitCmAndM(unit)) {
      const distanceError = new DistanceError()
      distanceError.setErrorInfo('The unit is not a valid TO unit (meters, kilometers)')
      throw distanceError
    }
  }

  /**
   * Is it a valid distance unit to convert FROM?
   *
   * @param unit - unit to be validated.
   * @return - True if includes a valid unit.
   */
  isValidDistanceFromUnit (unit) {
    const validUnits = ['inches', 'feet', 'yards', 'miles']

    return validUnits.includes(unit)
  }

  /**
   * Is it a valid distance unit to convert TO, centimeters/meters?
   *
   * @param unit - unit to be validated.
   * @return - True if includes a valid unit.
   */
  isValidDistanceToUnitCmAndM (unit) {
    const validUnits = ['centimeters', 'meters']

    return validUnits.includes(unit)
  }

  /**
   * Is it a valid distance unit to convert TO meters/kilometers?
   *
   * @param unit - unit to be validated.
   * @return - True if includes a valid unit.
   */
  isValidDistanceToUnitMeterAndKm (unit) {
    const validUnits = ['meters', 'kilometers']

    return validUnits.includes(unit)
  }
}
