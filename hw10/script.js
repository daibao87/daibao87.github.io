document.getElementById('translateButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const languageSelect = document.getElementById('languageSelect').value;

    if (inputText.trim() === '') {
        alert('請輸入要翻譯的文字。');
        return;
    }

    const translations = {
        'zh-en': {
            '你好': 'Hello',
            '世界': 'World'
        },
        'zh-ja': {
            '你好': 'こんにちは',
            '世界': '世界'
        },
        'en-zh': {
            'Hello': '你好',
            'World': '世界'
        },
        'ja-zh': {
            'こんにちは': '你好',
            '世界': '世界'
        }
    };

    const translationMap = translations[languageSelect];
    const words = inputText.split(' ');
    const translatedWords = words.map(word => translationMap[word] || word);
    const translatedText = translatedWords.join(' ');

    document.getElementById('translationOutput').textContent = translatedText;
});
