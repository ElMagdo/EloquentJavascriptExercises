function range(start, end, step = 1) {
    let arr = [];

    if (start <= end) {
        while(start <= end) {
        arr.push(start);
        start += step;
        }
    } else {
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

console.log(sum(range(1, 10)));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));