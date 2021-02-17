function myMin(num1, num2) {
    if (num1 <= num2) return num1;
    return num2;
}

console.log(myMin(4, 5));
console.log(myMin(0, 10));
console.log(myMin(0, -10));