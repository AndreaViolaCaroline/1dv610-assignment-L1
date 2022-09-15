import windwizard from 'windwizard'

const options = {
  fromUnit: 'mph',
  toUnit: 'ms',
  value: '100'
}

const convertedValue = windwizard(options)

if (!convertedValue) {
  process.exit()
}

console.log('The converted value', convertedValue)
