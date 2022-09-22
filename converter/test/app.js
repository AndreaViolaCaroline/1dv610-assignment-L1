import Wizard from 'wizard'

const wizard = new Wizard

const optionsWind = {
  fromUnit: 'ms',
  toUnit: 'kmh',
  value: 100
}

const optionsTemp = {
  fromUnit: 'fahrenheit',
  value: '100'
}

const optionsDistance = {
  fromUnit: 'feet',
  toUnit: 'meters',
  value: 100
}

const optionsWeight = {
  fromUnit: 'pounds',
  toUnit: 'kilograms',
  value: 100
}

const optionsVolume = {
  fromUnit: 'pints',
  toUnit: 'litres',
  value: 100
}

try {
  const convertedValueWind = wizard.convertWind(optionsWind)
  const convertedValueTemp = wizard.convertTemperature(optionsTemp)
  const convertedValueDistance = wizard.convertDistance(optionsDistance)
  const convertedValueWeight = wizard.convertWeight(optionsWeight)
  const convertedValueVolume = wizard.convertVolume(optionsVolume)

  if (convertedValueTemp) {
    console.log('The converted value temp', convertedValueTemp)
  }
  if (convertedValueWind) {
    console.log('The converted value wind', convertedValueWind)
  }
  if (convertedValueDistance) {
    console.log('The converted value distance', convertedValueDistance)
  }
  if (convertedValueWeight) {
    console.log('The converted value weight', convertedValueWeight)
  }
  if (convertedValueVolume) {
    console.log('The converted value volume', convertedValueVolume)
  }
} catch (error) {
  console.log('Something went wrong.. The error: ', error)
}
