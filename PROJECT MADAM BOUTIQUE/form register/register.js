let css = (css) => document.querySelector(css);

const usernameEl = css('#username'),
    emailEl = css('#email'),
    passwordEl = css('#password'),
    dateEl = css('#date'),
    form = css('#form-register'),
    phoneEl = css('#phone');

// modal
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var spanC = document.getElementsByClassName("cancel")[0];

span.onclick = function () {
    modal.style.display = "none";
}
spanC.onclick = function () {
    modal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//object
var userRegisterList = []
function UserRegister(email,userName,password,date,phone){
    this.email = email
    this.userName = userName
    this.password = password
    this.date = date
    this.phone = phone
}
function newObject(){
    var email =  emailEl.value
    emailEl.value = ''
    var userName = usernameEl.value
    usernameEl.value = ''
    var password = passwordEl.value
    passwordEl.value = ''
    var date = dateEl.value
    dateEl.value = ''
    var phone = phoneEl.value
    phoneEl.value = ''
  
    var userRegister = new UserRegister(email,userName,password,date,phone)
    userRegisterList .push(userRegister)
    var jsonuserRegisterList  = JSON.stringify(userRegisterList )
    localStorage.setItem('userRegister', jsonuserRegisterList)
  }

// check
const checkUsername = () => {
    let valid = false;

    const min = 3,
        max = 25;

    const username = usernameEl.value.trim();

    if (!isRequired(username)) {
        showError(usernameEl, 'Username cannot be blank.');
    } else if (!isBetween(username.length, min, max)) {
        showError(usernameEl, `Username must be beetween ${min} and ${max} characters.`)
    } else {
        showSuccess(usernameEl);
        valid = true;
    }
    return valid;
};

const checkDate = () => {
    let valid = false;


    const date = dateEl.value.trim();

    if (!isRequired(date)) {
        showError(dateEl, 'Date cannot be blank.');
    }else {
        showSuccess(dateEl);
        valid = true;
    }
    return valid;
};

const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid');
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

const checkPhone = () => {
    let valid = false;
    const phone = phoneEl.value.trim()
    if (!isRequired(phone)) {
        showError(phoneEl, 'Phone cannot be blank');
    } else if (!isPhoneValid(phone)) {
        showError(phoneEl, 'Phone is not valid');
    } else {
        showSuccess(phoneEl);
        valid = true;
    }
    return valid;

};

const checkPassword = () => {
    let valid = false;
    const password = passwordEl.value.trim();

    if (!isRequired(password)) {
        showError(passwordEl, 'Password cannot be blank.');
    } else if (!isPasswordSecure(password)) {
        showError(passwordEl, 'Password must has at least 8 characters that include at least 1 lowercase characters, 1 uppercase characters, 1 number, and 1 special characters in (!@#$%&*)');
    } else {
        showSuccess(passwordEl);
        valid = true;
    }
    return valid;
};


const isEmailValid = (email) => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
}

const isPhoneValid = (phone) => {
    const re = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    return re.test(phone);
}


const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
}

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;

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
    formField.classList.add('success');
    const error = formField.querySelector('small');
    error.textContent = '';
};

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let isUsenameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isDateValid = checkDate(),
        isPhoneValid = checkPhone();

    let isFormValid = isUsenameValid &&
        isEmailValid && isDateValid &&
        isPasswordValid &&
        isPhoneValid

    if (isFormValid) {
        modal.style.display = "block";
        newObject()
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
        case 'username':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'phone':
            checkPhone();
            break;
        case 'date':
            checkDate();
            break;
    }
}));

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