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


