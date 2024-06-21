const inputText = document.getElementById('inputText');
const hashValue = document.getElementById('hashValue');
inputText.addEventListener('input', () => {
    const text = inputText.value;
    const hash = CryptoJS.SHA256(text);
    hashValue.textContent = hash;
});
