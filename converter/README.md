# Converter - Wizard

## What is Wizard?

Disclaimer: This is a student project created according to specifics by Linneaus University, Sweden.

Use the wizard to convert some of the most common units for wind (km/h, m/s, ft/s, mph, knots), temperature (celsius, fahrenheit), distance (inch, foot, yard, mile), weight (ounce, pound) and volume (pints, gallons).

The wizard has 5 available methods taking an options argument and returning the converted value as specified by the options.

* convertWind(options)
* convertTemperature(options)
* convertDistance(options)
* convertWeight(options)
* convertVolume(options)

The wizard is not complete, meaning, it does NOT convert back and forth between all units mentioned - some only converts one way. Details per unit follows below.

## How do you install?

Run `npm i wizard`


## How do you use?

import { Wizard } from 'wizard'

### Converting wind

The wizard can convert wind speeds back AND forth between, ONLY, the following wind speed units: km/h, m/s, ft/s, mph, knots.

You create an options object containing the following properties: fromUnit, toUnit and value.

* fromUnit - Represents the unit you wish to convert *FROM*
* toUnit - Represents the unit you wish to convert *TO*
* value - Represents the value you wish to convert

Code example:

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

The wizard can convert temperatures back AND forth between, ONLY, the following temperature units: celsius, fahrenheit.

You create an options object containing the following properties: fromUnit and value.

* fromUnit - Represents the unit you wish to convert *FROM*
* value - Represents the value you wish to convert

Code example:

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

### Converting distance

The wizard can convert distance FROM, ONLY, the following distance units: inches, feet, yards, miles.

For inches and feet, the wizard can ONLY convert TO the following distance units: centimeters, meters.

For yards and miles, the wizard can ONLY convert TO the following distance units: meters, kilometers.

You create an options object containing the following properties: fromUnit, toUnit and value.

* fromUnit - Represents the unit you wish to convert *FROM*
* toUnit - Represents the unit you wish to convert *TO*
* value - Represents the value you wish to convert

Code example:

```
import  Wizard  from 'wizard'

const wizard = new Wizard

const options = {
  fromUnit: 'feet',
  toUnit: 'centimeters',
  value: 100
}

const convertedValue = wizard.convertDistance(options)

console.log('The converted value', convertedValue)

```

```
import  Wizard  from 'wizard'

const wizard = new Wizard

const options = {
  fromUnit: 'yards',
  toUnit: 'kilometers',
  value: 100
}

const convertedValue = wizard.convertDistance(options)

console.log('The converted value', convertedValue)

```

### Converting weight

The wizard can convert weight FROM, ONLY, the following weight units: ounces, pounds.

The wizard can convert weight TO, ONLY, the following weight units: grams, kilograms.

You create an options object containing the following properties: fromUnit, toUnit and value.

* fromUnit - Represents the unit you wish to convert *FROM*
* toUnit - Represents the unit you wish to convert *TO*
* value - Represents the value you wish to convert

Code example:

```
import  Wizard  from 'wizard'

const wizard = new Wizard

const options = {
  fromUnit: 'pounds',
  toUnit: 'kilograms',
  value: 100
}

const convertedValue = wizard.convertWeight(options)

console.log('The converted value', convertedValue)

```

### Converting volume

The wizard can convert volumes FROM, ONLY, the following volume units: pints, gallons.

The wizard can convert volumes TO, ONLY, the following volume units: litres. Hence, a toUnit is not specified.

You create an options object containing the following properties: fromUnit and value.

* fromUnit - Represents the unit you wish to convert *FROM*
* value - Represents the value you wish to convert

Code example:

```
import  Wizard  from 'wizard'

const wizard = new Wizard

const options = {
  fromUnit: 'gallons',
  value: 100
}

const convertedValue = wizard.convertVolume(options)

console.log('The converted value', convertedValue)

```