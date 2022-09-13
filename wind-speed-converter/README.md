# Wind Speed Converter - Wind Wizard

## What is Wind Wizard?

Disclaimer: This is a student project created according to specifics by Linneaus University, Sweden.

Use the Wind Wizard to convert the most common wind speed units (km/h, m/s, ft/s, mph, knots).

## How do you install?

Run `npm i windwizard`

Then...

## How do you use?

import { windwizard } from 'windwizard'

windwizard({
  fromUnit: 'kmh',
  toUnit: 'ms',
  from: '100'
})

### What are the options?

In the options object you specify:

- fromUnit = What unit do you want to convert *FROM*?
- toUnit = What unit do you want to conver *TO*?
- value = What *value* do you want to convert *FROM*?
