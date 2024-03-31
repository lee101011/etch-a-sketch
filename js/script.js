function makeGrid(size) {
  grid.replaceChildren();
  if (size > 100) size = 100;
  if (!Number.isInteger(size) || Number.isInteger(size) && size < 0) size = 16;
  gridSize = size;

  for (let row = 0; row < size; row++) {
    const rowElement = document.createElement("div");
    rowElement.setAttribute("class", "row");
    for (let item = 0; item < size; item++) {
      const itemElement = document.createElement("div");
      itemElement.setAttribute("class", "item");
      itemElement.setAttribute("id", `r${row}i${item}`);
      itemElement.setAttribute("data-shade", 0);

      itemElement.addEventListener("mouseenter", handleClick);

      rowElement.appendChild(itemElement);
    }

    grid.appendChild(rowElement);
  }
}

function randomColor(num){
  return Math.floor(Math.random() * (num + 1))
}

function handleClick(event) {
  switch(gameType) {
    case 1:
      event.target.style["background-color"] = 
        `rgb(${randomColor(255)},${randomColor(255)},${randomColor(255)})`;
      break;
    case 2:
      incrementShade(event.target);
      break;
    default:
      event.target.classList.add("shade-9");
      break;
  }
}

const grid = document.querySelector("#grid");
const reset = document.querySelector("#reset");

reset.addEventListener("click", () => makeGrid(getNewDimensions()));

let gameType = 0;
let gridSize = 16;

makeGrid(16);

function getNewDimensions() {
  let num = parseInt(prompt("Enter dimension", 16));
  return Number.isInteger(num) && num > 0 ? num : 16;
}

function incrementShade(item) {
  let shade = parseInt(item.getAttribute("data-shade"));
  if( shade >= 9 ) return;
  console.log(shade);
  item.classList.remove(`shade-${parseInt(shade)}`)
  item.classList.add(`shade-${parseInt(shade+1)}`);
  ++shade;
  item.setAttribute("data-shade",parseInt(shade));
}

function setNormal() {
  gameType = 0;
  makeGrid(gridSize);
}

function setRGB() {
  gameType = 1;
  makeGrid(gridSize);
}

function setShades() {
  gameType = 2;
  makeGrid(gridSize);
}