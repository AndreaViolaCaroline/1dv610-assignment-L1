/**
 * Main entry point package.
 */
import { ErrorHandler } from './ErrorHandler.js'
import { FeetPerSecond } from './FeetPerSecond.js'
import { Foot } from './Foot.js'
import { Inch } from './Inch.js'
import { KilometerPerHour } from './KilometerPerHour.js'
import { Knots } from './Knots.js'
import { MeterPerSecond } from './MeterPerSecond.js'
import { Mile } from './Mile.js'
import { MilesPerHour } from './MilesPerHour.js'
import { Ounce } from './Ounce.js'
import { Pound } from './Pound.js'
import { Temperature } from './Temperature.js'
import { Volume } from './Volume.js'
import { Yard } from './Yard.js'

export default class Wizard {
  /**
  * Converts one wind speed unit to another.
  *
  * @param {Object} options 
  * @returns - The converted value.
  */
  convertWind (options) {
    const errorHandler = new ErrorHandler()

    if (!options) {
      throw 'You have to specify an options object, see README'
    }

    try {
      errorHandler.validateWindUnit(options.fromUnit)
      errorHandler.validateWindUnit(options.toUnit)
      errorHandler.validatePositiveValue(options.value)

      const fromUnit = options.fromUnit
      const toUnit = options.toUnit
      const value = options.value

      let converter
      let convertedValue
      // BREAK OUT ALL IF STATEMENTS TO INCREASE READABILITY, MAINTAINABILITY
      // STRUCTURE FILES, 1 FOLDER PER WIND
      switch (fromUnit) {
        case 'kmh':          
          converter = new KilometerPerHour()
          convertedValue = converter.convertOriginalValue(fromUnit, toUnit, value)
          break
        case 'ms':
          converter = new MeterPerSecond()
          convertedValue = converter.convertOriginalValue(fromUnit, toUnit, value)
          break
        case 'fts':
          converter = new FeetPerSecond()
          convertedValue = converter.convertOriginalValue(fromUnit, toUnit, value)
          break
        case 'mph':
          converter = new MilesPerHour()
          convertedValue = converter.convertOriginalValue(fromUnit, toUnit, value)
          break
        case 'knots':
          converter = new Knots()
          convertedValue = converter.convertOriginalValue(fromUnit, toUnit, value)
          break

        default:
          break
      }

      return Math.round(convertedValue * 10) / 10

    } catch (error) {
      console.log(error)
    }
  }

  /**
   * Converts fahrenheit and celsius values.
   *
   * @param {Object} options 
   * @returns - The converted value.
   */
  convertTemperature (options) {
    const errorHandler = new ErrorHandler()

    if (!options) {
      throw 'You have to specify an options object, see README'
    }

    try {
      const converter = new Temperature

      errorHandler.validateTempUnit(options.fromUnit)
      errorHandler.validateValue(options.value)

      let convertedValue

      switch (options.fromUnit) {
        case 'fahrenheit':
          convertedValue = converter.convertFromFahrenheit(options.value)
          break
        case 'celsius':
          convertedValue = converter.convertFromCelsius(options.value)
          break
        default:
          break;
      }

      return Math.round(convertedValue * 10) / 10
    } catch (error) {
      console.log(error)
    }
  }

  /**
   * Converts common US distance values to certain metric ones (see README).
   *
   * @param {Object} options 
   * @returns - The converted value. 
   */
  convertDistance (options) {
    const errorHandler = new ErrorHandler()

    if (!options) {
      throw 'You have to specify an options object, see README'
    }

    try {
      errorHandler.validateDistanceFromUnit(options.fromUnit)
      errorHandler.validatePositiveValue(options.value)

      const fromUnit = options.fromUnit
      const toUnit = options.toUnit
      let converter
      let convertedValue

      switch (fromUnit) {
        case 'inches':
          converter = new Inch()
          errorHandler.validateDistanceToCentimeterAndMeter(options.toUnit)

          if (fromUnit === 'inches' && toUnit === 'centimeters') {
            convertedValue = converter.convertToCentimeters(options.value)
          } else if (fromUnit === 'inches' && toUnit === 'meters') {
            convertedValue = converter.convertToMeters(options.value)
          }
          break
        case 'feet':
          converter = new Foot()
          errorHandler.validateDistanceToCentimeterAndMeter(options.toUnit)

          if (fromUnit === 'feet' && toUnit === 'centimeters') {
            convertedValue = converter.convertToCentimeters(options.value)
          } else if (fromUnit === 'feet' && toUnit === 'meters') {
            convertedValue = converter.convertToMeters(options.value)
          }
          break
        case 'yards':
          converter = new Yard()
          errorHandler.validateDistanceToMeterAndKilometer(options.toUnit)

          if (fromUnit === 'yards' && toUnit === 'meters') {
            convertedValue = converter.convertToMeters(options.value)
          } else if (fromUnit === 'yards' && toUnit === 'kilometers') {
            convertedValue = converter.convertToKilometers(options.value)
          }
          break
        case 'miles':
          converter = new Mile()
          errorHandler.validateDistanceToMeterAndKilometer(options.toUnit)

          if (fromUnit === 'miles' && toUnit === 'meters') {
            convertedValue = converter.convertToMeters(options.value)
          } else if (fromUnit === 'miles' && toUnit === 'kilometers') {
            convertedValue = converter.convertToKilometers(options.value)
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

  /**
   * Converts ounces and pounds to milligram and kilogram values.
   *
   * @param {Object} options 
   * @returns - The converted value. 
   */
  convertWeight (options) {
    try {
      const errorHandler = new ErrorHandler()


      if (!options) {
        throw 'You have to specify an options object, see README'
      }

      errorHandler.validateWeightFromUnit(options.fromUnit)
      errorHandler.validateWeightToUnit(options.toUnit)
      errorHandler.validatePositiveValue(options.value)

      const fromUnit = options.fromUnit
      const toUnit = options.toUnit
      let converter
      let convertedValue


      switch (fromUnit) {
        case 'ounces':
          converter = new Ounce()
          if (fromUnit === 'ounces' && toUnit === 'grams') {
            convertedValue = converter.convertToGrams(options.value)
          } else if (fromUnit === 'ounces' && toUnit === 'kilograms') {
            convertedValue = converter.convertToKilograms(options.value)
          }
          break
        case 'pounds':
          converter = new Pound()
          if (fromUnit === 'pounds' && toUnit === 'grams') {
            convertedValue = converter.convertToGrams(options.value)
          } else if (fromUnit === 'pounds' && toUnit === 'kilograms') {
            convertedValue = converter.convertToKilograms(options.value)
          }
          break
        default:
          break;
      }

      return Math.round(convertedValue * 10) / 10
    } catch (error) {
      console.log(error)
    }
  }

  /**
   * Converts pints and gallons to litre values.
   *
   * @param {Object} options 
   * @returns - The converted value.
   */
  convertVolume (options) {
    try {
      const errorHandler = new ErrorHandler()


      if (!options) {
        throw 'You have to specify an options object, see README'
      }

      errorHandler.validateVolumeFromUnit(options.fromUnit)
      errorHandler.validatePositiveValue(options.value)

      const fromUnit = options.fromUnit
      let converter
      let convertedValue


      switch (fromUnit) {
        case 'pints':
          converter = new Volume()
          convertedValue = converter.convertPintsToLitres(options.value)
          break
        case 'gallons':
          converter = new Volume()
          convertedValue = converter.convertGallonsToLitres(options.value)
          break
        default:
          break;
      }

      return Math.round(convertedValue * 10) / 10
    } catch (error) {
      console.log(error)
    }
  }
}
