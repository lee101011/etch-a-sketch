function makeGrid(size) {
  grid.replaceChildren();
  if (size > 100) size = 100;
  if (!Number.isInteger(size) || Number.isInteger(size) && size < 0) size = 16;

  for (let row = 0; row < size; row++) {
    const rowElement = document.createElement("div");
    rowElement.setAttribute("class", "row");
    for (let item = 0; item < size; item++) {
      const itemElement = document.createElement("div");
      itemElement.setAttribute("class", "item");
      itemElement.setAttribute("id", `r${row}i${item}`);
      itemElement.setAttribute("data-shade", "0");

      itemElement.addEventListener("mouseenter", handleClick);

      rowElement.appendChild(itemElement);
    }

    grid.appendChild(rowElement);
  }
}

function handleClick(event) {
  switch(gameType) {
    case 0:
      event.target.classList.add("shade-9");
      break;
    
  }
}

const grid = document.querySelector("#grid");
const reset = document.querySelector("#reset");

reset.addEventListener("click", () => makeGrid(getNewDimensions()));

let gameType = 0;

makeGrid(16);

function getNewDimensions() {
  let num = parseInt(prompt("Enter dimension", 16));
  return Number.isInteger(num) && num > 0 ? num : 16;
}