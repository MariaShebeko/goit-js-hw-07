const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');

const ingredientItem = ingredients.map(ingredient => {

  const newItem = document.createElement('li');
  newItem.textContent = ingredient;
  return newItem

});

ingredientsList.append(...ingredientItem)

// II способ
// const ingredientItem = ingredients.reduce((acc, ingredient) => acc + `<li>${ingredient}</li>`, '')

// ingredientsList.insertAdjacentHTML('beforeend', ingredientItem)

