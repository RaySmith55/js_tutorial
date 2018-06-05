let a = ["ant", "bat", "cat", 42];
a.forEach(function(element) {
    console.log(element);
});

a.forEach((element) => {
    console.log(element);
});

let soliloquy = 'To be, or not to be, that is the question';

Array.from(soliloquy).forEach(function(character) {
    console.log(character);
});

let arr = [8, 17, 42, 99, 8, 16, 18];
console.log(arr.sort(function(a, b) { return a - b; }));

(arr.sort(function (a, b) { return a - b; })).forEach((element) => {
    console.log(element);
});