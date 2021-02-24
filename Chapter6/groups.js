class Group {

    constructor() {
        this.member = [];
    }

    add(val) {
        if (this.member.indexOf(val) == -1) this.member.push(val);
    }

    delete(val) {
        this.member = this.member.filter(i => i != val);
    }

    has(val) {
        return this.member.includes(val);
    }

    static from(arr) {
        let a = new Group();
        for (let i of arr) a.member.push(i);
        return a;
    }
}


let g1 = Group.from([1, 10]);

console.log(g1);

console.log(g1.has(10)); //-> true

console.log(g1.has(30)); //-> false

g1.add(10);

console.log(g1);

g1.delete(10);

console.log(g1);

console.log(g1.has(10)); //-> false