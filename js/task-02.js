const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const itemIngredients = ingredients.map(vegetable => {
  const newItem = document.createElement("li")
  newItem.textContent = vegetable
  newItem.classList.add("item")

  console.log(newItem);
  return newItem
})

console.log( itemIngredients);

const list = document.querySelector('#ingredients')

const itemList = list.prepend(...itemIngredients)
