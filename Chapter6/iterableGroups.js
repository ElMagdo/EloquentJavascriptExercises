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

class GroupIterator {
    constructor(group) {
        this.i = 0;
        this.member = []; //group.member;
        for (let k of group.member) this.member.push(k);
    }

    next() {
        if (this.i = this.member.length - 1) return {done: true};

        let value = {value: this.member[i]};
        this.i++;

        return {value, done: false};
    }
}

Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this);
}

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}