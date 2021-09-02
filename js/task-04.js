const refs = {
  counterValue: document.querySelector('#value'),
  decrement: document.querySelector('decrement'),
  increment: document.querySelector('decrement'),
    
}

refs.increment.addEventListener('click', () => {
  let toNumber = Number(refs.counterValue.innerText);
  toNumber += 1;
  refs.counterValue.innerText = toNumber;
});
refs.decrement.addEventListener('click', () => {
  let toNumber = Number(refs.counterValue.innerText);
  toNumber -= 1;
  refs.counterValue.innerText = toNumber;
 });
