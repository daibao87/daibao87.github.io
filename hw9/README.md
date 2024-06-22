# 繪圖畫布

該專案是一個使用 HTML、和 JavaScript 建立的簡單繪圖應用程式。使用者可以在畫布元素上繪圖，並透過點擊按鈕清除其繪圖。

＃ 用法

1. 在網頁瀏覽器中開啟「index.html」。
2. 使用滑鼠在畫布上繪圖。
3. 點選「清除」按鈕清除畫布。

# 文件

- `index.html`：包含 HTML 結構和內嵌 CSS 樣式。
- `script.js`：包含用於在畫布上繪圖和清除畫布的 JavaScript 程式碼。

＃ 怎麼運作的
- `canvas` 元素用於建立可繪製區域。
- 附加事件偵聽器來處理用於繪圖的滑鼠事件：
 - `mousedown`：開始繪製路徑。
 - `mousemove`：隨著滑鼠移動繪製線條。
 - `mouseup` 和 `mouseout`：結束繪圖路徑。
- “清除”按鈕使用“clearRect”清除整個畫布。
