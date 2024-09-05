function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyEl = document.querySelector("body");
const colorTxt = document.querySelector(".color");
const btnEl = document.querySelector(".change-color");

btnEl.addEventListener("click", handleClick);

function handleClick() {
  const color = getRandomHexColor();
  colorTxt.textContent = color;
  bodyEl.style.backgroundColor = color;
}
