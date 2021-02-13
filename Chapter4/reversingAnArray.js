function reverseArray(arr) {
    var num = [];

    for (let i of arr) {
        num.unshift(i);
    }

    return num;
}
console.log(reverseArray([1, 2, 3, 4, 5]));

function reverseArrayInPlace(arr) {
    let i = 0;
    let j = Math.ceil(arr.length / 2);
    let k = arr.length - 1;
    let tmp;

    for (i = 0; i < j; i++) {
        tmp = arr[i];
        arr[i] = arr[k - i];
        arr[k - i] = tmp;
    }
    
    /*Alternative using other loop
    for (let num of arr) {
        if (i >= j) break;

        arr[i] = arr[k - i];
        arr[k - i] = num;
        i++;
        //k--;
    }*/

    return arr;
}
console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));
console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6]));