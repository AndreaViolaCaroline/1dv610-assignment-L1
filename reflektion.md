# Reflection

I am living in Mexico and this little library was inspired by a real life event amongst travellers when a hurricane was rolling in. There was a need for conversion between the wind speed units that was used by different countries to fully understand what kind of winds were to be expected. This library makes it easy to create an application that converts some of the most common units, not only regarding wind, but mainly between metric and US customary units.

# Code quality requirements

## Table of five identifiers to be examined

| Class/Method name & explanation | Reflection & rules from Clean Code |
| ----------- | ----------- |
|  Wizard - The class being exported that contains the methods for converting units | - "Don't be cute", Wizard sure to many people might mean that something is being magically transformed to something else, well, this is not magic. A word like converter would be more suitable |
|  volume - method converting certain volume units | "A long descriptive name is better than an enigmatic, short name" - I could think of a few ways to interpret volume, is it volume as in loud/quiet, is it volume as in 3-dimensional measure (then, is it dry or fluid?) or is it volume as in vol.1 in a series? - Adding fluid onto this methodname would make it clearer and definitely not too long. |
|  wind - method converting certain wind units  |  "Use intention revealing names" - wind does not really imply what this function does more than that it probably has got something to do with wind. Adding convert onto the name, i.e convertWind, would 1. make the method name a verb - as is recommended in the literature and 2. say exactly what the method does - it converts wind. |
|  temperature - method converting certain temperature units  |  "Pick one word per concept!" - So, if I changed the above method name to convertWind, then convert in front of all methods that convert something would make it more uniform and showing a clear concept, this package has a bunch of methods that converts stuff!  |
|  weight - method converting certain weight units  |   "Use solution domain names" - Programmers will be using this package and it is suitable and welcomed to use solution domain names, like computer science terms and algorithm names to avoid unnecessary bothering of a customer when the programmer is not familiar with the problem domain and its terms - however - when there is not really a translation to a CS term, I'm using the problem domain name. Here weight, since it's one of the units that is handled, in fact, it even makes sense in this particular case: "code that has more to do with problem domain concepts should have problem domain names" - the weight function has to do with the concept of converting weight units which I would describe as a problem domain concept. |


## Table of five methods to be examined


| Method | Amount rows | Reflection & rules from Clean Code |
| ----------- | ----------- | ----------- |
|    |     |     |
|    |     |     |
|    |     |     |
|    |     |     |
|    |     |     |


