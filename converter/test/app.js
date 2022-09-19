import Wizard from 'windwizard'

const wizard = new Wizard

const options = {
  fromUnit: 'mph',
  toUnit: 'ms',
  value: '100'
}

const convertedValue = wizard.wind(options)

if (!convertedValue) {
  process.exit()
}

console.log('The converted value', convertedValue)
