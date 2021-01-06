# Validera

NodeJS object validation to check type and value with multi conditions

![Version](https://img.shields.io/npm/v/validera.svg)
![Downloads](https://img.shields.io/npm/dm/validera.svg)

## Install

```npm
npm install validera
```

## Usage

```javascript
const validera = require('validera')
```

```javascript
const value = new validera("validera")
        .type("string")
        .nullOrEmpty()
        .valueOrThrow()
```

```javascript
const value = new validera("validera")
        .type("string")
        .valueOrThrowMessage("It's not string")
```

```javascript                    
const isValid = new validera(50)
        .type("number")
        .positive()
        .biggerThan(0)
        .smallerThan(100)
        .check()   
```            

```javascript
validera.isTypeEqual("validera", "string") //true

validera.isEqualAny(1, [2,3,4])                 //false
validera.isNotEqualOneof(1, [2,3,4])            //true
validera.isNotEqualOneof(1, [2,3,4], 5)         //true
validera.isNotNull(null)                        //false

validera.isPositive(1)                          //true
validera.isNegative(-1)                         //true

validera.isBiggerThanOneof(9, 1, 11, [5,6])     //true
validera.isBiggerThanAllof(9, 1, 2, [5,6])      //true
validera.isBiggerOrEqualOneof(9, [11, 12, 9])   //true

validera.isSmallerThanOneof(9, [10, 0])         //true
validera.isSmallerThanAllof(9, [10, 11 ,12])    //true
validera.isSmallerOrEqualOneof(9, [1, 2, 9])    //true

validera.isNullorEmpty("")                      //true
validera.isNullOrZero(null)                     //true 
validera.isZeroOrDefault(0, 10)                 //10
validera.isNullOrDefault(null, 0)               //0
```

If you have an idea or new check to improve Validera you can submit issue or Pull Request.
