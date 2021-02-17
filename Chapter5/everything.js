function everyForLoop(arr, func) {
    for(let i of arr) {
        if (!func(i)) return false;
    }
    return true;
}

let num = [2, 4, 6, 8];
console.log(everyForLoop(num, (a) => a%2 == 0));