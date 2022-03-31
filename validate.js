const emailCollector = document.getElementById("email-collector");
const email = document.getElementById("email");

emailCollector.addEventListener('submit', e=>{
    e.preventDefault();

    validateEmail();
})

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');}
}

