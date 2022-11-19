const input = document.querySelector('#name-input')
// console.log(input)

const output = document.querySelector('#name-output')
console.log(output.textContent)


input.addEventListener('input', (event) => {
    
    if (event.currentTarget.value === '') {
    output.textContent
    }
    output.textContent = event.currentTarget.value
    }
);
