import { WeightError } from './WeightError.js'
/**
 * Class handling weight unit validation.
 */
export class WeightErrorHandler {
  /**
   * Ensure that the weight unit is a valid unit.
   *
   * @param unit - The unit to validate.
   */
  validateWeightFromUnit (unit) {
    if (!this.isValidWeightFromUnit(unit)) {
      const weightError = new WeightError()
      weightError.setErrorInfo('The unit is not a valid FROM unit (ounces, pounds)')
      throw weightError
    }
  }

  /**
   * Ensure that the weight unit is a valid unit.
   *
   * @param unit - The unit to validate.
   */
  validateWeightToUnit (unit) {
    if (!this.isValidWeightToUnit(unit)) {
      const weightError = new WeightError()
      weightError.setErrorInfo('The unit is not a valid TO unit (grams, kilograms)')
      throw weightError
    }
  }

  /**
   * Is it a valid weight unit to convert FROM?
   *
   * @param unit - unit to be validated.
   * @return - True if includes a valid unit.
   */
  isValidWeightFromUnit (unit) {
    const validUnits = ['ounces', 'pounds']

    return validUnits.includes(unit)
  }

  /**
   * Is it a valid weight unit to convert TO?
   *
   * @param unit - unit to be validated.
   * @return - True if includes a valid unit.
   */
  isValidWeightToUnit (unit) {
    const validUnits = ['grams', 'kilograms']

    return validUnits.includes(unit)
  }
}