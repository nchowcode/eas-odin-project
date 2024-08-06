const container = document.querySelector('.container');
const gridSize = 16;


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
}

createGrid();