import { KilometerPerHour } from './KilometerPerHour.js'
import { MeterPerSecond } from './MeterPerSecond.js'
import { FeetPerSecond } from './FeetPerSecond.js'
import { MilesPerHour } from './MilesPerHour.js'
import { Knots } from './Knots.js'
import { ErrorHandler } from '../ErrorHandler.js'

/**
 * Class handling conversion of wind.
 */
export class WindConverter {
  /**
   * Gets correct converter and convert value.
   *
   * @param options - An options object with the units and value to convert.
   * @return - The converted value.
   */
  convertValue (options) {
    const errorHandler = new ErrorHandler()
    this.validateWindConversion(errorHandler, options)

    const fromUnit = options.fromUnit
    const toUnit = options.toUnit
    const value = options.value

    switch (fromUnit) {
      case 'kmh':
        const kilometerConverter = new KilometerPerHour()
        convertedValue = kilometerConverter.convertOriginalValue(fromUnit, toUnit, value)
        break
      case 'ms':
        const meterPerSecondConverter = new MeterPerSecond()
        convertedValue = meterPerSecondConverter.convertOriginalValue(fromUnit, toUnit, value)
        break
      case 'fts':
        const feetPerSecondConverter = new FeetPerSecond()
        convertedValue = feetPerSecondConverter.convertOriginalValue(fromUnit, toUnit, value)
        break
      case 'mph':
        const milesPerHourConverter = new MilesPerHour()
        convertedValue = milesPerHourConverter.convertOriginalValue(fromUnit, toUnit, value)
        break
      case 'knots':
        const knotsConverter = new Knots()
        convertedValue = knotsConverter.convertOriginalValue(fromUnit, toUnit, value)
        break

      default:
        break
    }

    return Math.round(convertedValue * 10) / 10
  }

  /**
   * Handles wind conversion errors.
   *
   * @param errorHandler - The error handler object.
   * @param options - The options object to validate.
   */
  validateWindConversion (errorHandler, options) {
    try {
      if (!options) {
        throw 'You have to specify an options object, see README'
      }

      errorHandler.validateWindUnit(options.fromUnit)
      errorHandler.validateWindUnit(options.toUnit)
      errorHandler.validatePositiveValue(options.value)
    } catch (error) {
      console.log(error)
    }
  }
}