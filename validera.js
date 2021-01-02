class Validera {

    constructor(value) {
        this.value = value;
        this.isValid = true;
        return this;
    }

    /**
     * Check if the value type is equal to type
     * @param {*} value 
     * @param {*} type 
     */
    static isTypeEqual(value, type) {
        return typeof value == type;
    }

    /**
     * Check if one item of values is equal value
     * @param {*} value 
     * @param  {...any} values 
     */
    static isEqualOneof(value, ...values) {
        return values.includes(value)
    }

    /**
     * Check if one item of values is not equal value
     * @param {*} value 
     * @param  {...any} values 
     */
    static isNotEqualOneof(value, ...values) {
        for(let val of values) {
            if(value != val) return true;
        }
        return false;
    }

    /**
     * Check if no item of values is equal value
     * @param {*} value 
     * @param  {...any} values 
     */
    static isNotEqualAllof(value, ...values) {
        return !values.includes(value)
    }

    /**
     * Check if value is not equal null
     * @param {*} value 
     */
    static isNotNull(value) {
        return value != null
    }

    /**
     * Check if value is positive number
     * @param {*} value 
     */
    static isPositive(value) {
        return value > 0;
    }

    /**
     * Check if value is negative number
     * @param {*} value 
     */
    static isNegative(value) {
        return value < 0;
    }

    /**
     * Check if value is bigger than one of values items
     * @param {*} value 
     * @param  {...any} values 
     */
    static isBiggerThanOneof(value, ...values) {
        let isValueArray = Array.isArray(value);
        for(let val of values) {
            let isValArray = Array.isArray(val);

            if(isValueArray == isValArray) {
                if(value > val) return true;
            }
            else if(!isValueArray && isValArray) {
                for(let v of val) {
                    let isValid = Validera.isBiggerThanOneof(value, v);
                    if(isValid) return true;
                }
            }
        }
        return false;
    }

    /**
     * Check if value is bigger than all of values items
     * @param {*} value 
     * @param  {...any} values 
     */
    static isBiggerThanAllof(value, ...values) {
        let isValueArray = Array.isArray(value);
        for(let val of values) {
            let isValArray = Array.isArray(val);

            if(isValueArray == isValArray) {
                if(value < val || value == val) return false;
            }
            else if(!isValueArray && isValArray) {
                for(let v of val) {
                    let isValid = Validera.isBiggerThanAllof(value, v);
                    if(!isValid) return false;
                }
            }
        }
        return true;
    }

    /**
     * Check if value is bigger than or equal one of values item
     * @param {*} value 
     * @param  {...any} values 
     */
    static isBiggerOrEqualOneof(value, ...values) {
        let isValueArray = Array.isArray(value);
        for(let val of values) {
            let isValArray = Array.isArray(val);

            if(isValueArray == isValArray) {
                if(value >= val) return true;
            }
            else if(!isValueArray && isValArray) {
                for(let v of val) {
                    let isValid = Validera.isBiggerOrEqualOneof(value, v);
                    if(isValid) return true;
                }
            }
        }
        return false;
    }

    /**
     * Check if value is smaller than one of values item
     * @param {*} value 
     * @param  {...any} values 
     */
    static isSmallerThanOneof(value, ...values) {
        let isValueArray = Array.isArray(value);
        for(let val of values) {
            let isValArray = Array.isArray(val);

            if(isValueArray == isValArray) {
                if(value < val) return true;
            }
            else if(!isValueArray && isValArray) {
                for(let v of val) {
                    let isValid = Validera.isBiggerThanOneof(value, v);
                    if(isValid) return true;
                }
            }
        }
        return false;
    }

    /**
     * Check if value is smaller than all of values items
     * @param {*} value 
     * @param  {...any} values 
     */
    static isSmallerThanAllof(value, ...values) {
        let isValueArray = Array.isArray(value);
        for(let val of values) {
            let isValArray = Array.isArray(val);

            if(isValueArray == isValArray) {
                if(value > val || value == val) return false;
            }
            else if(!isValueArray && isValArray) {
                for(let v of val) {
                    let isValid = Validera.isBiggerThanAllof(value, v);
                    if(!isValid) return false;
                }
            }
        }
        return true;
    }

    /**
     * Check if value is smaller than or equal one of values items
     * @param {*} value 
     * @param  {...any} values 
     */
    static isSmallerOrEqualOneof(value, ...values) {
        let isValueArray = Array.isArray(value);
        for(let val of values) {
            let isValArray = Array.isArray(val);

            if(isValueArray == isValArray) {
                if(value <= val) return true;
            }
            else if(!isValueArray && isValArray) {
                for(let v of val) {
                    let isValid = Validera.isBiggerOrEqualOneof(value, v);
                    if(isValid) return true;
                }
            }
        }
        return false;
    }

    /**
     * Check if value is null or empty
     * @param {*} value 
     */
    static isNullorEmpty(value) {
        if (value == null) {
            return true;
        }
        return value.length == 0;
    }

    /**
     * Check if value is null or zero
     * @param {*} value 
     */
    static isNullOrZero(value) {
        if (value == null) {
            return true;
        }
        return value == 0;
    }

    /**
     * Check if value is zero or return the default value
     * @param {*} value 
     * @param {*} defValue 
     */
    static isZeroOrDefault(value, defValue) {
        if (value == 0) {
            return defValue;
        }
        return value;
    }

    /**
     * Check if value is equal null or return the default value
     * @param {*} value 
     * @param {*} defValue 
     */
    static isNullOrDefault(value, defValue) {
        if (value == null) {
            return defValue;
        }
        return value;
    }

    /**
     * Validate if current value type is equal to type
     * @param {*} type 
     */
    type(type) {
        if (this.isValid) {
            this.isValid = Validera.isTypeEqual(this.value, type);
        }
        return this;
    }

    /**
     * Validate if current value is equal one of values items
     * @param  {...any} values 
     */
    equalOneof(...values) {
        if (this.isValid) {
            this.isValid = Validera.isEqualOneof(this.value, values);
        }
        return this;
    }

    /**
     * Validate if current value is not equal one of values items
     * @param  {...any} values 
     */
    notEqualOneOf(...values) {
        if(this.isValid) {
            this.isValid = Validera.notEqualOneOf(this.value, values);
        }
        return this;
    }

    /**
     * Validate if current value is not equal all of values items
     * @param  {...any} values 
     */
    notEqualAllof(...values) {
        if (this.isValid) {
            this.isValid = Validera.isNotEqualAllof(this.value, values);
        }
        return this;
    }

    /**
     * Validate if current value is positive number
     */
    positive() {
        if (this.isValid) {
            this.isValid = Validera.isPositive(this.value);
        }
        return this;
    }

    /**
     * Validate if current value is negative number
     */
    negative() {
        if (this.isValid) {
            this.isValid = Validera.isNegative(this.value);
        }
        return this;
    }

    /**
     * Validate if current value is bigger than one of values items
     * @param  {...any} values
     */
    biggerThanOneof(...values) {
        if(this.isValid) {
            this.isValid = Validera.isBiggerThanOneof(this.value, values);
        }
        return this;
    }

    /**
     * Validate if current value is bigger than all of values items
     * @param  {...any} values
     */
    biggerThanAllof(...values) {
        if (this.isValid) {
            this.isValid = Validera.isBiggerThanAllof(this.value, values)
        }
        return this;
    }

    /**
     * Validate if current value is bigger or equal one of values items
     * @param  {...any} values 
     */
    biggerOrEqualOneof(...values) {
        if (this.isValid) {
            this.isValid = Validera.isBiggerOrEqualOneof(this.value, values)
        }
        return this;
    }

    /**
     * Validate if current value is smaller then one of values items
     * @param  {...any} values
     */
    smallerThanOneof(...values) {
        if(this.isValid) {
            this.isValid = Validera.isSmallerThanOneof(this.value, values);
        }
        return this;
    }

    /**
     * Validate if current value is smaller than all of values items
     * @param  {...any} values
     */
    smallerThanAllof(...values) {
        if (this.isValid) {
            this.isValid = Validera.isSmallerThanAllof(this.value, values)
        }
        return this;
    }

    /**
     * Validate if current value is smaller or equal one of values items
     * @param  {...any} values
     */
    smallerOrEqualOneof(...values) {
        if (this.isValid) {
            this.isValid = Validera.isSmallerOrEqualOneof(this.value, values)
        }
        return this;
    }

    /**
     * Validate if current value is not equal null
     */
    notNull() {
        if (this.isValid) {
            this.isValid = Validera.isNotNull(this.value);
        }
        return this;
    }

    /**
     * Validate if current value is null or zero
     */
    nullOrZero() {
        if (this.isValid) {
            this.value = Validera.isNullOrZero(this.value);
        }
        return this;
    }

    /**
     * Validate if current value is null or empty
     */
    nullOrEmpty() {
        if (this.isValid) {
            this.isValid = Validera.isNullorEmpty(this.value);
        }
        return this;
    }

    /**
     * Return if validation is true of false
     */
    check() {
        return this.isValid;
    }

    /**
     * Return true if is valid or throw an error
     */
    valueOrThrow() {
        if (this.isValid) {
            return this.value;
        }
        throw Error("Value is not valid")
    }

    /**
     * Return value if its valid or throw error with user message
     * @param {*} message 
     */
    valueOrThrowMessage(message) {
        if (this.isValid) {
            return this.value;
        }
        throw Error(message)
    }
}

module.exports = Validera;