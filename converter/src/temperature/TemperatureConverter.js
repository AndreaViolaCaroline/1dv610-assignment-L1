import { Temperature } from './Temperature.js'
import { ErrorHandler } from '../ErrorHandler.js'

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
   * @param errorHandler - The error handler object.
   * @param options - The options object to validate.
   */
  validateTemperatureConversion (errorHandler, options) {
    try {
      if (!options) {
        throw 'You have to specify an options object, see README'
      }

      errorHandler.validateTempUnit(options.fromUnit)
      errorHandler.validateValue(options.value)

    } catch (error) {

    }
  }
}