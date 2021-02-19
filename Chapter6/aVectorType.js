class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(vec) {
        return {x: this.x + vec.x, y: this.y + vec.y};
    }

    minus(vec) {
        return {x: this.x - vec.x, y: this.y - vec.y};
    }

    get length() {
        return Math.sqrt((this.x*this.x) + (this.y*this.y));
    }
}

let v1 = new Vec(3, 5);
let v2 = new Vec(1, 2);

console.log(v1.plus(v2));
console.log(v1.minus(v2));
console.log(v1.length);
console.log(v2.length);