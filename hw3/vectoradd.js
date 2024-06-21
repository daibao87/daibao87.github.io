function vectorAdd(a, b) {

     for (let i = 0; i < a.length; i++) {
        a[i] = a[i] + b[i];
     }
    return a;
}
let c = [1, 2, 3];
let d = [4, 5, 6];
console.log(vectorAdd(c, d)); 