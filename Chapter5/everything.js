function everyForLoop(arr, func) {
    for(let i of arr) {
        if (!func(i)) return false;
    }
    return true;
}

let num = [2, 4, 6, 8, 32];
console.log(everyForLoop(num, (a) => a%2 == 0));

function everySomeMethod(arr, func) {
    if (arr.some((a) => func(a))) return false;
    return true;
}

console.log(everySomeMethod(num, (b) => b%2 == 1));