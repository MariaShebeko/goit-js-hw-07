const refs = {
  categoriesListEl: document.querySelector('#categories'),
  categoriesItemEl: document.querySelectorAll('.item h2'),
  
}

const itemsEl = refs.categoriesListEl.children;
console.log(`В списке ${itemsEl.length} категорий`);

refs.categoriesItemEl.forEach(item =>
  console.log(`Категория: ${item.textContent}, 
  Количество элементов: ${item.nextElementSibling.children.length}`))

