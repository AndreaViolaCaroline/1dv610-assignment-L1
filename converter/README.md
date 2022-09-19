# Wind Speed Converter - Wind Wizard

## What is Wind Wizard?

Disclaimer: This is a student project created according to specifics by Linneaus University, Sweden.

Use the Wind Wizard to convert the most common wind speed units (km/h, m/s, ft/s, mph, knots).

The windwizard consists of 5 classes representing wind speed units. Each class contains methods with algorithms converting that specific class's unit to any of the other four.

## How do you install?

Run `npm i windwizard`


## How do you use?

import { windwizard } from 'windwizard'

The windwizard takes an options object and must include the wind unit to convert from and to, as well as the value to be converted.

const options = {
  fromUnit: 'mph',
  toUnit: 'ms',
  value: '100'
}

windwizard(options)

OR..


windwizard({
  fromUnit: 'kmh',
  toUnit: 'ms',
  value: '100'
})

### What are the options?

In the options object you specify:

- fromUnit = String, What unit do you want to convert *FROM*? Available units are kmh, ms, fts, mph, knots - Any other value will produce an error.
- toUnit = String, What unit do you want to conver *TO*? Available units are kmh, ms, fts, mph, knots - Any other value will produce an error.
- value = Number, What *value* do you want to convert *FROM*? Must be digits and a number over 0 - Any other value will produce an error.
