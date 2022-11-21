const form = document.querySelector('.login-form');
// console.log(loginForm);

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    if (email.length === 0 || password.length === 0) {
        alert('всі поля повинні бути заповнені')
    } else {
        const Object = {
            email,
            password, 
        }
        console.log(Object)
    } 
    form.reset();
        }
