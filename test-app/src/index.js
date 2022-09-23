import Wizard from '@violacaroline/wizard'
import * as readlineSync from 'readline-sync'

import { Temperature } from './Temp.js'
import  { Wind }  from './Wind.js'

let typeUnit
let convertedValue

const wizard = new Wizard()
const wind = new Wind (convertedValue, wizard, readlineSync)
const temp = new Temperature (convertedValue, wizard, readlineSync)


function readTypeUnit () {
  typeUnit = readlineSync.question('What type of conversion do you want to do?\n1.Wind\n2.Temperature\n')

  switch (typeUnit) {
    case '1':
      wind.readWindOptions()
      break;
    case '2':
      temp.readTempOptions()
      break;
    default:
      console.log('Not a valid option. Byyyye')
      break;
  }
}

readTypeUnit()
