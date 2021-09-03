const refs = {
  createBtnEl: document.querySelector('[data-action="render"]'),
  clearBtnEl: document.querySelector('[data-action="destroy"]'),
  inputEl: document.querySelector('.input'),
  boxesEl: document.querySelector('#boxes'),
  
}

let addWidth = 10

refs.createBtnEl.addEventListener('click', createBoxes);
refs.clearBtnEl.addEventListener('click', destroyBoxes);

function getRandom(min, max) {
  
      return Math.ceil(Math.random() * (max - min) + min)
}

function createBoxes(amount) {

  let box = refs.boxesEl.children.length;
  amount = refs.inputEl.value - 1;
  box = document.createElement('div');

  box.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;
  box.style.width = `${30 + addWidth}px`;
  box.style.height = `${30 + addWidth}px`;
  addWidth += 10
  
  refs.boxesEl.append(box)

}

function destroyBoxes() {
  
  refs.boxesEL.remove(box);
}