var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn-modal");
var span = document.getElementsByClassName("close-modal")[0];
var modalSuccess = document.getElementById("modalSuccess");
var spanSuccess = document.getElementsByClassName("close-modal-success")[0];
let css = (css) => document.querySelector(css);
const emailEl = css('#email'),
  fullNameEl = css('#fullname'),
  deliveryEl = css('#deliveryaddress'),
  phoneEl = css('#phone'),
  cityNameEl = css('#cityname'),
  paymentBtn = css('#payment-btn'),
  noteEl = css('#textnotes'),
  cardNumEl = css('#card-number'),
  cardDateEl = css('#date-exp'),
  cardCsrEl = css('#csr'),
  formCard = css('#form-card'),
  form = css('#form-payment');
var userList = []

// modal method payment
btn.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none"
  }
  // else if(event.target == modalSuccess){
  //   modalSuccess.style.display = "none"
  // }
}

function displayModalSuccess() {
  modalSuccess.style.display = "block";
}

//checkmark

var checkCard = document.getElementById("checkmark-card")
var checkQR = document.getElementById("checkmark-qr")
var displayCard = document.getElementsByClassName("modal-description")[0];
var displayQr = document.getElementsByClassName("qr-img")[0];

checkCard.parentElement.onclick = function () {
  displayCard.style.display = "block";
  displayQr.style.display = "none";
}

checkQR.parentElement.onclick = function () {
  displayCard.style.display = "none";
  displayQr.style.display = "block";
}


//total
var total = document.getElementById("total");
var subtotal = document.getElementById("sub-total");

function getProductList() {
  var productList = []
  var jsonProductList = localStorage.getItem('productFall2022')

  if (jsonProductList != null) {
    productList = JSON.parse(jsonProductList)
  }
  return productList
}

function getItemShoppingCart() {
  var listItemShoppingCart = []
  var jsonlistItemShoppingCart = localStorage.getItem('listItemShoppingCart')

  if (jsonlistItemShoppingCart != null) {
    listItemShoppingCart = JSON.parse(jsonlistItemShoppingCart)
  }
  return listItemShoppingCart
}


function render() {
  const productList = getProductList()
  const shoppingCart = getItemShoppingCart()
  var sum = 0
  for (var i = 0; i < shoppingCart.length; i++) {
    const shoppingID = shoppingCart[i].id
    for (var j = 0; j < productList.length; j++) {
      if (productList[j].id == shoppingID) {
        sum = productList[j].price * shoppingCart[i].quantity + sum
      }
    }
  }
  total.innerText = `${sum}$`
  subtotal.innerHTML = `${sum}$`
}
render()

//object
function UserPayment(email, fullName, deliveryAddress, notes, phone, cityName) {
  this.email = email
  this.fullName = fullName
  this.deliveryAddress = deliveryAddress
  this.notes = notes
  this.phone = phone
  this.cityName = cityName
}

function newObject() {
  var email = emailEl.value
  emailEl.value = ''
  var fullName = fullNameEl.value
  fullNameEl.value = ''
  var deliveryAddress = deliveryEl.value
  deliveryEl.value = ''
  var note = noteEl.value
  noteEl.value = ''
  var phone = phoneEl.value
  phoneEl.value = ''
  var cityName = cityNameEl.value
  cityNameEl.value = ''

  var user = new UserPayment(email, fullName, deliveryAddress, note, phone, cityName)
  userList.push(user)
  var jsonUserList = JSON.stringify(userList)
  localStorage.setItem('user', jsonUserList)
}
//formcheck


const checkDelivery = () => {
  let valid = false;

  const min = 5,
    max = 50;

  const delivery = deliveryEl.value.trim();

  if (!isRequired(delivery)) {
    showError(deliveryEl, 'Delivery cannot be blank.');
  } else if (!isBetween(delivery.length, min, max)) {
    showError(deliveryEl, `Delivery must be beetween ${min} and ${max} characters.`)
  } else {
    showSuccess(deliveryEl);
    valid = true;
  }
  return valid;
};

const checkFullName = () => {
  let valid = false;

  const min = 3,
    max = 12;

  const fullName = fullNameEl.value.trim();

  if (!isRequired(fullName)) {
    showError(fullNameEl, 'Full name cannot be blank.');
  } else if (!isBetween(fullName.length, min, max)) {
    showError(fullNameEl, `Full name must be beetween ${min} and ${max} characters.`)
  } else {
    showSuccess(fullNameEl);
    valid = true;
  }
  return valid;
};

const checkCityName = () => {
  let valid = false;

  const min = 3,
    max = 20;

  const cityName = cityNameEl.value.trim();

  if (!isRequired(cityName)) {
    showError(cityNameEl, 'City name cannot be blank.');
  } else if (!isBetween(cityName.length, min, max)) {
    showError(cityNameEl, `City name must be beetween ${min} and ${max} characters.`)
  } else {
    showSuccess(cityNameEl);
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


const isEmailValid = (email) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
}

const isPhoneValid = (phone) => {
  const re = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
  return re.test(phone);
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

  let isDeliveryValid = checkDelivery(),
    isEmailValid = checkEmail(),
    isFullNameValid = checkFullName(),
    isCityNameValid = checkCityName(),
    isPhoneValid = checkPhone();

  let isFormValid = isDeliveryValid &&
    isEmailValid &&
    isFullNameValid && isCityNameValid
  isPhoneValid

  if (isFormValid) {
    newObject()
    displayModalSuccess()
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
    case 'deliveryaddress':
      checkDelivery();
      break;
    case 'email':
      checkEmail();
      break;
    case 'phone':
      checkPhone();
      break;
    case 'fullname':
      checkFullName();
      break;
    case 'cityname':
      checkCityName();
      break;
  }
}));

//check card
const checkCardNumber = () => {
  let valid = false;
  const cardNum = cardNumEl.value.trim()
  if (!isRequired(cardNum)) {
    showError(cardNumEl, 'Card number cannot be blank');
  } else {
    showSuccess(cardNumEl);
    valid = true;
  }
  return valid;

};

const checkCardDate = () => {
  let valid = false;
  const cardDate = cardDateEl.value.trim()
  if (!isRequired(cardDate)) {
    showError(cardDateEl, 'Expiration Date cannot be blank');
  } else {
    showSuccess(cardDateEl);
    valid = true;
  }
  return valid;

};

const checkCardCsr = () => {
  let valid = false;
  const cardCsr = cardCsrEl.value.trim()
  if (!isRequired(cardCsr)) {
    showError(cardCsrEl, 'Csr cannot be blank');
  } else {
    showSuccess(cardCsrEl);
    valid = true;
  }
  return valid;

};

formCard.addEventListener('submit', function (e) {
  e.preventDefault();

  let isCardNumber = checkCardNumber(),
    isCardDate = checkCardDate(),
    isCardCsr = checkCardCsr();

  let isFormValid = isCardNumber &&
    isCardDate && isCardCsr

  if (isFormValid) {
  }
});

const showErrorCard = (input, message) => {
  const formField = input.parentElement;
  formField.classList.remove('success');
  formField.classList.add('error');
  const error = formField.querySelector('small');
  error.textContent = message;
};

const showSuccessCard = (input) => {
  const formField = input.parentElement;
  formField.classList.remove('error');
  formField.classList.add('success');
  const error = formField.querySelector('small');
  error.textContent = '';
};

formCard.addEventListener('input', debounce(function (e) {
  switch (e.target.id) {
    case 'card-number':
      checkCardNumber();
      break;
    case 'date-exp':
      checkCardDate();
      break;
    case 'csr':
      checkCardCsr();
      break;
  }
}));