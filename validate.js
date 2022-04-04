//Grabbing elements from the DOM.
const emailCollector = document.getElementById("email-collector");
const email = document.getElementById("email");

//Here, I'm adding an event listener upon submit. Forms come with
//a lot of default styling and functionality, and I don't want the
//browser's form validation to interfere with my own custom validation.
emailCollector.addEventListener('submit', e => {
    e.preventDefault();

    validateEmail();
})

//This is to mark the form with an "error" class, which I will use 
//later in an if/else statement, as well as to set a message notifying 
//the user of the error. 
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

//Same deal as above-- This is to mark the form with a "success class".
//Instead of setting a message, we will be removing the error message.
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

//A regular expression used to validate the user's given email address.
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//Where the validation all comes together. If the email is not valid, set an error message.
//Else, that means the email has been successfully validated-- The form is officially marked as successful,
//and a success message is given to the user to notify them that the email address was received.
const validateEmail = () => {
    const emailValue = email.value.trim();
    if (emailValue === '' || !isValidEmail(emailValue)) {
        setError(email, 'Please provide a valid email');
    } else {
        setSuccess(email);
        let successDisplay = document.getElementById("successMessage");
        successDisplay.textContent += "Thank you for subscribing to our newsletter.";
    }
}