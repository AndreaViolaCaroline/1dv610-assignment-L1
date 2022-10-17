import Wizard from '@violacaroline/wizard'
import * as readlineSync from 'readline-sync'

import { Temperature } from './Temp.js'
import { Wind } from './Wind.js'
import { Distance } from './Distance.js'
import { Weight } from './Weight.js'
import { Volume } from './Volume.js'


let typeUnit
let convertedValue

const wizard = new Wizard()
const wind = new Wind(convertedValue, wizard, readlineSync)
const temp = new Temperature(convertedValue, wizard, readlineSync)
const distance = new Distance(convertedValue, wizard, readlineSync)
const weight = new Weight(convertedValue, wizard, readlineSync)
const volume = new Volume(convertedValue, wizard, readlineSync)

try {
  function readTypeUnit () {
    typeUnit = readlineSync.question('What type of conversion do you want to do?\n1.Wind\n2.Temperature\n3.Distance\n4.Weight\n5.Volume\n')

    switch (typeUnit) {
      case '1':
        wind.readWindOptions()
        break;
      case '2':
        temp.readTempOptions()
        break;
      case '3':
        distance.readDistanceOptions()
        break;
      case '4':
        weight.readWeightOptions()
        break;
      case '5':
        volume.readVolumeOptions()
        break;
      default:
        console.log('Not a valid option. Byyyye')
        break;
    }
  }

  readTypeUnit()
} catch (error) {
  console.log('Some shit happened: ', error.message)
}

