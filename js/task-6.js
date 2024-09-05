function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {}

function destroyBoxes() {}

const form = document.querySelector("#controls");
const inputEl = form.querySelector("input");
const createBtn = form.querySelector("button[data-create]");
const destroyBtn = form.querySelector("button[data-destroy]");

const boxesEl = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);
