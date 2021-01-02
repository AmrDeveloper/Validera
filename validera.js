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
        for(let val of values) {
            if(value > val) return true;
        }
        return false;
    }

    /**
     * Check if value is bigger than all of values items
     * @param {*} value 
     * @param  {...any} values 
     */
    static isBiggerThanAllof(value, ...values) {
        return value > Math.max(values)
    }

    /**
     * Check if value is bigger than or equal one of values item
     * @param {*} value 
     * @param  {...any} values 
     */
    static isBiggerOrEqualOneof(value, ...values) {
        for(let val of values) {
            if(value >= val) return true;
        }
        return false;
    }

    /**
     * Check if value is smaller than one of values item
     * @param {*} value 
     * @param  {...any} values 
     */
    static isSmallerThanOneof(value, ...values) {
        for(let val of values) {
            if(value < val) return true;
        }
        return false;
    }

    /**
     * Check if value is smaller than all of values items
     * @param {*} value 
     * @param  {...any} values 
     */
    static isSmallerThanAllof(value, ...values) {
        return value < Math.min(values)
    }

    /**
     * Check if value is smaller than or equal one of values items
     * @param {*} value 
     * @param  {...any} values 
     */
    static isSmallerOrEqualOneof(value, ...values) {
        for(let val of values) {
            if(value <= val) return true;
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

    type(type) {
        if (this.isValid) {
            this.isValid = Validera.isTypeEqual(this.value, type);
        }
        return this;
    }

    equalOneof(...values) {
        if (this.isValid) {
            this.isValid = Validera.isEqualOneof(this.value, values);
        }
        return this;
    }

    notEqualOneOf(...values) {
        if(this.isValid) {
            this.isValid = Validera.notEqualOneOf(this.value, values);
        }
        return this;
    }

    notEqualAllof(...values) {
        if (this.isValid) {
            this.isValid = Validera.isNotEqualAllof(this.value, values);
        }
        return this;
    }

    positive() {
        if (this.isValid) {
            this.isValid = Validera.isPositive(this.value);
        }
        return this;
    }

    negative() {
        if (this.isValid) {
            this.isValid = Validera.isNegative(this.value);
        }
        return this;
    }

    biggerThanOneof(...values) {
        if(this.isValid) {
            this.isValid = Validera.isBiggerThanOneof(this.value, values);
        }
        return this;
    }

    biggerThanAllof(...values) {
        if (this.isValid) {
            this.isValid = Validera.isBiggerThan(this.value, values)
        }
        return this;
    }

    biggerOrEqualOneof(...values) {
        if (this.isValid) {
            this.isValid = Validera.isBiggerOrEqualOneof(this.value, values)
        }
        return this;
    }

    smallerThanOneof(...values) {
        if(this.isValid) {
            this.isValid = Validera.isSmallerThanOneof(this.value, values);
        }
        return this;
    }

    smallerThanAllof(...values) {
        if (this.isValid) {
            this.isValid = Validera.isSmallerThan(this.value, values)
        }
        return this;
    }

    smallerOrEqualOneof(...values) {
        if (this.isValid) {
            this.isValid = Validera.isSmallerOrEqualOneof(this.value, values)
        }
        return this;
    }

    notNull() {
        if (this.isValid) {
            this.isValid = Validera.isNotNull(this.value);
        }
        return this;
    }

    nullOrZero() {
        if (this.isValid) {
            this.value = Validera.isNullOrZero(this.value);
        }
        return this;
    }

    nullOrEmpty() {
        if (this.isValid) {
            this.isValid = Validera.isNullorEmpty(this.value);
        }
        return this;
    }

    check() {
        return this.isValid;
    }

    valueOrThrow() {
        if (this.isValid) {
            return this.value;
        }
        throw Error("Value is not valid")
    }
}

module.exports = Validera;