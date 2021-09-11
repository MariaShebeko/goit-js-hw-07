const refs = {
  input: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'), 
}

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  return refs.text.style.fontSize = `${event.currentTarget.value}px`;
}