function sumFirstLast(input) {

    let first = Number(input.shift());
    let last = Number(input.pop()) || 0;

    return first + last;
}