function showListItemShoppingCart(){
    var listItems = getItemShoppingCart()

    var html  = switchListItemShoppingcartToHTML(listItems)

    const cartItem = document.querySelector('.cart-item')
    cartItem.innerHTML = html
}

function getItemShoppingCart(){
    var listItemShoppingCart = []
    var jsonlistItemShoppingCart = localStorage.getItem('listItemShoppingCart')

    if(jsonlistItemShoppingCart != null){
        listItemShoppingCart = JSON.parse(jsonlistItemShoppingCart)
    }
    return listItemShoppingCart
}


function switchListItemShoppingcartToHTML(listItemShoppingCart){
    var htmls = ''
    for(var i=0; i<listItemShoppingCart.length; i++){
        htmls = htmls + switchItemshoppingCartToHTML(listItemShoppingCart[i])
    }
    return htmls
}

function getProductList(){
    var jsonProductList = localStorage.getItem('productFall2022')
    var productList = JSON.parse(jsonProductList)
    return productList
}

function getItemById(id){
    var productItem = {}
    var productList = getProductList()
    for(var i=0; i<productList.length; i++){
        var currentProduct = productList[i]
        if(currentProduct.id == id){
            productItem = currentProduct
        }
    }
    return productItem
}

// let data = [{}];
// let deleteTask = (e) => {
//         e.parentElement.parentElement.remove();
//         data.splice(e.parentElement.parentElement.id,1);
//         localStorage.setItem('listItemShoppingCart',JSON.stringify(data));
//         console.log(data)
//     };

// function saveListItemInLocalStorage(){
//     data = JSON.parse(localStorage.getItem('listItemShoppingCart')) || []
// }


function switchItemshoppingCartToHTML(itemShoppingCart) {
    var product = getItemById(itemShoppingCart.id)
    var priceTotal = itemShoppingCart.quantity * product.price
    var html =`
    <tbody>
    <tr>
        <th class="product-detele">
            <i onClick = 'deleteTask(${itemShoppingCart.id})' class="fa-solid fa-xmark"></i>
        </th>
        <th class="product-img">
            <img src="/product collection/img/tui1.webp" alt="">
        </th>
        <th class="product-name">
            <p>${product.name}</p>
        </th>
        <th class="product-quantity">
            <p>${itemShoppingCart.quantity}</p>
        </th>
        <th class="product-price">
            <span>${product.price} $</span>
        </th>
        <th class="product-total-price">
            <p>${priceTotal}$</p>
        </th>
    </tr>
</tbody>
    `
    return html
}

showListItemShoppingCart()
// saveListItemInLocalStorage()

function saveListItemInLocalStorage(listItemShoppingCart){
    var jsonlistItemShoppingCart = JSON.stringify(listItemShoppingCart)

    localStorage.setItem('listItemShoppingCart', jsonlistItemShoppingCart)
}

function deleteTask(id){
    //lay danh sach gio hang trong localStorage
      var listItemShoppingCart = getItemShoppingCart()
      for(var i=0; i<listItemShoppingCart.length; i++){
        var currentItemShoppingCart = listItemShoppingCart[i]
        if(currentItemShoppingCart.id == id){
            listItemShoppingCart.splice(listItemShoppingCart[i].id,1)
        }
      }
    
      saveListItemInLocalStorage(listItemShoppingCart)
    
    }