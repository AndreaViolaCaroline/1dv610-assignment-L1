import  Wizard  from '@violacaroline/wizard'

const wizard = new Wizard()

const options = {
  fromUnit: 'celsius',
  value: 100
}

const fahrenheit = wizard.convertTemperature(options)

console.log('The fahrenheit value', fahrenheit)