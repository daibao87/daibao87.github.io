document.getElementById('translateButton').addEventListener('click', async () => {
    const inputText = document.getElementById('inputText').value;
    const languageSelect = document.getElementById('languageSelect').value;

    if (inputText.trim() === '') {
        alert('請輸入要翻譯的文字。');
        return;
    }

    try {
        const response = await fetch('https://api.groq.com/translate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: inputText,
                language: languageSelect
            })
        });

        if (!response.ok) {
            throw new Error('翻譯請求失敗');
        }

        const data = await response.json();
        document.getElementById('translationOutput').textContent = data.translation;
    } catch (error) {
        console.error('錯誤:', error);
        alert('翻譯時發生錯誤，請重試。');
    }
});
