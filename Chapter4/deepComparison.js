function deepEqual(val1, val2) {
    var v1 = (typeof val1 == "object") && (val1 != null);
    var v2 = (typeof val2 == "object") && (val2 != null);

    if (v1 && v2) {
        var arr1 = Object.keys(val1), arr2 = Object.keys(val2);
        //console.log(arr1.length + " " + arr2.length);
        
        if (arr1.length == arr2.length) {
            for (let i of arr1) {
                //console.log(val1[i] + " " + val2[i]);
                if (val1[i] != val2[i]) return false;
            }
            return true;
        } else return false;
    } else return val1 === val2;
}

var obj1 = {val: 3, res: "true"}, obj2, obj3 = {val: 3, res: "true"};
obj2 = obj1;
console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj3));
console.log(deepEqual("2", 2));
console.log(deepEqual('2', obj2));
console.log(deepEqual(1, 1));