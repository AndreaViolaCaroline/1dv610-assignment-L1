import { ErrorHandler } from '../error-handlers/ErrorHandler.js'
import { DistanceErrorHandler } from '../error-handlers/distance-errors/DistanceErrorHandler.js'
import { Foot } from './Foot.js'
import { Inch } from './Inch.js'
import { Yard } from './Yard.js'
import { Mile } from './Mile.js'

/**
 * Class handling conversion of distance.
 */
export class DistanceConverter {
  #distanceErrorHandler = new DistanceErrorHandler()

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
        this.#distanceErrorHandler.validateDistanceToCentimeterAndMeter(toUnit)
        convertedValue = inchConverter.convertOriginalValue(fromUnit, toUnit, value)
        break
      case 'feet':
        const feetConverter = new Foot()
        this.#distanceErrorHandler.validateDistanceToCentimeterAndMeter(toUnit)
        convertedValue = feetConverter.convertOriginalValue(fromUnit, toUnit, value)
        break
      case 'yards':
        const yardConverter = new Yard()
        this.#distanceErrorHandler.validateDistanceToMeterAndKilometer(toUnit)
        convertedValue = yardConverter.convertOriginalValue(fromUnit, toUnit, value)
        break
      case 'miles':
        const milesConverter = new Mile()
        this.#distanceErrorHandler.validateDistanceToMeterAndKilometer(toUnit)
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
   * @param errorHandler - The generic error handler object.
   * @param options - The options object to validate.
   */
  validateDistanceConversion (errorHandler, options) {
    if (!options) {
      throw new Error('You have to specify an options object, see README')
    }

    Object.values(options).forEach(value => {
      errorHandler.isEmpty(value)
    })
    errorHandler.validatePositiveValue(options.value)

    this.#distanceErrorHandler.validateDistanceFromUnit(options.fromUnit)
  }
}