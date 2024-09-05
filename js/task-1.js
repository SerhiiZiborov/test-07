const categoriesEl = document.querySelector("#categories");

const categoriesItem = categoriesEl.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItem.length}`);

categoriesItem.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
