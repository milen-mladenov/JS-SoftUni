class Stringer {
 
    constructor(s, l) {
        this.str = s;
        this.strLength = l;
    }
 
    increase(value) {
        this.strLength += value;
    }
 
    decrease(value) {
        const result = this.strLength - value;
        this.strLength = result < 0 ? 0 : result;
    }
 
 
    toString() {
        if (this.strLength === 0) {
            return '...';
        }
 
        if (this.str.length > this.strLength) {
            return `${this.str.slice(0, this.strLength)}...`;
        }
        
        return this.str;
    }
}