const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text')


inputEl.addEventListener('input', changSize);

function changSize() {
    textEl.style.fontSize = inputEl.value + "px";
    console.log('changSize')
}



