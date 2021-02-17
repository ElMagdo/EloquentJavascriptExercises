function flatten(arr) {
    return arr.reduce((a, b) => a.concat(b));
}

let num = [[1, 2, 3], [4, 5], [6]];
let tmp = flatten(num);
console.log(tmp);