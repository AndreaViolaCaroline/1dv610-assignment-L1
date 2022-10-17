import { TemperatureError } from './TemperatureError.js'
/**
 * Class handling temperature unit validation.
 */
export class TempErrorHandler {
    /**
   * Ensure that the temperature unit is valid.
   */
     validateTempUnit (unit) {
      if (!this.isValidTempUnit(unit)) {
        const temperatureError = new TemperatureError()
        throw temperatureError
      }
    }
  
    /**
     * Is it a valid temp unit?
     *
     * @param unit - unit to be validated.
     * @return - True if includes a valid unit.
     */
    isValidTempUnit (unit) {
      const validUnits = ['celsius', 'fahrenheit']
  
      return validUnits.includes(unit)
    }
}