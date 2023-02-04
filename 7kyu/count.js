function getDivisorsCnt(n) {
    // todo
    let count = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            // If divisors are equal,
            // count only one
            if (n / i == i)
                count++;

            else // Otherwise count both
                count = count + 2;
        }
    }
    return count;
}

//Other solution

function getDivisorsCnt(n) {
    for (var d = 0, i = n; i > 0; i--) {
        if (n % i == 0) d++;
    }

    return d;
}