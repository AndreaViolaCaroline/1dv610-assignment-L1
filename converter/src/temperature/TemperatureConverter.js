import { Temperature } from './Temperature.js'
import { TempErrorHandler } from '../error-handlers/temperature-errors/TempErrorHandler.js'
import { ErrorHandler } from '../error-handlers/ErrorHandler.js'

/**
 * Class handling conversion of temperature.
 */
export class TemperatureConverter {
  /**
   * Gets correct converter and convert value.
   *
   * @param options - An options object with the units and value to convert.
   * @return - The converted value.
   */
  convertValue (options) {
    const errorHandler = new ErrorHandler()
    this.validateTemperatureConversion(errorHandler, options)

    const fromUnit = options.fromUnit
    const value = options.value

    const temperatureConverter = new Temperature()
    let convertedValue = temperatureConverter.convertOriginalValue(fromUnit, value)

    return Math.round(convertedValue * 10) / 10
  }

  /**
   * Handles temperature conversion errors.
   *
   * @param errorHandler - The generic error handler object.
   * @param options - The options object to validate.
   */
  validateTemperatureConversion (errorHandler, options) {
    if (!options) {
      throw new Error('You have to specify an options object, see README')
    }

    Object.values(options).forEach(value => {
      errorHandler.isEmpty(value)
    })
    errorHandler.validateValue(options.value)

    const tempErrorHandler = new TempErrorHandler()
    tempErrorHandler.validateTempUnit(options.fromUnit)
  }
}