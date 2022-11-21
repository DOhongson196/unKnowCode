const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const product = $('.product-item')
const scrollBtn = $('.scroll-btn')

const PRODUCTFALL2022_STORAGE_KEY = 'product-fall2022'


const app = {
  products: [
    {
      id:1,
      name: 'MODIZ LONG WALLETS',
      image1: './img/vifall2.webp',
      image2: './img/vi fall1.webp',
      price: '1000$'
    },
    {
      id:2,
      name: 'FLORENCE HANDBAGS',
      image1: './img/tui2.webp',
      image2: './img/tui1.webp',
      price: '1300$'
    },
    {
      id:3,
      name: 'DIMENSION S HANDBAGS',
      image1: './img/tuixanh1.webp',
      image2: './img/tuixanh2.webp',
      price: '1500$'
    },
    {
      id:4,
      name: 'DIMENSION S HANDBAGS',
      image1: './img/tuixanh1.webp',
      image2: './img/tuixanh2.webp',
      price: '1500$'
    },
  ],
  render: function(){
    const htmls = this.products.map((product,index) => {
      return `
      <div class="col l-4 m-4 c-6">
      <div class="product-item-list">
          <div class="product-item-list_img">
          <a href="">
                  <img class="item-img1" src="${product.image1}"  alt="">
                  <img class="item-img2 hidden" src="${product.image2}"  alt="">
                  </a>           
              <div class="product-item-list_btn">
                  <button onclick="addShoppingCart(\'${product.id}\')"><i class="fa-solid fa-cart-shopping"></i></button>
                  <button ><i class="fa-solid fa-heart"></i></button>
                  </div>
                  </div>
                  <div class="product-item-list_name">
              <a href="">${product.name}</a>
          </div>
          <div class="product-item-list_price">
          ${product.price}
          </div>
          </div>
          </div>
          `
        })
        product.innerHTML = htmls.join('')
      },
  scrollFunction: function(){
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  },
  topFunction: function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  },
  handleEvent: function(){
    const _this = this
    //scroll btn display
    window.onscroll = () => {_this.scrollFunction()}
    //scroll btn click
    scrollBtn.addEventListener('click',(e) =>{
      e.preventDefault();
      _this.topFunction();
    })
  },
  mouseEvent: function(){
    const productItems = $$('.product-item-list')
    const img1 = $$('.item-img1')
    const img2 = $$('.item-img2')
    productItems.forEach((productItem,i) => productItem.addEventListener('mouseover',(e) => {
      img1[i].classList.add('hidden')
      img2[i].classList.remove('hidden')
      e.preventDefault();
  }))

    productItems.forEach((productItem,i) => productItem.addEventListener('mouseout',(e) => {
      img1[i].classList.remove('hidden')
      img2[i].classList.add('hidden')
    e.preventDefault();
  }))
  },
  filterProductID: function(id){
    var productList = JSON.parse(localStorage.getItem('productFall2022'))
    for(var i = 0; i < productList.length; i++){
      var currentProduct = productList[i]
      if(currentProduct == id){
        return currentProduct
      }
    }
  },
  saveLocalstorage: function(){
    localStorage.setItem('productFall2022', JSON.stringify(this.products))
  },
  start: function(){
    this.saveLocalstorage()

    this.render()
    
    this.handleEvent()

    this.mouseEvent()

  }
  
}
app.start()


function addShoppingCart(id){
//lay danh sach gio hang trong localStorage
  var listItemShoppingCart = getItemShoppingCart()
//them item vao danh sach gio hang
  var islistItemShoppingCart = false
  for(var i=0; i<listItemShoppingCart.length; i++){
    var currentItemShoppingCart = listItemShoppingCart[i]
    if(currentItemShoppingCart.id == id){
      listItemShoppingCart[i].quantity++
      islistItemShoppingCart = true
    }
  }
  //neu chua ton tai thi tao ra doi tuong moi
  if(islistItemShoppingCart == false){
    var itemShoppingCart = ShoppingCart(id,1)
    listItemShoppingCart.push(itemShoppingCart)
  }

  saveListItemInLocalStorage(listItemShoppingCart)

  toast()
}

//toast
function toast(){
  const main = $('#toast')
  if(main){
    const toast = document.createElement('div')

    const autoRemoved = setTimeout(function(){
      main.removeChild(toast)
    },5000)

    toast.onclick = function(e){
        if(e.target.closest('.toast_close')){
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





