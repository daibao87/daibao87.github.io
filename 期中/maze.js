const mazeWidth = 20; 
const mazeHeight = 20; 
const maze = document.getElementById('maze');
const player = document.createElement('div');
const goal = document.createElement('div');
let playerPosition = { x: 0, y: 0 };
function generateMaze() {
    maze.innerHTML = ''; 
    for (let row = 0; row < mazeHeight; row++) {
        for (let col = 0; col < mazeWidth; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            maze.appendChild(cell);
        }
    }
}
function initGame() {
    player.classList.add('player');
    maze.appendChild(player);
    goal.classList.add('goal');
    maze.appendChild(goal);
}
function canMoveTo(x, y) {
    if (x < 0 || x >= mazeWidth || y < 0 || y >= mazeHeight) {
        return false; 
    }
    const targetCell = document.querySelector(`.cell:nth-child(${y * mazeWidth + x + 1})`);
    if (!targetCell || targetCell.style.backgroundColor !== 'white') {
        return false; 
    }
    return true;
}
function movePlayer(direction) {
    let newX = playerPosition.x;
    let newY = playerPosition.y;
    switch (direction) {
        case 'up':
            newY--;
            break;
        case 'down':
            newY++;
            break;
        case 'left':
            newX--;
            break;
        case 'right':
            newX++;
            break;
        default:
            return;
    }
    if (canMoveTo(newX, newY)) {
        player.style.left = `${newX * 20}px`;
        player.style.top = `${newY * 20}px`;
        playerPosition.x = newX;
        playerPosition.y = newY;
        checkWinCondition();
    }
}