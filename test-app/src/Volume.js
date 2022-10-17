/**
 * Class handling volume stuff.
 */

 export class Volume {

  constructor(convertedValue, wizard, reader) {
    this.convertedValue = convertedValue
    this.wizard = wizard
    this.reader = reader
  }

  convertVolumeUnitValue (fromInput, toInput, valueInput) {
    try {
      const options = {
        fromUnit: fromInput,
        toUnit: toInput,
        value: valueInput
      }

      this.convertedValue = this.wizard.convertVolume(options)

      if (this.convertedValue) {
        console.log('Yay, converted value is: ', this.convertedValue)
      }

    } catch (error) {
      if (error instanceof Error) {
        console.log('This is a generic error: ', error.message)
      } else {
        console.log('This is a unit specific error: ', error.getErrorInfo())
      }
    }
  }

  readVolumeOptions () {
    const fromInput = this.reader.question('What unit do you want to convert FROM?\n')

    const toInput = this.reader.question('What unit do you want to convert TO?\n')

    const valueInput = this.reader.question('What value do you want to convert from?\n')

    this.convertVolumeUnitValue(fromInput, toInput, valueInput)
  }
}