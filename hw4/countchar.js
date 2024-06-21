function countChar(str) {
    let Count = {}; 
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (Count[char]) {
            Count[char]++;
        } else {
            Count[char] = 1;
        }
    }
    return Count;
}
console.log(countChar("aabccadeaac"));