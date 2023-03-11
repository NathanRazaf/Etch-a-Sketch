let gridSize = 10;

const grid=document.getElementById('grid');

function makeGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i=0; i<size*size; i++) {
        const box = document.createElement('div');
        box.classList.add("box");
        grid.appendChild(box);
    }
    const boxes=document.querySelectorAll('div[class="box"]')
    boxes.forEach(box => box.style.backgroundColor = "white")
}

function clearGrid(e) {
    grid.innerHTML="";
}

function drawBlack(e) {
    this.style.backgroundColor = "black"
}

function drawRandom(e) {
    let rgbR = Math.floor(Math.random() * 256);
    let rgbG = Math.floor(Math.random() * 256);
    let rgbB = Math.floor(Math.random() * 256);
    this.style.backgroundColor = `rgb(${rgbR},${rgbG},${rgbB})`;
}

function erase(e) {
    this.style.backgroundColor = "white";
}

function toggleBlack(e) {
    const boxes=document.querySelectorAll('div[class="box"]')
    boxes.forEach(box => {
        box.removeEventListener('mouseover',drawRandom);
        box.removeEventListener('mouseover',erase);
        box.addEventListener('mouseover',drawBlack);
    })
}

function toggleRandom(e) {
    const boxes=document.querySelectorAll('div[class="box"]')
    boxes.forEach(box => {
        box.removeEventListener('mouseover',drawBlack);
        box.removeEventListener('mouseover',erase);
        box.addEventListener('mouseover',drawRandom);
    })
}

function toggleErase(e) {
    const boxes=document.querySelectorAll('div[class="box"]')
    boxes.forEach(box => {
        box.removeEventListener('mouseover',drawRandom);
        box.removeEventListener('mouseover',drawBlack);
        box.addEventListener('mouseover',erase);
    })
}

function cleanGrid(e) {
    const boxes=document.querySelectorAll('div[class="box"]');
    boxes.forEach(box => box.style.backgroundColor = "white");
}

const gridButton = document.getElementById('grid-size');
const randomButton = document.getElementById('random');
const blackButton = document.getElementById('black');
const eraserButton = document.getElementById('eraser');
const cleanButton = document.getElementById('clean');

gridButton.addEventListener('click', function(e) {
    clearGrid;
    gridSize=prompt("Choose grid size :");
    makeGrid(gridSize);
})

randomButton.addEventListener('click', toggleRandom);
blackButton.addEventListener('click', toggleBlack);
eraserButton.addEventListener('click', toggleErase);
cleanButton.addEventListener('click', cleanGrid);

window.onload= () => makeGrid(gridSize);
