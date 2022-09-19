import Wizard from 'wizard'

const wizard = new Wizard

const optionsWind = {
  fromUnit: 'kmh',
  toUnit: 'ms',
  value: '100'
}

const optionsTemp = {
  from: 'celsius',
  value: -100
}

const convertedValueWind = wizard.wind(optionsWind)
const convertedValueTemp = wizard.temperature(optionsTemp)

if (convertedValueWind && convertedValueTemp) {
  console.log('The converted value wind', convertedValueWind)
  console.log('The converted value temp', convertedValueTemp)
} else if (convertedValueWind && !convertedValueTemp) {
  console.log('The converted value wind', convertedValueWind)
} else if (!convertedValueWind && convertedValueTemp) {
  console.log('The converted value temp', convertedValueTemp)
} else {
  process.exit()
}
