const form = document.querySelector('#form')
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const message = document.querySelector('#msg');


form.addEventListener('submit', (e) => {

    if (!validateInputs()) {
        e.preventDefault();
    }
})

function validateInputs() {

    const nameVal = name.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const msgVal = message.value.trim();

    let success = true


    if (nameVal === '') {
        success = false;
        setError(name, 'Name is required')
    }
    else {
        setSuccess(name)
    }


    if (emailVal === '') {
        success = false;
        setError(email, 'Email is required')
    }
    else if (!validateEmail(emailVal)) {
        success = false;
        setError(email, 'Please enter a valid email')
    }
    else {
        setSuccess(email)
    }



    if (phoneVal === '') {
        success = false;
        setError(phone, 'Phone Number is required')
    }
    else if (phoneVal.length !== 10) {
        success = false;
        setError(phone, 'Enter valid phone number')
    }
    else {
        setSuccess(phone)
    }


    if (msgVal === '') {
        success = false;
        setError(message, 'Message is required')
    }
    else {
        setSuccess(message)
    }

    return success;

}
//element - password, msg- pwd is reqd
function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};