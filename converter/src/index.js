/**
 * Main entry point package.
 */
import { WindConverter } from './wind/WindConverter.js'
import { TemperatureConverter } from './temperature/TemperatureConverter.js'
import { DistanceConverter } from './distance/DistanceConverter.js'
import { WeightConverter } from './weight/WeightConverter.js'
import { VolumeConverter } from './volume/VolumeConverter.js'

export default class Wizard {
  /**
  * Converts one wind speed unit to another.
  *
  * @param {Object} options 
  * @returns - The converted value.
  */
  convertWind (options) {
    /* BREAK OUT ALL IF STATEMENTS TO INCREASE READABILITY, MAINTAINABILITY, STRUCTURE FILES, 1 FOLDER PER WIND
       MOVED THESE IF STATEMENTS INTO THEIR RESPECTIVE CLASSES SINCE THAT ON IS REALLY THE INFORMATION EXPERT FEATURE ENVY AVOIDED, CREATED A WINDCONVERTER CLASS THAT HOLDS ALL WIND RELATED FILES AND DOES CONVERSION */
    const windConverter = new WindConverter()

    const convertedValue = windConverter.convertValue(options)

    return convertedValue
  }

  /**
   * Converts fahrenheit and celsius values.
   *
   * @param {Object} options 
   * @returns - The converted value.
   */
  convertTemperature (options) {
    const temperatureConverter = new TemperatureConverter()

    const convertedValue = temperatureConverter.convertValue(options)

    return convertedValue
  }

  /**
   * Converts common US distance values to certain metric ones (see README).
   *
   * @param {Object} options 
   * @returns - The converted value. 
   */
  convertDistance (options) {
    const distanceConverter = new DistanceConverter()

    const convertedValue = distanceConverter.convertValue(options)

    return convertedValue
  }

  /**
   * Converts ounces and pounds to milligram and kilogram values.
   *
   * @param {Object} options 
   * @returns - The converted value. 
   */
  convertWeight (options) {
    const weightConverter = new WeightConverter()

    const convertedValue = weightConverter.convertValue(options)

    return convertedValue
  }

  /**
   * Converts pints and gallons to litre values.
   *
   * @param {Object} options 
   * @returns - The converted value.
   */
  convertVolume (options) {
    const volumeConverter = new VolumeConverter()

    const convertedValue = volumeConverter.convertValue(options)

    return convertedValue
  }
}
