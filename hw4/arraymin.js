function arrayMin(a) {
    let min = a[0];
    for (let i = 1; i < a.length; i++) {
        if (a[i] < min) {
            min = a[i];
        }
    }
    return min;
}
console.log(arrayMin([3, 5, 1, 7, 2])); 
console.log(arrayMin([-1, 0, 10, 4, -3])); 