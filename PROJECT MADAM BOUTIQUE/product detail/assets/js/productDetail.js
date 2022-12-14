const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const scrollBtn = $('.scroll-btn')
const sizeSelect = $('#size-select')
const sizeS = $('#sizeS')
const sizeM = $('#sizeM')
const sizeL = $('#sizeL')

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    let basket = getItemShoppingCart();
    let basketTotal = 0
    for(var i = 0; i < basket.length; i++){
        basketTotal += Number(basket[i].quantity)
    }
    cartIcon.innerHTML = basketTotal

}
  
calculation();

//scroll button
function  scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}

function  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

scrollBtn.addEventListener('click', (e) => {
    e.preventDefault();
    topFunction();
})

window.onscroll = () => { scrollFunction() }
scrollFunction()

//select size
sizeS.addEventListener('click', (e) => {
    e.preventDefault();
    sizeSelect.innerText = 'Size S'
})
sizeM.addEventListener('click', (e) => {
    e.preventDefault();
    sizeSelect.innerText = 'Size M'
})
sizeL.addEventListener('click', (e) => {
    e.preventDefault();
    sizeSelect.innerText = 'Size L'
})

function addShoppingCart() {
    //lay danh sach gio hang trong localStorage
    var listItemShoppingCart = getItemShoppingCart()
    //them item vao danh sach gio hang
    var islistItemShoppingCart = false
    for (var i = 0; i < listItemShoppingCart.length; i++) {
        var currentItemShoppingCart = listItemShoppingCart[i]
        if (currentItemShoppingCart.id == 1) {
            listItemShoppingCart[i].quantity++
            islistItemShoppingCart = true
        }
    }
    //neu chua ton tai thi tao ra doi tuong moi
    if (islistItemShoppingCart == false) {
        var itemShoppingCart = ShoppingCart(1, 1)
        listItemShoppingCart.push(itemShoppingCart)
    }
    saveListItemInLocalStorage(listItemShoppingCart)
    calculation()
    success()
}

function success(){
    $('#succesfully').innerText = 'Add shopping cart successfully!'
    setTimeout(function () {
        $('#succesfully').innerText = ''
    }, 5000)
}

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




