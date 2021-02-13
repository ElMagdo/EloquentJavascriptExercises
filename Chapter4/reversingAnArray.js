function reverseArray(arr) {
    var num = [];

    for (let i of arr) {
        num.unshift(i);
    }

    return num;
}
console.log(reverseArray([1, 2, 3, 4, 5]));

function reverseArrayInPlace(arr) {

}