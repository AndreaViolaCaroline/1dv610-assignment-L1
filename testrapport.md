# Test report

## What is being tested?

The wind speed converter "windwizard" can convert back and forth between the units kmh, m/s, ft/s, mph and knots. The tests covers all units, unit per unit (see tables below) making sure all algorithms are correct.

## How is it being tested?

I created a test folder where I ran npm init and basically had a seperate javascript project. I found a command 'npm link' that was new to me (indepth info at https://docs.npmjs.com/cli/v8/commands/npm-link). Essentially, it lets you test your package without hosting it on npm first thing. Creating a symbolic link between projects in your global node modules folder on your computer, making it easier to develop and lets you reference your package locally!

Inside that test folder I created a simple app.js file and simulated the windwizard being used, changing the options object and validating the calculations manually.

Example wind conversion:

```
import  Wizard  from 'wizard'

const wizard = new Wizard

const options = {
  fromUnit: 'kmh',
  toUnit: 'mph',
  value: 100
}

const convertedValue = wizard.wind(options)

console.log('The converted value', convertedValue)

```

Example temerature conversion:

```
import  Wizard  from 'wizard'

const wizard = new Wizard

const options = {
  from: 'celsius',
  value: 100
}

const convertedValue = wizard.temperature(options)

console.log('The converted value', convertedValue)

```

## Test results wind conversion

All units/classes converts from the value 100, i.e. Class KilometerPerHour expected/actual value is based on 100kmh being converted etc.

### Class KilometerPerHour

| Methodname  | Expected value | Actual value |
| ----------- | :----: | :----: |
|convertToMeterPerSecond | 27.8 | 27.8 |
|convertToFeetPerSecond  | 91.1 | 91.1 |
|convertToMilesPerHour   | 62.1 | 62.1 |
|convertToKnots          | 54   | 54   |

### Class MeterPerSecond

| Methodname  | Expected value | Actual value |
| ----------- | :----: | :----: |
|convertToKilometerPerHour | 360   | 360   |
|convertToFeetPerSecond    | 328.1 | 328.1 |
|convertToMilesPerHour     | 223.7 | 223.7 |
|convertToKnots            | 194.4 | 194.4 |

### Class FeetPerSecond

| Methodname  | Expected value | Actual value |
| ----------- | :----: | :----: |
|convertToKilometerPerHour | 109.7 | 109.7 |
|convertToMeterPerSecond   | 30.5  | 30.5  |
|convertToMilesPerHour     | 68.2  | 68.2 |
|convertToKnots            | 59.2  | 59.2  |

### Class MilesPerHour

| Methodname  | Expected value | Actual value |
| ----------- | :----: | :----: |
|convertToKilometerPerHour | 160.9 | 160.9 |
|convertToMeterPerSecond   | 44.7  | 44.7  |
|convertToFeetPerSecond    | 146.7 | 146.7 |
|convertToKnots            | 86.9  | 86.9  |

### Class Knots

| Methodname  | Expected value | Actual value |
| ----------- | :----: | :----: |
|convertToKilometerPerHour | 185.3 | 185.2 |
|convertToMeterPerSecond   | 51.4  | 51.4  |
|convertToFeetPerSecond    | 168.8 | 168.8 |
|convertToMilesPerHour     | 115.1 | 115.1 |

## Summary wind conversion

All methods have calculated correctly. Only knots to kmh shows a slight difference in the precision (185.3 vs. 185.2) when I look closer on the algorithm of my reference it appears to be the same as mine. However, I consider the difference to be accepted.

## Test results temperature conversion

All units/classes converts from the value 100, i.e. Class Temperature expected/actual value is based on 100 fahrenheit OR celsius being converted etc.

### Class Temperature

| Methodname  | Expected value | Actual value |
| ----------- | :----: | :----: |
|convertFromFahrenheit | 37.8 | 37.8 |
|convertFromCelsius   | 212  | 212 |

## Test results distance conversion

All units/classes converts from the value 100, i.e. Class inches expected/actual value is based on 100 inches being converted etc.

### Class Inch

| Methodname  | Expected value | Actual value |
| ----------- | :----: | :----: |
|convertToCentiMeters | 254 | 254 |
|convertToMeters   | 2.54  | 2.5 |
