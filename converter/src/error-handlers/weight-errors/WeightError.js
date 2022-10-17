/**
 * Class representing a weight unit error.
 */
 export class WeightError {
  #errorInfo

  /**
   * Set current error info.
   *
   * @param {string} errorInfo 
   */
  setErrorInfo(errorInfo) {
    this.#errorInfo = errorInfo
  }

  /**
   * Get the error info.
   */
  getErrorInfo () {
    return this.#errorInfo
  }
}