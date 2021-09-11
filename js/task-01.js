const categoriesListEl = document.querySelector('#categories');

console.log(`В списке ${categoriesListEl.children.length} категории`);

for (const item of categoriesListEl.children) {
  console.log(`Категория: ${item.firstElementChild.textContent}, 
  Количество элементов: ${item.lastElementChild.children.length}`)
}


