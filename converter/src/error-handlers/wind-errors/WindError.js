/**
 * Class representing a wind unit error.
 */
 export class WindError {
  #errorInfo = 'The unit is not a valid unit (kmh, ms, fts, mph, knots)'

  /**
   * Get the error info.
   */
  getErrorInfo () {
    return this.#errorInfo
  }
}