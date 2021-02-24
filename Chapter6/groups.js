/*class Group {
    arr = [];

    constructor() {
        return {arr};//i==null ? arr : i;
    }

    add(val) {
        arr.push(val);
        return this.arr;
    }

    delete() {}

    has() {}

    static from() {}
}

let g1 = new Group([1, 2, 3]);

console.log(g1);

g1.add(40);
g1.add(30);

console.log(g1);*/

let arr = new Set();
console.log(arr);

arr.add(40).add(30);
console.log(arr);

arr.add([1, 2, 3]);
console.log(arr);