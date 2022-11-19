
const counter = {
    counterValue: 0,

    decrement() {
        this.counterValue -= 1; 
    },

    increment() {
        this.counterValue += 1;   
    }
}


const decrementBtn = document.querySelector('button[data-action="decrement"]');
console.log(decrementBtn);

const incrementBtn = document.querySelector('button[data-action="increment"]');
console.log(incrementBtn);

const value = document.querySelector('#value')
console.log(value)


decrementBtn.addEventListener('click', function () {
    console.log('відняти');
    counter.decrement();
    value.textContent = counter.counterValue;
});

incrementBtn.addEventListener('click', function () {
    console.log('додати');
    counter.increment();
    value.textContent = counter.counterValue;
});


