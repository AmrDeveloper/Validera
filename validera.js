class Validera {

    constructor(value) {
        this.value = value;
        this.isValid = true;
        return this;
    }

    static isTypeEqual(value, type) {
        return typeof value == type;
    }

    static isEqualAny(value, ...values) {
        return values.includes(value)
    }

    static isNotEqualAny(value, ...values) {
        return !values.includes(value)
    }

    static isNotNull(value) {
        return value != null
    }

    static isPositive(value) {
        return value > 0;
    }

    static isNegative(value) {
        return value < 0;
    }

    static isBiggerThan(value, values) {
        return value > Math.max(...values)
    }

    static isSmallerThan(value, values) {
        return value < Math.min(...values)
    }

    static isNullorEmpty(value) {
        if (value == null) {
            return true;
        }
        return value.length == 0;
    }

    static isNullOrZero(value) {
        if (value == null) {
            return true;
        }
        return value == 0;
    }

    static isZeroOrDefault(value, defValue) {
        if (value == 0) {
            return defValue;
        }
        return value;
    }

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

    equalAny(...values) {
        if (this.isValid) {
            this.isValid = Validera.isEqualAny(this.value, values);
        }
        return this;
    }

    notEqualAny(...values) {
        if (this.isValid) {
            this.isValid = Validera.isNotEqualAny(this.value, values);
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

    biggerThan(...values) {
        if (this.isValid) {
            this.isValid = Validera.isBiggerThan(this.value, values)
        }
        return this;
    }

    smallerThan(...values) {
        if (this.isValid) {
            this.isValid = Validera.isSmallerThan(this.value, values)
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
            if (this.value == null) {
                this.isValid = true;
            } else {
                this.isValid = this.value == 0;
            }
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

    valueOrThrow(){
        if(this.isValid){
            return this.value;
        }
        throw Error("Information Not Valid")
    }
}

module.exports = Validera;