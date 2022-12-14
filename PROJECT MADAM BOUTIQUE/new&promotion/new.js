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

//login
//get isLogin
function getIsLogin() {
    var isLoginAccount = false
    var jsonisLogin = localStorage.getItem('isLogin')

    if (jsonisLogin != null) {
        isLoginAccount = JSON.parse(jsonisLogin)
    }
    return isLoginAccount
}
//saveIsLoginLocalStorage
function saveIsLoginLocalStorage(isLogin) {
    var jsonisLogin = JSON.stringify(isLogin)

    localStorage.setItem('isLogin', jsonisLogin)
}

function loginAccount() {
    const renderLogin = document.querySelector('.header-user-subnav')
    const checkLogin = getIsLogin()
    if (checkLogin) {
        renderLogin.innerHTML = `
        <div class="header-user-account">
            <a href="#" >My ACCOUNT</a>
        </div>
        <div class="header-user-regis">
            <span id="logout" onclick="logout()">LOG OUT</span>
        </div>
        `
    }else{
        renderLogin.innerHTML = `
        <div class="header-user-login">
            <a href="/form login/login.html" >LOGIN</a>
        </div>
        <div class="header-user-regis">
            <span>NEW USER? <a href="/form register/register.html">REGISTER NOW</a></span>
        </div>
        `
    }
}
loginAccount()

function logout(){
    isLogin = false;
    saveIsLoginLocalStorage(isLogin)
    location.reload();
}


let css = (css) => document.querySelector(css);
const passwordEl = css('#password'),
    emailEl = css('#email'),
    form = css('#login');


//check login
function checklogin() {
    const email = emailEl.value
    const password = passwordEl.value
    const listUser = getUserRegister()
    for (i = 0; i < listUser.length; i++) {
        if (listUser[i].email === email && listUser[i].password === password) {
            css('#login-alert').innerText = ''
            window.location = '/index.html'
            var checkIsLogin = true
            saveIsLoginLocalStorage(checkIsLogin)

        } else {
            css('#login-alert').innerText = 'Wrong password or email'
        }
    }

}


//form login
const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank');
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
        showError(passwordEl, 'Phone cannot be blank.');
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
