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

    [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
    constructor(group) {
        this.i = 0;
        this.group = group;
    }

    next() {
        if (this.i >= this.group.member.length) return {done: true};

        let val = {value: this.group.member[this.i]};
        this.i++;

        return {val, done: false};
    }
}

/*Group[Symbol.iterator] = function() {
    return new GroupIterator(this);
}*/

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}