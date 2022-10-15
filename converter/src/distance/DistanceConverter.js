import { ErrorHandler } from '../ErrorHandler.js'
import { Foot } from './Foot.js'
import { Inch } from './Inch.js'
import { Yard } from './Yard.js'
import { Mile } from './Mile.js'

/**
 * Class handling conversion of distance.
 */
export class DistanceConverter {
  /**
   * Gets correct converter and convert value.
   *
   * @param options - An options object with the units and value to convert.
   * @return - The converted value.
   */
  convertValue (options) {
    const errorHandler = new ErrorHandler()
    this.validateDistanceConversion(errorHandler, options)

    const fromUnit = options.fromUnit
    const toUnit = options.toUnit
    const value = options.value

    let convertedValue

    switch (fromUnit) {
      case 'inches':
        const inchConverter = new Inch()
        errorHandler.validateDistanceToCentimeterAndMeter(toUnit)
        convertedValue = inchConverter.convertOriginalValue(fromUnit, toUnit, value)
        break
      case 'feet':
        const feetConverter = new Foot()
        errorHandler.validateDistanceToCentimeterAndMeter(toUnit)
        convertedValue = feetConverter.convertOriginalValue(fromUnit, toUnit, value)
        break
      case 'yards':
        const yardConverter = new Yard()
        errorHandler.validateDistanceToMeterAndKilometer(toUnit)
        convertedValue = yardConverter.convertOriginalValue(fromUnit, toUnit, value)
        break
      case 'miles':
        const milesConverter = new Mile()
        errorHandler.validateDistanceToMeterAndKilometer(toUnit)
        convertedValue = milesConverter.convertOriginalValue(fromUnit, toUnit, value)
        break

      default:
        break
    }

    return Math.round(convertedValue * 10) / 10
  }

  /**
   * Handles weight conversion errors.
   *
   * @param errorHandler - The error handler object.
   * @param options - The options object to validate.
   */
  validateDistanceConversion (errorHandler, options) {
    try {
      if (!options) {
        throw 'You have to specify an options object, see README'
      }

      errorHandler.validateDistanceFromUnit(options.fromUnit)
      errorHandler.validatePositiveValue(options.value)
    } catch (error) {

    }
  }
}