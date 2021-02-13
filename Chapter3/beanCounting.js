function countChar(str, ch) {
    var i = 0, count = 0;

    while (i < str.length) {
        if (str[i] == ch) count++;
        i++;
    }

    return count;
}

console.log(countChar("God programmed the world in ja..!!", 'o'));