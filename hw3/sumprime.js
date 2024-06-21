function isPrime(n) {
    if (n <= 1) {
        return false; 
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false; 
        }
    }
    return true; 
}
function sumPrime(n) {
    let sum = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    console.log(sum);
}
sumPrime(10);  
sumPrime(20); 