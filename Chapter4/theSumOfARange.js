function range(start, end, step = 1) {
    let arr = [];

    if (start <= end) {
        while(start <= end) {
        arr.push(start);
        start += step;
        }
    } else {
        if (step == 1) step = -1;

        while(start >= end) {
        arr.push(start);
        start += step;
        }
    }

    return arr;
}

function sum(arr) {
    let sm = 0;
    for(let num of arr) sm += num;
    return sm;
}

console.log("sum = " + sum(range(1, 10)) + "\n");

console.log("Array without positive step");
console.log(range(1, 10));
console.log("\n");

console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
console.log("\n");

console.log("Array without positive step");
console.log(range(5, 2));