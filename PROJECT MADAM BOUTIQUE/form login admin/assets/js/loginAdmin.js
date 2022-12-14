let css = (css) => document.querySelector(css);

const passwordEl = css('#password'),
    emailEl = css('#email'),
    form = css('#login');




//check login
function checklogin() {
    const email = emailEl.value
    const password = passwordEl.value
    if (email === 'admin' && password === 'admin') {
        css('#login-alert').innerText = ''
        window.location = '/management order/manage.html'

    } else {
        css('#login-alert').innerText = 'Wrong Username or Password '
    }

}


//form login
const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Username cannot be blank');
    }
    else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};
const checkPass = () => {
    let valid = false;

    const password = passwordEl.value.trim();

    if (!isRequired(password)) {
        showError(passwordEl, 'Password cannot be blank.');
    } else {
        showSuccess(passwordEl);
        valid = true;
    }
    return valid;
};



const isRequired = value => value === '' ? false : true;

const showError = (input, message) => {
    const formField = input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');

    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    const formField = input.parentElement;
    formField.classList.remove('error');
    // formField.classList.add('success');
    const error = formField.querySelector('small');
    error.textContent = '';
};

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let isPassValid = checkPass(),
        isEmailValid = checkEmail()

    let isFormValid = isPassValid && isEmailValid

    if (isFormValid) {
        checklogin()
    }
});

const debounce = (fn, delay = 1) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'password':
            checkPass();
            break;
        case 'email':
            checkEmail();
            break;
    }
}));
