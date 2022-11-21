const input = document.querySelector('#name-input')
// console.log(input)

const output = document.querySelector('#name-output')
console.log(output.textContent)


// input.addEventListener('input', (event) => {
    
//     if (event.currentTarget.value === '') {
//     console.log(output.textContent)
//     }
//     output.textContent = event.currentTarget.value
//     }
// );
input.addEventListener('input', onInputClick);

function onInputClick(e) {
    output.textContent = e.currentTarget.value

    if (!output.textContent) {
       return output.textContent = 'Anonymous'
   }
}