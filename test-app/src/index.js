import  Wizard  from '@violacaroline/wizard'
import * as readlineSync from 'readline-sync'

 
// Wait for user's response.
// var userName = readlineSync.question('May I have your name? ');
// console.log('Hi ' + userName + '!')

const wizard = new Wizard()

let typeUnit
let convertedValue

function readTypeUnit () {
  typeUnit = readlineSync.question('What type of conversion do you want to do?\n1.Wind\n2.Temperature\n3.Distance\n4.Weight\n5.Volume\n')
  if (typeUnit === '1') {
    readWindOptions()
  }
}

function convertWindUnitValue (fromInput, toInput, valueInput) {
  
  const options = {
    fromUnit: fromInput,
    toUnit: toInput,
    value: valueInput
  }

  convertedValue = wizard.convertWind(options)

  if (convertedValue) {
    console.log('Yay, converted value is: ', convertedValue)
  }
}

function readWindOptions () {
  const fromInput = readlineSync.question('What unit do you want to convert FROM?\n')

  const toInput = readlineSync.question('What unit do you want to convert TO?\n')

  const valueInput = readlineSync.question('What value do you want to convert from?\n')

  convertWindUnitValue(fromInput, toInput, valueInput)
}

readTypeUnit()
