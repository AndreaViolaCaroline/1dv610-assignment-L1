/**
 * Class representing a temperature unit error.
 */
export class TemperatureError {
  #errorInfo = 'The unit is not a valid unit (celsius/fahrenheit)'

  /**
   * Get the error info.
   */
  getErrorInfo () {
    return this.#errorInfo
  }
}