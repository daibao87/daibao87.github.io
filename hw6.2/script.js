document.getElementById('toggleBtn').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('expanded');
});

function showContent(page) {
    var content = document.getElementById('content');
    if (page === 'about') {
        content.innerHTML = '<h1>自我介紹</h1><p>你好，我是林育民。我熱愛寫程式和研究技術創新。</p><a href="#" onclick="showContent(\'home\')">返回首頁</a>';
    } else if (page === 'projects') {
        content.innerHTML = '<h1>作品</h1><p>這裡是我的一些作品展示。</p><a href="https://github.com/daibao87/daibao87.github.io/" onclick="showContent(\'home\')">返回首頁</a>';
    } else if (page === 'contact') {
        content.innerHTML = '<h1>聯絡方式</h1><p>你可以通過以下方式聯絡我。</p><a href="https://github.com/daibao87" onclick="showContent(\'home\')">返回首頁</a>';
    } else if (page === 'more') {
        content.innerHTML = '<h1>更多...</h1><p>這裡有更多的內容。</p><a href="https://www.youtube.com/channel/UCtzBq-qEjYy-d6q_GioiJFg" onclick="showContent(\'home\')">返回首頁</a>';
    } else {
        content.innerHTML = '<h1>歡迎來到我的網站</h1><p>這是一個側欄網站。</p>';
    }
}
