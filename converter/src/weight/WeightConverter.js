import { ErrorHandler } from '../error-handlers/ErrorHandler.js'
import { WeightErrorHandler } from '../error-handlers/weight-errors/WeightErrorHandler.js.js'
import { Ounce } from './Ounce.js'
import { Pound } from './Pound.js'

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
   * @param errorHandler - The generic error handler object.
   * @param options - The options object to validate.
   */
  validateWeightConversion (errorHandler, options) {
    if (!options) {
      throw 'You have to specify an options object, see README'
    }
    errorHandler.validatePositiveValue(options.value)
    Object.values(options).forEach(value => {
      errorHandler.isEmpty(value)
    })

    const weightErrorHandler = new WeightErrorHandler()
    weightErrorHandler.validateWeightFromUnit(options.fromUnit)
    weightErrorHandler.validateWeightToUnit(options.toUnit)
  }
}