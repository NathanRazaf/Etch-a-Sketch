let boxNumberRow = 32;


const container = document.createElement('div');
container.classList.add("container");

container.style.display='grid';

container.style.gridTemplateColumns=`repeat(${boxNumberRow}, 1fr)`;
container.style.gridTemplateRows=`repeat(${boxNumberRow}, 1fr)`;
for (let i=0; i<boxNumberRow**2; i++) {
    const box = document.createElement('div');
    box.classList.add("box");
    container.appendChild(box);
}




const interface = document.querySelector('.interface');
interface.appendChild(container);

function drawRandom(e) {
    const rgbR = Math.floor(Math.random() * 256);
    const rgbG = Math.floor(Math.random() * 256);
    const rgbB = Math.floor(Math.random() * 256);
    this.style.backgroundColor = `rgb(${rgbR},${rgbG},${rgbB})`;
}

function drawBlack(e) {
    this.style.backgroundColor = "black";
}

function clearGrid(e) {
    boxes.forEach(box => box.style.backgroundColor="white");
}

const boxes = document.querySelectorAll('div[class="box"]');
const random = document.querySelector('.random');
const black = document.querySelector('.black');
const clear = document.querySelector('.clear');
const gridMaker = document.querySelector('.grid-size');


function toggleRandom(e) {
    boxes.forEach(box => box.removeEventListener('mouseover',drawBlack));
    boxes.forEach(box => box.addEventListener('mouseover', drawRandom));
}

function toggleBlack(e) { 
    boxes.forEach(box => box.removeEventListener('mouseover', drawRandom));
    boxes.forEach(box => box.addEventListener('mouseover', drawBlack));
}

random.addEventListener('click',toggleRandom)
black.addEventListener('click',toggleBlack)
clear.addEventListener('click',clearGrid)

