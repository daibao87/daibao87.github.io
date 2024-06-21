function filter(a, f) {
    let Array = [];
    for (let i = 0; i < a.length; i++) {
        if (f(a[i])) {
            Array[Array.length] = a[i];
        }
    }
    return Array;
}
let arr = [1, 2, 3, 4];
let filtered = filter(arr, function(x) { return x % 2 === 1; });
console.log(filtered); 