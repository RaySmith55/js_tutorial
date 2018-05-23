function numberCompare(a, b) {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
}

let a = [42, 17, 305, 42, 8, 99];

console.log(a.sort(numberCompare));