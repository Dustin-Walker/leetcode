function myPow(x: number, n: number): number {
    if (n === 0 || x === 1) {
        return 1;
    }
    let output = x;
    if (n >= 1) {
        for(let index = 1; index < n; index += 1) {
            output *= x;
            output = Number.parseFloat(output.toFixed(5));
        }
        output = Number.parseFloat(output.toFixed(5));
    } else {
        // n < 0
        for(let index = 0, absN = Math.abs(n); index <= absN; index += 1) {
            output /= x;
            output = Number.parseFloat(output.toFixed(5));
        }
    }
    return output;
};

export default myPow;