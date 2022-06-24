function add(a) {
    let sum = a;

    function addToInternal(b) {
        sum += b;
        return addToInternal;
    }

    addToInternal.toString = () => {
        return sum;
    }

    return addToInternal;
}
