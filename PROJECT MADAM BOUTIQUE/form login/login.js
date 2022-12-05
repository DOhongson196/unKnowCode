let css=(css) => document.querySelector(css);

const passwordEl = css('#password'),
emailEl = css('#email'),
form = css('#login');

//get user
function getUserRegister() {
    var listUserRegister = []
    var jsonlistUserRegister = localStorage.getItem('userRegister')

    if (jsonlistUserRegister != null) {
        listUserRegister = JSON.parse(jsonlistUserRegister)
    }
    return listUserRegister
}

//link


//check login
function checklogin(){
    const email =  emailEl.value
    const password = passwordEl.value
    const listUser = getUserRegister()
    for(i=0; i<listUser.length; i++){
        if(listUser[i].email === email && listUser[i].password === password){
            css('#login-alert').innerText = ''
            window.location = '/index.html'
            
        }else{
            css('#login-alert').innerText = 'Wrong password or email'
        }
    }
    
}


//form login
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
const checkPass = () => {
    let valid = false;

    const password = passwordEl.value.trim();

    if(!isRequired(password)){
        showError(passwordEl, 'Password cannot be blank.');
    }else
    {
        showSuccess(passwordEl);
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

    let isPassValid = checkPass(),
        isEmailValid = checkEmail()

    let isFormValid = isPassValid && isEmailValid 

    if(isFormValid){
        checklogin()
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
        case 'password':
            checkPass();
            break;
        case 'email':
            checkEmail();
            break;
    }
}));







// form reget
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

var keyLocalStorageItemShoppingCart = 'listItemShoppingCart';

function getItemShoppingCart(){
    var listItemShoppingCart = []
    var jsonlistItemShoppingCart = localStorage.getItem(keyLocalStorageItemShoppingCart)

    if(jsonlistItemShoppingCart != null){
        listItemShoppingCart = JSON.parse(jsonlistItemShoppingCart)
    }
    return listItemShoppingCart
}


let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    let basket = getItemShoppingCart();
    let basketTotal = 0
    for(var i = 0; i < basket.length; i++){
        basketTotal += Number(basket[i].quantity)
    }
    if(basketTotal <= 0){
        cartIcon.style.display = 'none';
    }else{
        cartIcon.innerHTML = basketTotal
    }
}
  
calculation();

