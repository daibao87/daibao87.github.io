document.getElementById('translateButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const languageSelect = document.getElementById('languageSelect').value;
    if (inputText.trim() === '') {
        alert('請輸入要翻譯的文字。');
        return;
    }
    translateText(inputText, languageSelect);
});
function translateText(text, languageSelect) {
    let translatedText = '';

    switch (languageSelect) {
        case 'zh-en':
            translatedText = translateZhToEn(text);
            break;
        case 'zh-ja':
            translatedText = translateZhToJa(text);
            break;
        case 'en-zh':
            translatedText = translateEnToZh(text);
            break;
        case 'ja-zh':
            translatedText = translateJaToZh(text);
            break;
        default:
            translatedText = '無法識別的翻譯類型';
    }
    document.getElementById('translationOutput').textContent = translatedText;
}
function translateZhToEn(text) {
    return "Translated (Zh to En): " + text;
}
function translateZhToJa(text) {
    return "Translated (Zh to Ja): " + text;
}
function translateEnToZh(text) {
    return "翻譯 (En 到 Zh): " + text;
}
function translateJaToZh(text) {
    return "翻譯 (Ja 到 Zh): " + text;
}
