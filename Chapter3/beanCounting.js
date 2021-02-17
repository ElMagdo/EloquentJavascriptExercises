function countBs(str) {
    var c = 0;

    for (let i of str) {
        if (i == 'B') c++;
    }

    return c;
}

console.log(countBs("BBC"));

function countChar(str, ch) {
    var i = 0, count = 0;

    while (i < str.length) {
        if (str[i] == ch) count++;
        i++;
    }

    return count;
}

console.log(countChar("kakkerlak", 'k'));