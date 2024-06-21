function matrixAdd(a, b) {

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            a[i][j] += b[i][j];
        }
    }
    return a;
}
let aa = [
    [1, 2, 3],
    [4, 5, 6]
];
let bb = [
    [7, 8, 9],
    [10, 11, 12]
];
console.log(matrixAdd(aa, bb));