# Converter - Wizard

## What is Wizard?

Disclaimer: This is a student project created according to specifics by Linneaus University, Sweden.

Use the wizard to convert some of the most common units for wind (km/h, m/s, ft/s, mph, knots), temperature (celsius, fahrenheit), distance (inch, foot, yard, mile), weight (ounce, pound) and volume (pints, gallons).

The wizard has 5 available methods taking an options argument and returning the converted value as specified by the options.

convertWind(options)
convertTemperature(options)
convertDistance(options)
convertWeight(options)
convertVolume(options)

The wizard is not complete, meaning, it does NOT convert back and forth between all units mentioned - some only converts one way. Details per unit follows below.

## How do you install?

Run `npm i wizard`


## How do you use?

import { wizard } from 'wizard'

### Converting wind

The wizard can convert wind speeds back AND forth between, ONLY, the following wind speed units: km/h, m/s, ft/s, mph, knots.

You create an options object containing the following properties: fromUnit, toUnit and value.

fromUnit - Represents the unit you wish to convert *FROM*
toUnit - Represents the unit you wish to convert *TO*
value - Represents the value you wish to convert

```
import  Wizard  from 'wizard'

const wizard = new Wizard

const options = {
  fromUnit: 'kmh',
  toUnit: 'mph',
  value: 100
}

const convertedValue = wizard.convertWind(options)

console.log('The converted value', convertedValue)

```

### Converting temperature

The wizard can convert temperatures back AND forth between, ONLY, the following temperature units: celsius.

You create an options object containing the following properties: fromUnit and value.

fromUnit - Represents the unit you wish to convert *FROM*
value - Represents the value you wish to convert

```
import  Wizard  from 'wizard'

const wizard = new Wizard

const options = {
  fromUnit: 'fahrenheit',
  value: 100
}

const convertedValue = wizard.convertTemperature(options)

console.log('The converted value', convertedValue)

```

