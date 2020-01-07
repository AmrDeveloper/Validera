# Validera

NodeJS object validation to check type and value with multi conditions

## Install

```
npm install validera
```

## Usage

```
const validera = require('validera')
```

```
const value = new validera("validera")
        .type("string")
        .nullOrEmpty()
        .valueOrThrow()
```

```                    
const isValid = new validera(50)
        .type("number")
        .positive()
        .biggerThan(0)
        .smallerThan(100)
        .check()   
```            

```
validera.isTypeEqual("validera", "string") //true
validera.isEqualAny(1, [2,3,4])            //false
validera.isNotEqualAny(1, [2,3,4])         //true
validera.isNotNull(null)                   //false
validera.isPositive(1)                     //true
validera.isNegative(-1)                    //true
validera.isBiggerThan(20, 10)              //true
validera.isSmallerThan(10, 20)             //true
validera.isNullorEmpty("")                 //true
validera.isNullOrZero(null)                //true 
validera.isZeroOrDefault(0, 10)            //10
validera.isNullOrDefault(null, 0)          //0
```