function everyForLoop(arr, func) {
    for(let i of arr) {
        if (!func(i)) return false;
    }
    return true;
}

//let num = [2, 4, 6, 8, 32];
//console.log(everyForLoop(num, (a) => a%2 == 0));
console.log("Using loop");
console.log(everyForLoop([1, 3, 5], n => n < 10));
console.log(everyForLoop([2, 4, 16], n => n < 10));
console.log(everyForLoop([], n => n < 10));

function everySomeMethod(arr, func) {
    if (arr.some((a) => func(a))) return false;
    return true;
}

//console.log(everySomeMethod(num, (b) => b%2 == 1));
console.log("Using some method");
console.log(everyForLoop([1, 3, 5], n => n < 10));
console.log(everyForLoop([2, 4, 16], n => n < 10));
console.log(everyForLoop([], n => n < 10));