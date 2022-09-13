/**
 * Main entry point package.
 */
import { ErrorHandler } from './ErrorHandler'
import { FeetPerSecond } from './FeetPerSecond'
import { KilometerPerHour } from './KilometerPerHour'
import { Knots } from './Knots'
import { MeterPerSecond } from './MeterPerSecond'
import { MilesPerHour } from './MilesPerHour'

function windwizard (options) {
  const errorhandler = new ErrorHandler()
  let converter

  try {
    errorhandler.validateInput(options.value)

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

  } catch (error) {
    console.log(error)
  }
}
