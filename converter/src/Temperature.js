/**
 * Class handling conversion fahrenheit - celsius and vice versa.
 */

export class Temperature {
  /**
   * Converts the original value.
   *
   * @param {string} fromUnit
   * @param {int} value
   */
  convertOriginalValue (fromUnit, value) {
    let convertedValue

    switch (fromUnit) {
      case 'fahrenheit':
        convertedValue = this.convertFromFahrenheit(value)
        break
      case 'celsius':
        convertedValue = this.convertFromCelsius(value)
        break
      default:
        break;
    }

    return convertedValue
  }

  /**
   * Converts value FROM fahrenheit TO celsius.
   *
   * @param {number} fahrenheit - The fahrenheit value.
   * @return - The celsius value.
   */
  convertFromFahrenheit (fahrenheit) {
    const celsius = (fahrenheit - 32) / 1.8000

    return celsius
  }

  /**
   * Converts value FROM celsius TO fahrenheit.
   *
   * @param {number} celsius - The celsius value.
   * @return - The fahrenheit value.
   */
  convertFromCelsius (celsius) {
    const fahrenheit = (celsius * 1.8000) + 32

    return fahrenheit
  }
}