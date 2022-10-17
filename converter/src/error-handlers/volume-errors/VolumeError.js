/**
 * Class representing a volume unit error.
 */
 export class VolumeError {
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