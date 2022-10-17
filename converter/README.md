# Wizard

## What is Wizard?

Disclaimer: This is a student project created according to specifics by Linneaus University, Sweden.

Use the Wizard to convert some of the most common units for wind (km/h, m/s, ft/s, mph, knots), temperature (celsius, fahrenheit), distance (inch, foot, yard, mile), weight (ounce, pound) and volume (pints, gallons).

The Wizard has 5 available methods taking an options object as an argument and returning the converted value from the specified units/values in the options.

* convertWind(options)
* convertTemperature(options)
* convertDistance(options)
* convertWeight(options)
* convertVolume(options)

The Wizard is not complete, meaning, it does NOT convert back and forth between all units mentioned - some only converts one way. Details per unit follows below.

## How do you install?

Run `npm i @violacaroline/wizard`

## How do you use?

import Wizard from '@violacaroline/wizard'

### Errors

The library throws error objects.

Generic errors covering empty/invalid option object or validation of numbers/positive numbers are of the basic javascript Error type containing a user friendly description of the problem in the error.message property. 

Specific unit errors are thrown when someone enters an invalid unit type for the kind of conversion that is desired (wind, temperature, distance, weight, volume). The error contains a user friendly description of the problem through error.getErrorInfo()
List of unit errors:
* WindError
* TemperatureError
* DistanceError
* WeightError
* VolumeError

Wrapping your wizard conversion method in a try catch block will let you catch the error and display/handle it as you wish. See example below.

```
import Wizard from '@violacaroline/wizard'

const wizard = new Wizard()

const options = {
  fromUnit: 'kmh',
  toUnit: 'mph',
  value: 100
}

try {
  const convertedValue = wizard.convertWind(options)

  console.log('The converted value', convertedValue)

} catch {
  if (error instanceof Error) {
    console.log('This is a generic error: ', error.message)
  } else {
    console.log('This is a unit specific error: ', error.getErrorInfo())
  }
}

```

### Converting wind

The Wizard can convert wind speeds back AND forth between, ONLY, the following wind speed units: kmh, ms, fts, mph, knots.

You create an options object containing the following properties: fromUnit, toUnit and value.

* fromUnit - Represents the unit you wish to convert *FROM*
* toUnit - Represents the unit you wish to convert *TO*
* value - Represents the value you wish to convert

Code example:

```
import Wizard from '@violacaroline/wizard'

const wizard = new Wizard()

const options = {
  fromUnit: 'kmh',
  toUnit: 'mph',
  value: 100
}

const convertedValue = wizard.convertWind(options)

console.log('The converted value', convertedValue)

```

### Converting temperature

The Wizard can convert temperatures back AND forth between, ONLY, the following temperature units: celsius, fahrenheit.

You create an options object containing the following properties: fromUnit and value.

* fromUnit - Represents the unit you wish to convert *FROM*
* value - Represents the value you wish to convert

Code example:

```
import Wizard from '@violacaroline/wizard'

const wizard = new Wizard()

const options = {
  fromUnit: 'fahrenheit',
  value: 100
}

const convertedValue = wizard.convertTemperature(options)

console.log('The converted value', convertedValue)

```

### Converting distance

The Wizard can convert distance FROM, ONLY, the following distance units: inches, feet, yards, miles.

For inches and feet, the wizard can ONLY convert TO the following distance units: centimeters, meters.

For yards and miles, the wizard can ONLY convert TO the following distance units: meters, kilometers.

You create an options object containing the following properties: fromUnit, toUnit and value.

* fromUnit - Represents the unit you wish to convert *FROM*
* toUnit - Represents the unit you wish to convert *TO*
* value - Represents the value you wish to convert

Code example:

```
import Wizard from '@violacaroline/wizard'

const wizard = new Wizard()

const options = {
  fromUnit: 'feet',
  toUnit: 'centimeters',
  value: 100
}

const convertedValue = wizard.convertDistance(options)

console.log('The converted value', convertedValue)

```

```
import Wizard from '@violacaroline/wizard'

const wizard = new Wizard()

const options = {
  fromUnit: 'yards',
  toUnit: 'kilometers',
  value: 100
}

const convertedValue = wizard.convertDistance(options)

console.log('The converted value', convertedValue)

```

### Converting weight

The Wizard can convert weight FROM, ONLY, the following weight units: ounces, pounds.

The Wizard can convert weight TO, ONLY, the following weight units: grams, kilograms.

You create an options object containing the following properties: fromUnit, toUnit and value.

* fromUnit - Represents the unit you wish to convert *FROM*
* toUnit - Represents the unit you wish to convert *TO*
* value - Represents the value you wish to convert

Code example:

```
import Wizard from '@violacaroline/wizard'

const wizard = new Wizard()

const options = {
  fromUnit: 'pounds',
  toUnit: 'kilograms',
  value: 100
}

const convertedValue = wizard.convertWeight(options)

console.log('The converted value', convertedValue)

```

### Converting volume

The Wizard can convert volumes FROM, ONLY, the following volume units: pints, gallons.

The Wizard can convert volumes TO, ONLY, the following volume units: litres. Hence, a toUnit is not specified.

You create an options object containing the following properties: fromUnit and value.

* fromUnit - Represents the unit you wish to convert *FROM*
* value - Represents the value you wish to convert

Code example:

```
import Wizard from '@violacaroline/wizard'

const wizard = new Wizard()

const options = {
  fromUnit: 'gallons',
  value: 100
}

const convertedValue = wizard.convertVolume(options)

console.log('The converted value', convertedValue)

```

## Version

This is version 3.0.10 of this package.

## Test Report

A test report is available at: https://github.com/AndreaViolaCaroline/1dv610-assignment-L1/blob/main/testrapport.md