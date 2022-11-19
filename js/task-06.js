

const inputEl = document.querySelector('#validation-input');
// const inputLengthString = document.querySelector('input[data-length="6"]')
// console.log(inputLength.dataset.length)

const inputLength = Number(inputEl.dataset.length);

inputEl.addEventListener('blur', onChangInput);

function onChangInput(event) {
    console.log(event.currentTarget.value.length)
    if (event.currentTarget.value.length === inputLength) {
    inputEl.classList.add('valid');
     inputEl.classList.remove('invalid');
     console.log('Green color');
    }
else {
     inputEl.classList.add('invalid');
     inputEl.classList.remove('valid');
     console.log('Red color');
    }   
}

