const container = document.querySelector('.container');
const selection = document.querySelector('.selection');

var gridSize = 16;


function createButton() {
    const newGridInput = document.createElement('input');
    const newGridButton = document.createElement('button')
    newGridButton.textContent = 'Submit';
    newGridInput.setAttribute('type', 'number');
    newGridInput.setAttribute('min', '16');
    newGridInput.setAttribute('max', '100');
    const newGridInputText = document.createElement('p');
    newGridInputText.textContent = 'Custom Grid Size 16-100';

    selection.appendChild(newGridInputText);
    selection.appendChild(newGridInput);
    selection.appendChild(newGridButton);
}

function createGrid() {
    for (let i = 0; i < gridSize; i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid-row");
        for (let j = 0; j < gridSize; j++){
            const gridColumn = document.createElement("div");
            gridColumn.classList.add("grid-column");
            grid.appendChild(gridColumn);
        } 
        container.appendChild(grid);
    }
    attachGridEventListeners();
}

function attachGridEventListeners() {
    const grids = document.querySelectorAll(".grid-column");
    grids.forEach((box) => 
        {   
            box.addEventListener('mouseover', (event) => {
                event.target.style.backgroundColor = "red";
            });
        });
}

createGrid();
createButton();

const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const customGrid = input.value;
    if (customGrid > 100 || customGrid < 16) {
        alert("Outside of specificied grid size")
    } else {
        gridSize = customGrid;
        container.innerHTML = '';
        createGrid();
    }
});






