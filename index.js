// Pattern to identify an email (Source: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript)
const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const form = document.querySelector('.input');
const inputDiv = document.querySelector('#email');

function submitEmail() {
    const inputEmail = document.querySelector('#email').value;
    let isEmail = re.test(String(inputEmail).toLowerCase());
    if (!isEmail & !document.querySelector('.warning')) {
        let warning = document.createElement('div');
        warning.className = 'warning';
        warning.textContent += 'Please provide a valid email';
        form.appendChild(warning);

        let error = document.createElement('div');
        error.className = 'error';
        form.appendChild(error);

        inputDiv.style.borderColor = 'var(--clr-primary-soft)';
    }
}

function removeWarning() {
    let warning = document.querySelector('.warning');
    let error = document.querySelector('.error');
    if (warning) {
        warning.parentNode.removeChild(warning);
        error.parentNode.removeChild(error);
        inputDiv.style.borderColor = 'var(--clr-primary-des)';
    }
}
