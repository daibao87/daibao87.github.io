function matrixMul(a, b) {
   
    let c = new Array(a.length);
    for (let i = 0; i < c.length; i++) {
        c[i] = new Array(b[0].length).fill(0);
    }
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b[0].length; j++) {
            for (let k = 0; k < a[0].length; k++) {
                c[i][j] += a[i][k] * b[k][j];
            }
        }
    }
    return c;
}
let aa = [
    [1, 2, 3],
    [4, 5, 6]
];
let bb = [
    [7, 8],
    [9, 10],
    [11, 12]
];
console.log(matrixMul(aa, bb));