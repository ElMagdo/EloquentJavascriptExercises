function loop(val, test, body, update) {
    let i = 0;
    while (test(i, val)) {
        body(i);
        i = update(i);
    }
}

loop(5, (a, d) => a < d, console.log, c => c+1);