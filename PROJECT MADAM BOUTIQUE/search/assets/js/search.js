const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const product = $('.product-item')
const scrollBtn = $('.scroll-btn')
const productShowing = $('.product-sort-content')
const search = $('#search')

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    let basket = getItemShoppingCart();
    let basketTotal = 0
    for (var i = 0; i < basket.length; i++) {
        basketTotal += Number(basket[i].quantity)
    }
    cartIcon.innerHTML = basketTotal
}
calculation();

const app = {
    products: getProductList(),
    render: function (arr) {
        const htmls = arr.map((product, index) => {
            return `
        <div class="col l-3 m-3 c-6">
        <div class="product-item-list">
            <div class="product-item-list_img">
                <a href="/product detail/productDetail.html">
                    <img class="item-img1" src="${product.image1}" alt="">
                    <img class="item-img2 hidden" src="${product.image2}" alt="">
                </a>
                <div class="product-item-list_btn">
                    <button onclick="addShoppingCart(${product.id})"><i class="fa-solid fa-cart-shopping"></i></button>
                    <button><i class="fa-solid fa-heart"></i></button>
                </div>
            </div>
            <div class="product-item-list_name">
                <a href="/product detail/productDetail.html">${product.name}</a>
            </div>
            <div class="product-item-list_price">
                ${product.price}$
            </div>
        </div>
    </div>
            `
        })
        product.innerHTML = htmls.join('')
    },
    scrollFunction: function () {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    },
    topFunction: function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    },
    handleEvent: function () {
        const _this = this
        //scroll btn display
        window.onscroll = () => { _this.scrollFunction() }
        //scroll btn click
        scrollBtn.addEventListener('click', (e) => {
            e.preventDefault();
            _this.topFunction();
        })

        search.oninput = function(e) {
            e.preventDefault();
            if(search.value == ''){
                _this.render([])
                productShowing.innerText = `Showing: 0 Results`
            }else{
                _this.searchInput();
                _this.mouseEvent()
            }
        }
    },
    mouseEvent: function () {
        const productItems = $$('.product-item-list')
        const img1 = $$('.item-img1')
        const img2 = $$('.item-img2')
        productItems.forEach((productItem, i) => productItem.addEventListener('mouseover', (e) => {
            img1[i].classList.add('hidden')
            img2[i].classList.remove('hidden')
            e.preventDefault();
        }))

        productItems.forEach((productItem, i) => productItem.addEventListener('mouseout', (e) => {
            img1[i].classList.remove('hidden')
            img2[i].classList.add('hidden')
            e.preventDefault();
        }))
    },
    filterProductID: function (id) {
        var productList = JSON.parse(localStorage.getItem('productFall2022'))
        for (var i = 0; i < productList.length; i++) {
            var currentProduct = productList[i]
            if (currentProduct == id) {
                return currentProduct
            }
        }
    },
    searchInput: function () {
        let valueSearchInput = search.value
        let valueSearch = this.products.filter(product =>{
            return product.name.toUpperCase().includes(valueSearchInput.toUpperCase())
        })
        this.render(valueSearch)
        productShowing.innerText = `Showing: ${valueSearch.length} Results`
    },
    start: function () {
        this.handleEvent()
    }

}
app.start()


function addShoppingCart(id) {
    //lay danh sach gio hang trong localStorage
    var listItemShoppingCart = getItemShoppingCart()
    //them item vao danh sach gio hang
    var islistItemShoppingCart = false
    for (var i = 0; i < listItemShoppingCart.length; i++) {
        var currentItemShoppingCart = listItemShoppingCart[i]
        if (currentItemShoppingCart.id == id) {
            listItemShoppingCart[i].quantity++
            islistItemShoppingCart = true
        }
    }
    //neu chua ton tai thi tao ra doi tuong moi
    if (islistItemShoppingCart == false) {
        var itemShoppingCart = ShoppingCart(id, 1)
        listItemShoppingCart.push(itemShoppingCart)
    }
    saveListItemInLocalStorage(listItemShoppingCart)
    calculation()
    toast()
}

//toast
function toast() {
    const main = $('#toast')
    if (main) {
        const toast = document.createElement('div')

        const autoRemoved = setTimeout(function () {
            main.removeChild(toast)
        }, 5000)

        toast.onclick = function (e) {
            if (e.target.closest('.toast_close')) {
                main.removeChild(toast)
                clearTimeout(autoRemoved)
            }
        }

        toast.classList.add('toast')
        toast.style.animation = `slideInLeft ease 0.3s, fadeOut linear 1s 4s forwards;`
        toast.innerHTML = `
        <div class="toast_icon">
          <i class="fa-solid fa-check"></i>
        </div>
        <div class="toast_body">
          <div class="toast_title">Add shopping cart successfully</div>
        </div>
        <div class="toast_close">
          <i class="fa-solid fa-xmark"></i>
        </div>
      `
        main.appendChild(toast)
    }
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




