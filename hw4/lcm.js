function lcm(a, b) {
    let maxNumber = Math.max(a, b); 
    while (true) {
        if (maxNumber % a === 0 && maxNumber % b === 0) {
            return maxNumber; 
        }
        maxNumber++;
    }
}
console.log(lcm(12, 18)); 
console.log(lcm(60, 48)); 