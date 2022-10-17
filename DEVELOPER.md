# Calling Developers!

This converter library is just started. Its interface consists of 5 methods converting a selection of different units within wind, temperature, distance, weight, volume

## To whom may want to contribute on the project

### Structure

The projects consists of 2 main folders:

#### converter

This folder contains all source code and is also the part of the project that is currently available on npm. Each folder in the src folder represents what "area" the files are responsible for handling. 
For example wind holds all algorithms for converting wind as well as the WindConverter itself. The file KilometerPerHour includes all available algorithms to convert FROM a kilometer per hour value to another unit. 
The error-handlers folder contains code that handles errors per each available unit.

#### test-app

This folder contains a small testing app that is independent of the converter and installs the package Wizard (the converter source code) from NPM. By cloning this project, cd test-app, running npm install and then npm run start will let you play around with conversions and invalid input data etc.

### TODO

New algorithms could be added in each unit file. Remember to add it in the respective converter files switch statement as well as in the respective error handlers isvalidUnit() method.
