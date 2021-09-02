const refs = {
  counterValue: document.querySelector('#value'),
  decrement: document.querySelector('[data-action="decrement"]'),
  increment: document.querySelector('[data-action="increment"]'),
    
}

refs.increment.addEventListener('click', () => {
  let toNumber = +(refs.counterValue.innerText);
  toNumber += 1;
  refs.counterValue.innerText = toNumber;
});

refs.decrement.addEventListener('click', () => {
  let toNumber = +(refs.counterValue.innerText);
  toNumber -= 1;
  refs.counterValue.innerText = toNumber;
 });
