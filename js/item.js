const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");
const quantity = document.querySelector("#quantity");

// console.log(add, subtrack, quantity);

add.addEventListener(
  "click",
  () => (quantity.value = Number(quantity.value) + 1)
);

subtract.addEventListener(
  "click", 
  () => {
  if (quantity.value > 0) {
    quantity.value = Number(quantity.value) - 1;
  }
});
