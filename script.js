const container = document.getElementById('container');
const select = document.getElementById('select');
const clearBtn = document.getElementById('clearBtn');

let rgb = 250;

function makeGrid(gridSize) {
    for(let i=0; i<gridSize; i++) {
        const row = document.createElement('div');
        container.appendChild(row);

        for(let j=0; j<gridSize; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `${400 / gridSize}px`;
            square.style.height = `${400 / gridSize}px`;
            row.appendChild(square);
        }
    }
}

function getGridSize() {
    gridSize = prompt('Enter a grid size between 12 and 100...', 16);
    if(gridSize >= 12 && gridSize <= 100) {
        makeGrid(gridSize);
    } else {
        getGridSize();
    }
}

function getRandomColor() {
    return Math.floor(Math.random()*16777215).toString(16);
}

function clearGrid() {
    while(container.firstChild) {
        container.removeChild(container.firstChild)
    } getGridSize();
}

clearBtn.addEventListener('click', e => {
    clearGrid();
});

container.addEventListener('mouseover', e => {
    const squares = e.target;
    if(!squares.classList.contains('square')) {
        return;
    } else if(select.value === 'random') {
        squares.style.backgroundColor = '#' + getRandomColor();
    } else if(select.value === 'black') {
        squares.style.backgroundColor = '#000';
    } else if(select.value === 'greyscale') {
        squares.style.backgroundColor = `rgb(${rgb}, ${rgb}, ${rgb})`;
        if(rgb > 0) {
            rgb = 250;
            squares.addEventListener('mouseover', () => {
                squares.style.backgroundColor = `${rgb}, ${rgb}, ${rgb}`;
                rgb -= 25;
            });
        }
    }
});

getGridSize();