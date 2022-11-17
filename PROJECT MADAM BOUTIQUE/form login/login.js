let css=(css) => document.querySelector(css);

const usernameEl = css('#username'),
emailEl = css('#email'),
form = css('#login');

const checkUsername = () => {
    let valid = false;

    const username = usernameEl.value.trim();

    if(!isRequired(username)){
        showError(usernameEl, 'Username cannot be blank.');
    }else
    {
        showSuccess(usernameEl);
        valid = true;
    }
    return valid;
};


const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if(!isRequired(email)){
        showError(emailEl,'Email cannot be blank');
    }
    else{
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

const isRequired = value => value === '' ? false : true;

const showError = (input,message) => {
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

form.addEventListener('submit',function(e){
    e.preventDefault();

    let isUsenameValid = checkUsername(),
        isEmailValid = checkEmail()

    let isFormValid = isUsenameValid && isEmailValid 

    if(isFormValid){

    }
});

const debounce = (fn,delay = 1) => {
    let timeoutId;
    return (...args) => {
        if(timeoutId){
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        },delay);
    };
};

form.addEventListener('input',debounce(function(e){
    switch(e.target.id){
        case 'username':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
    }
}));


const btnForgot = css('.form-login-forgot')
const btnCancel = css('.form-btn-cancel')
const login = css('.login')
const forgot = css('.forgot')

btnForgot.addEventListener('click',(e) => {
    login.classList.add('hidden')
    forgot.classList.remove('hidden')
    e.preventDefault();
})

btnCancel.addEventListener('click',() => {
    login.classList.remove('hidden')
    forgot.classList.add('hidden')
    e.preventDefault();
})


