import Wizard from 'wizard'

const wizard = new Wizard

const optionsWind = {
  fromUnit: 'ms',
  toUnit: 'kmh',
  value: 100
}

const optionsTemp = {
  from: 'fahrenheit',
  value: '100'
}

const optionsDistance = {
  fromUnit: 'feet',
  toUnit: 'meters',
  value: 100
}

const convertedValueWind = wizard.wind(optionsWind)
const convertedValueTemp = wizard.temperature(optionsTemp)
const convertedValueDistance = wizard.distance(optionsDistance)

if (convertedValueTemp) {
  console.log('The converted value temp', convertedValueTemp)
}
if (convertedValueWind) {
  console.log('The converted value wind', convertedValueWind)
}
if (convertedValueDistance) {
  console.log('The converted value distance', convertedValueDistance)
}
