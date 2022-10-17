import { VolumeError } from './VolumeError.js'
/**
 * Class handling volume unit validation
 */
export class VolumeErrorHandler {
  /**
   * Ensure that the volume unit is a valid unit.
   *
   * @param unit - The unit to validate.
   */
  validateVolumeFromUnit (unit) {
    if (!this.isValidVolumeFromUnit(unit)) {
      const volumeError = new VolumeError()
      volumeError.setErrorInfo('The unit is not a valid FROM unit (ounces, pounds)')
      throw volumeError
    }
  }

  /**
   * Ensure that the volume unit is a valid unit.
   *
   * @param unit - The unit to validate.
   */
   validateVolumeToUnit (unit) {
    if (!this.isValidVolumeToUnit(unit)) {
      const volumeError = new VolumeError()
      volumeError.setErrorInfo('The unit is not a valid TO unit (litres)')
      throw volumeError
    }
  }

  /**
   * Is it a valid volume unit to convert FROM?
   *
   * @param unit - unit to be validated.
   * @return - True if includes a valid unit.
   */
  isValidVolumeFromUnit (unit) {
    const validUnits = ['pints', 'gallons']

    return validUnits.includes(unit)
  }

  /**
   * Is it a valid volume unit to convert FROM?
   *
   * @param unit - unit to be validated.
   * @return - True if includes a valid unit.
   */
     isValidVolumeToUnit (unit) {
      const validUnits = ['litres']
  
      return validUnits.includes(unit)
    }
}