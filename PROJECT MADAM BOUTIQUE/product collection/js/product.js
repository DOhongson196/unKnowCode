const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const product = $('.product-item')
const scrollBtn = $('.scroll-btn')
const priceD = $('#priceD')
const priceL = $('#priceL')
const priceH = $('#priceH')
const productShowing = $('.product-sort-content')
const sizeS = $('#sizeS')
const sizeM = $('#sizeM')
const sizeL = $('#sizeL')
const sizeA = $('#sizeA')

const PRODUCTFALL2022_STORAGE_KEY = 'product-fall2022'


const app = {
  products: [
    {
      id: 1,
      name: 'REVERSIBLE DAMIER AZUR COAT',
      image1: 'https://iili.io/HnMvrDN.webp',
      image2: 'https://iili.io/HnMv6xI.webp',
      price: 2000,
      size: 'S'
    },
    {
      id: 2,
      name: 'LACE INSERT OFFICER BLOUSE',
      image1: 'https://iili.io/HnMvjoP.webp',
      image2: 'https://iili.io/HnMvWNV.webp',
      price: 4300,
      size: 'S'
    },
    {
      id: 3,
      name: 'ZIP-UP WOOL-SILK CADY DRESS',
      image1: 'https://iili.io/HnMvwV1.webp',
      image2: 'https://iili.io/HnMvXDB.webp',
      price: 3500,
      size: 'M'
    },
    {
      id: 4,
      name: 'SHEER SILK LINGERIE DRESS',
      image1: 'https://iili.io/HnMvDJf.webp',
      image2: 'https://iili.io/HnMvQls.webp',
      price: 6500,
      size: 'L'
    },
    {
      id: 5,
      name: 'FRILL BLOUSE',
      image1: 'https://iili.io/HnMvZUG.webp',
      image2: 'https://iili.io/HnMvLfn.webp',
      price: 4200,
      size: 'S'
    },
    {
      id: 6,
      name: 'ASYMMET SINGLE-BREASTED BLAZER',
      image1: 'https://iili.io/HnMvkla.webp',
      image2: 'https://iili.io/HnMveKg.webp',
      price: 5300,
      size: 'M'
    },
    {
      id: 7,
      name: 'SIGNATURE SHORT DOUBLE FACE',
      image1: 'https://iili.io/HnMvvUJ.webp',
      image2: 'https://iili.io/HnMvSHv.webp',
      price: 2900,
      size: 'L'
    },
    {
      id: 8,
      name: 'METALLIC WASH CROP TOP',
      image1: 'https://iili.io/HnMvURR.webp',
      image2: 'https://iili.io/HnMvgNp.webp',
      price: 3100,
      size: 'M'
    },
    {
      id: 9,
      name: 'LONG SLEEVED FITTED SHIRT',
      image1: 'https://iili.io/HnMvPVt.webp',
      image2: 'https://iili.io/HnMviiX.webp',
      price: 2700,
      size: 'S'
    },
    {
      id: 10,
      name: 'LVACATION CAP',
      image1: 'https://iili.io/Hn4mWP9.webp',
      image2: 'https://iili.io/Hn4mVM7.webp',
      price: 1200,
      size: 'S'
    },
    {
      id: 11,
      name: 'SHEARLING CAP',
      image1: 'https://iili.io/Hn4munI.webp',
      image2: 'https://iili.io/Hn4mIZN.webp',
      price: 700,
      size: 'S'
    },
    {
      id: 12,
      name: '5 FLOWERS CAP',
      image1: 'https://iili.io/Hn4mAGt.webp',
      image2: 'https://iili.io/Hn4mzjp.webp',
      price: 1000,
      size: 'S'
    },
    {
      id: 13,
      name: 'LV GET READY CAP',
      image1: 'https://iili.io/Hn4mYas.jpg',
      image2: 'https://iili.io/Hn4m7Fn.webp',
      price: 2000,
      size: 'S'
    },
    {
      id: 14,
      name: 'LV NO WAY BEANIE',
      image1: 'https://iili.io/Hn4ma8G.webp',
      image2: 'https://iili.io/Hn4ml9f.webp',
      price: 900,
      size: 'L'
    },
    {
      id: 15,
      name: 'PRECIOUS RABBIT HAT',
      image1: 'https://iili.io/Hn4m0u4.webp',
      image2: 'https://iili.io/Hn4m1wl.webp',
      price: 700,
      size: 'M'
    },
    {
      id: 16,
      name: 'LV JUMMY BEANIE',
      image1: 'https://iili.io/Hn4mMnS.jpg',
      image2: 'https://iili.io/Hn4mEt2.webp',
      price: 800,
      size: 'L'
    },
    {
      id: 17,
      name: 'LV SWEET BUCKET HAT',
      image1: 'https://iili.io/Hn4mjcu.webp',
      image2: 'https://iili.io/Hn4mhFe.webp',
      price: 900,
      size: 'M'
    },
    {
      id: 18,
      name: 'LV DAYTONA BUCKET HAT',
      image1: 'https://iili.io/Hn4mO9j.webp',
      image2: 'https://iili.io/Hn4mw8b.webp',
      price: 1200,
      size: 'M'
    },
  ],
  render: function (arr) {
    const htmls = arr.map((product, index) => {
      if (product.id < 10) {
        return `
        <div class="col l-4 m-4 c-6">
        <div class="product-item-list">
            <div class="product-item-list_img">
            <a href="/product detail/productDetail.html">
                    <img class="item-img1" src="${product.image1}" alt="">
                    <img class="item-img2 hidden" src="${product.image2}"  alt="">
                    </a>           
                <div class="product-item-list_btn">
                    <button onclick="addShoppingCart(${product.id})"><i class="fa-solid fa-cart-shopping"></i></button>
                    <button ><i class="fa-solid fa-heart"></i></button>
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
      }
    })
    product.innerHTML = htmls.join('')
    // productShowing.innerText = `Showing: ${this.products.length} Results`
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
    //sort by price low to high
    priceL.addEventListener('click', (e) => {
      e.preventDefault();
      this.products.sort((a, b) => {
        return (a.price - b.price)
      })
      this.render(this.products)
      this.mouseEvent()
      productShowing.innerText = `Showing: 9 Results`
    })
    //sort by price high to low
    priceH.addEventListener('click', (e) => {
      e.preventDefault();
      this.products.sort((a, b) => {
        return (b.price - a.price)
      })
      this.render(this.products)
      this.mouseEvent()
      productShowing.innerText = `Showing: 9 Results`
    })
    //sort by price default
    priceD.addEventListener('click', (e) => {
      e.preventDefault();
      this.products.sort((a, b) => {
        return (a.id - b.id)
      })
      this.render(this.products)
      this.mouseEvent()
      productShowing.innerText = `Showing: 9 Results`
    })
    //filter size S
    sizeS.addEventListener('click', (e) => {
      e.preventDefault();
      let filterSizeS = this.products.filter(value => {
        return value.size === 'S'
      })
      this.render(filterSizeS)
      productShowing.innerText = `Showing: 4 Results`
      this.mouseEvent()
    })
    //filter size M
    sizeM.addEventListener('click', (e) => {
      e.preventDefault();
      let filterSizeM = this.products.filter(value => {
        return value.size === 'M'
      })
      this.render(filterSizeM)
      this.mouseEvent()
      productShowing.innerText = `Showing: 3 Results`
    })
    //filter size L
    sizeL.addEventListener('click', (e) => {
      e.preventDefault();
      let filterSizeL = this.products.filter(value => {
        return value.size === 'L'
      })
      this.render(filterSizeL)
      this.mouseEvent()
      productShowing.innerText = `Showing: 2 Results`
    })
    //filter size all
    sizeA.addEventListener('click', (e) => {
      e.preventDefault();
      this.render(this.products)
      this.mouseEvent()
      productShowing.innerText = `Showing: 9 Results`
    })

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
  saveLocalstorage: function () {
    localStorage.setItem('productFall2022', JSON.stringify(this.products))
  },
  start: function () {
    this.saveLocalstorage()

    this.render(this.products)

    this.handleEvent()

    this.mouseEvent()

    productShowing.innerText = `Showing: 9 Results`
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






