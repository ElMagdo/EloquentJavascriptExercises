function arrayToList(arr) {
    var list = null;
    for (let i = arr.length - 1; i >= 0; i--) {
        list = {value: arr[i], rest: list};
    }
    return list;
}
console.log(arrayToList([1, 2, 3]));

function listToArray(list) {
    var arr = [];
    for (let node = list; node; node = node.rest) {
        arr.push(node.value);
    }
    return arr;
}
var lst = arrayToList([2, 3, 4, 5]);
console.log(listToArray(lst));

function prepend(num, list) {
    var list1 = list;
    for (let node = list; node; node = node.rest) {
        list1 = {value: node.value, rest: node.list1}
    }
    list1.rest = {value: num, rest: null};
    return list1;
}
console.log(prepend(6, lst));

function nth() {}

function nthRecursive() {}