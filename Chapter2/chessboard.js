var size = 8;
var i = 1;
var j = 1;
var ch = "";

while (i <= size) {
    while (j <= size) {
        if ((i + j)%2 == 0) ch += " ";
        else ch += "#";
        j++;
    }
    j = 1;
    ch += "\n";
    i++;
}

console.log(ch);