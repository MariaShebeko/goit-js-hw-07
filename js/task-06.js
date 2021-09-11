const input = document.querySelector('#validation-input');
const dataLength = input.getAttribute('data-length');

input.addEventListener('blur', onBlurValidation);

function onBlurValidation() {
 if (input.value.length === +(dataLength)) {
  toggleClass('invalid', 'valid');
 } else {
  toggleClass('valid', 'invalid');
 }
}

function toggleClass(revomeClass, addClass) {
 input.classList.remove(revomeClass);
 input.classList.add(addClass);
}

