function arrayToList(arr) {
    var list = null;
    for (let i = arr.length - 1; i >= 0; i--) {
        list = {value: arr[i], rest: list};
    }
    return list;
}
console.log(arrayToList([10, 20]));

function listToArray(list) {
    var arr = [];
    for (let node = list; node; node = node.rest) {
        arr.push(node.value);
    }
    return arr;
}
console.log(listToArray(arrayToList([10, 20, 30])));

function prepend(num, list) {
    var list1 = {value: num, rest: list};
    return list1;
}
console.log(prepend(10, prepend(20, null)));

function nth(list, pos) {
    var i = 0;
    for (let node = list; node; node = node.rest) {
        if (i == pos) {
            return node.value;
        }
        i++;
    }
    return undefined;
}
console.log(nth(arrayToList([10, 20, 30]), 1));
console.log(nth(arrayToList([10, 20, 30]), 3));

function nthRecursive(list, pos) {
    if (pos == 0) {
        return list.value;
    }
    if (list == null) return undefined;

    return nthRecursive(list.rest, pos-1);
}
console.log(nthRecursive(arrayToList([10, 20, 30]), 1));