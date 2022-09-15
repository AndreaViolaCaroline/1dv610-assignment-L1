/**
 * Main entry point package.
 */
import { ErrorHandler } from './ErrorHandler.js'
import { FeetPerSecond } from './FeetPerSecond.js'
import { KilometerPerHour } from './KilometerPerHour.js'
import { Knots } from './Knots.js'
import { MeterPerSecond } from './MeterPerSecond.js'
import { MilesPerHour } from './MilesPerHour.js'

/**
 * Converts one wind speed unit to another.
 *
 * @param {*} options 
 * @returns 
 */
export default function windwizard (options) {
  const errorhandler = new ErrorHandler()
  let converter

  try {
    errorhandler.validateInputUnit(options.fromUnit)
    errorhandler.validateInputUnit(options.toUnit)

    errorhandler.validateInputNumber(options.value)

    const fromUnit = options.fromUnit
    const toUnit = options.toUnit
    let convertedValue

    switch (fromUnit) {
      case 'kmh':
        converter = new KilometerPerHour()

        if (fromUnit === 'kmh' && toUnit === 'ms') {
          convertedValue = converter.convertToMeterPerSecond(options.value)
        } else if (fromUnit === 'kmh' && toUnit === 'fts') {
          convertedValue = converter.convertToFeetPerSecond(options.value)
        } else if (fromUnit === 'kmh' && toUnit === 'mph') {
          convertedValue = converter.convertToMilesPerHour(options.value)
        } else if (fromUnit === 'kmh' && toUnit === 'knots') {
          convertedValue = converter.convertToKnots(options.value)
        }
        break
      case 'ms':
        converter = new MeterPerSecond()

        if (fromUnit === 'ms' && toUnit === 'kmh') {
          convertedValue = converter.convertToKilometerPerHour(options.value)
        } else if (fromUnit === 'ms' && toUnit === 'fts') {
          convertedValue = converter.convertToFeetPerSecond(options.value)
        } else if (fromUnit === 'ms' && toUnit === 'mph') {
          convertedValue = converter.convertToMilesPerHour(options.value)
        } else if (fromUnit === 'ms' && toUnit === 'knots') {
          convertedValue = converter.convertToKnots(options.value)
        }
        break
      case 'fts':
        converter = new FeetPerSecond()
        if (fromUnit === 'fts' && toUnit === 'kmh') {
          convertedValue = converter.convertToKilometerPerHour(options.value)
        } else if (fromUnit === 'fts' && toUnit === 'ms') {
          convertedValue = converter.convertToMeterPerSecond(options.value)
        } else if (fromUnit === 'fts' && toUnit === 'mph') {
          convertedValue = converter.convertToMilesPerHour(options.value)
        } else if (fromUnit === 'fts' && toUnit === 'knots') {
          convertedValue = converter.convertToKnots(options.value)
        }
        break
      case 'mph':
        converter = new MilesPerHour()
        if (fromUnit === 'mph' && toUnit === 'kmh') {
          convertedValue = converter.convertToKilometerPerHour(options.value)
        } else if (fromUnit === 'mph' && toUnit === 'ms') {
          convertedValue = converter.convertToMeterPerSecond(options.value)
        } else if (fromUnit === 'mph' && toUnit === 'fts') {
          convertedValue = converter.convertToFeetPerSecond(options.value)
        } else if (fromUnit === 'mph' && toUnit === 'knots') {
          convertedValue = converter.convertToKnots(options.value)
        }
        break
      case 'knots':
        converter = new Knots()
        if (fromUnit === 'knots' && toUnit === 'kmh') {
          convertedValue = converter.convertToKilometerPerHour(options.value)
        } else if (fromUnit === 'knots' && toUnit === 'ms') {
          convertedValue = converter.convertToMeterPerSecond(options.value)
        } else if (fromUnit === 'knots' && toUnit === 'fts') {
          convertedValue = converter.convertToFeetPerSecond(options.value)
        } else if (fromUnit === 'knots' && toUnit === 'mph') {
          convertedValue = converter.convertToMilesPerHour(options.value)
        }
        break

      default:
        break
    }

    return Math.round(convertedValue * 10) / 10 

  } catch (error) {
    console.log(error)
  }
}

