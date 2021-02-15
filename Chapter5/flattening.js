function flatten(arr) {
    return arr.reduce((a, b) => a.concat(b));
}

let num = [[1, 2, 3], [3, 4, 5], [5, 6, 7]];
let tmp = flatten(num);
console.log(tmp);