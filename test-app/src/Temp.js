/**
 * Class handling temperature stuff.
 */

export class Temperature {

  constructor(convertedValue, wizard, reader) {
    this.convertedValue = convertedValue
    this.wizard = wizard
    this.reader = reader
  }

  convertTempUnitValue (fromInput, valueInput) {
    try {
      const options = {
        fromUnit: fromInput,
        value: valueInput
      }

      this.convertedValue = this.wizard.convertTemperature(options)

      if (this.convertedValue) {
        console.log('Yay, converted value is: ', this.convertedValue)
      }

    } catch (error) {
      console.log(error.getErrorInfo())
    }
  }

  readTempOptions () {
    const fromInput = this.reader.question('What unit do you want to convert FROM?\n')

    const valueInput = this.reader.question('What value do you want to convert from?\n')

    this.convertTempUnitValue(fromInput, valueInput)
  }
}