function decompose(n) {
    // check for decimals and convert it to fraction
    if (n.includes('.')) {
        let k = n.split('.')[1].length;
        n = `${Number(n) * 10 ** k}/${10 ** k}`;
    }

    n = n.split('/');
    // if the numerator is 0
    if (n[0] === '0') {
        return [];
    }

    let numerator = Number(n[0]), denominator = Number(n[1]), arr = [], temp;
    if (numerator % denominator === 0) {
        return [`${numerator / denominator}`];
    }

    while (true) {
        temp = Math.ceil(denominator / numerator);
        temp !== 1 ? arr.push(`1/${temp}`) : arr.push(`${temp}`);
        numerator = numerator * temp - denominator;
        denominator = denominator * temp;

        if (numerator <= 0) {
            break;
        }
    }
    return arr;

}