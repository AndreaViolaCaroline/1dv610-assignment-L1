import { ErrorHandler } from '../ErrorHandler.js'
import { Volume } from './Volume.js'

/**
 * Class handling conversion of volume.
 */
export class VolumeConverter {
  /**
   * Gets correct converter and convert value.
   *
   * @param options - An options object with the units and value to convert.
   * @return - The converted value.
   */
  convertValue (options) {
    const errorHandler = new ErrorHandler()
    this.validateVolumeConversion(errorHandler, options)

    const fromUnit = options.fromUnit
    const value = options.value

    const converter = new Volume()
    const convertedValue = converter.convertOriginalValue(fromUnit, value)

    return Math.round(convertedValue * 10) / 10
  }

  /**
   * Handles volume conversion errors.
   *
   * @param errorHandler - The error handler object.
   * @param options - The options object to validate.
   */
  validateVolumeConversion (errorHandler, options) {
    try {
      if (!options) {
        throw 'You have to specify an options object, see README'
      }

      errorHandler.validateVolumeFromUnit(options.fromUnit)
      errorHandler.validatePositiveValue(options.value)
    } catch (error) {

    }
  }
}