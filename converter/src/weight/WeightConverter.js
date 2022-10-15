import { ErrorHandler } from '../ErrorHandler.js'
import { Ounce } from './weight/Ounce.js'
import { Pound } from './weight/Pound.js'

/**
 * Class handling conversion of weight.
 */
export class WeightConverter {
  /**
   * Gets correct converter and convert value.
   *
   * @param options - An options object with the units and value to convert.
   * @return - The converted value.
   */
  convertValue (options) {
    const errorHandler = new ErrorHandler()
    this.validateWeightConversion(errorHandler, options)

    const fromUnit = options.fromUnit
    const toUnit = options.toUnit
    const value = options.value

    let convertedValue

    switch (fromUnit) {
      case 'ounces':
        const ounceConverter = new Ounce()
        convertedValue = ounceConverter.convertOriginalValue(fromUnit, toUnit, value)
        break
      case 'pounds':
        const poundConverter = new Pound()
        convertedValue = poundConverter.convertOriginalValue(fromUnit, toUnit, value)
        break
      default:
        break;
    }

    return Math.round(convertedValue * 10) / 10

  }

  /**
   * Handles weight conversion errors.
   *
   * @param errorHandler - The error handler object.
   * @param options - The options object to validate.
   */
  validateWeightConversion (errorHandler, options) {
    try {
      if (!options) {
        throw 'You have to specify an options object, see README'
      }

      errorHandler.validateWeightFromUnit(options.fromUnit)
      errorHandler.validateWeightToUnit(options.toUnit)
      errorHandler.validatePositiveValue(options.value)

    } catch (error) {

    }
  }
}