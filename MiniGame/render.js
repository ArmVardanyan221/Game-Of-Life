const container = document.createElement("section");

const fieldRows = 10;
const fieldCols = 30;

let gameMatrix = [];
let boxMatrix = [];
let colorList = ["gray", "green"];

startGame();

function startGame() {
    initGameMatrix(gameMatrix, fieldRows, fieldCols);
    initContainer(container);
    renderContainer(fieldRows, fieldCols);
    updateGame();
    spawnGrass();

    setInterval(updateGame, 1000);
}

function updateGame() {
    //Game Logic
    
    renderMatrix(gameMatrix, fieldRows, fieldCols);
}

function spawnGrass() {
    let randomRow = Math.floor(Math.random() * fieldRows);
    let randomCol = Math.floor(Math.random() * fieldCols);
    gameMatrix[randomRow][randomCol] = 1;
}

function renderMatrix(gameMatrix, row, col) {
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            let color = getColor(gameMatrix, i, j);
            paintBox(i, j, color);
        }
    }
}

function getColor (gameMatrix, row, col) {
    return colorList[gameMatrix[row][col]]
}

function paintBox(row, col, color) {
    boxMatrix[row][col].style.backgroundColor = color;
}

function initContainer(container) {
    container.style.width = "100%";
    container.style.height = "100vh";
    container.style.border = "2px solid black"
    document.body.appendChild(container);
}

function renderContainer(row, col) {
    for (let i = 0; i < row; i++) {
        const row = document.createElement("div");
        row.style.display = "flex";
        boxMatrix.push([]);
        for (let j = 0; j < col; ++j) {
            let box = document.createElement("div");
            boxMatrix[i].push(box);
            box.style.width = "25px";
            box.style.height = "25px";
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}

function initGameMatrix(gameMatrix, row, col) {
    for(let i = 0; i < row; ++i) {
        gameMatrix.push([]);
        for (let j = 0; j < col; j++) {
            gameMatrix[i][j] = 0;
        }
    }
}
