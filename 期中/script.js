const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');
const canvasSize = 400;
const cellSize = 20;
let snake = [{ x: 200, y: 200 }];
let food = generateFoodPosition();
let dx = cellSize; 
let dy = 0; 
let score = 0;
function gameLoop() {
    clearCanvas();
    drawFood();
    moveSnake();
    drawSnake();
    checkCollision();
    checkFoodCollision();
    updateScore();
}
function clearCanvas() {
    ctx.clearRect(0, 0, canvasSize, canvasSize);
}
function drawFood() {
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, cellSize, cellSize);
}
function generateFoodPosition() {
    return {
        x: Math.floor(Math.random() * (canvasSize / cellSize)) * cellSize,
        y: Math.floor(Math.random() * (canvasSize / cellSize)) * cellSize
    };
}
function moveSnake() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head); 
    if (!isFoodEaten()) {
        snake.pop(); 
    }
}
function drawSnake() {
    ctx.fillStyle = 'green';
    snake.forEach((segment) => {
        ctx.fillRect(segment.x, segment.y, cellSize, cellSize);
    });
}
function checkCollision() {
    const head = snake[0];
    if (head.x < 0 || head.x >= canvasSize || head.y < 0 || head.y >= canvasSize || isSnakeCollision()) {
        gameOver();
    }
}
function checkFoodCollision() {
    const head = snake[0];
    if (head.x === food.x && head.y === food.y) {
        score++;
        food = generateFoodPosition();
    }
}
function updateScore() {
    scoreElement.textContent = `Score: ${score}`;
}
function isFoodEaten() {
    const head = snake[0];
    return head.x === food.x && head.y === food.y;
}
function isSnakeCollision() {
    const head = snake[0];
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            return true;
        }
    }
    return false;
}
function gameOver() {
    alert(`你死了! 你得到了 ${score}分`);
    resetGame();
}
function resetGame() {
    snake = [{ x: 200, y: 200 }];
    food = generateFoodPosition();
    dx = cellSize;
    dy = 0;
    score = 0;
    updateScore();
}
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (key === 'ArrowUp' && dy === 0) {
        dx = 0;
        dy = -cellSize;
    } else if (key === 'ArrowDown' && dy === 0) {
        dx = 0;
        dy = cellSize;
    } else if (key === 'ArrowLeft' && dx === 0) {
        dx = -cellSize;
        dy = 0;
    } else if (key === 'ArrowRight' && dx === 0) {
        dx = cellSize;
        dy = 0;
    }
});
setInterval(gameLoop, 100);
