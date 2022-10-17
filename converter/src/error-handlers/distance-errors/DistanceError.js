/**
 * Class representing a distance unit error.
 */
 export class DistanceError {
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