function showListItemShoppingCart() {
    var listItems = getItemShoppingCart()

    var html = switchListItemShoppingcartToHTML(listItems)

    const cartItem = document.querySelector('.cart-item')
    cartItem.innerHTML = html
    subtotal()
}

function getItemShoppingCart() {
    var listItemShoppingCart = []
    var jsonlistItemShoppingCart = localStorage.getItem('listItemShoppingCart')

    if (jsonlistItemShoppingCart != null) {
        listItemShoppingCart = JSON.parse(jsonlistItemShoppingCart)
    }
    return listItemShoppingCart
}


function switchListItemShoppingcartToHTML(listItemShoppingCart) {
    var htmls = ''
    for (var i = 0; i < listItemShoppingCart.length; i++) {
        htmls = htmls + switchItemshoppingCartToHTML(listItemShoppingCart[i])
    }
    return htmls
}

function getProductList() {
    var jsonProductList = localStorage.getItem('productFall2022')
    var productList = JSON.parse(jsonProductList)
    return productList
}

function getItemById(id) {
    var productItem = {}
    var productList = getProductList()
    for (var i = 0; i < productList.length; i++) {
        var currentProduct = productList[i]
        if (currentProduct.id == id) {
            productItem = currentProduct
        }
    }
    return productItem
}



function switchItemshoppingCartToHTML(itemShoppingCart) {
    var product = getItemById(itemShoppingCart.id)
    var priceTotal = itemShoppingCart.quantity * product.price
    var html = `
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
            <input type="number" id="quantity" value="${itemShoppingCart.quantity}"min="1">
        </th>
        <th class="product-price">
            <span>${product.price} $</span>
        </th>
        <th class="product-total-price">
            <p class="price-total">${priceTotal}</p>
            <span>$</span>
        </th>
    </tr>
</tbody>
    `
    return html
}

showListItemShoppingCart()

function saveListItemInLocalStorage(listItemShoppingCart) {
    var jsonlistItemShoppingCart = JSON.stringify(listItemShoppingCart)

    localStorage.setItem('listItemShoppingCart', jsonlistItemShoppingCart)
}

function deleteTask(id) {
    //lay danh sach gio hang trong localStorage
    var listItemShoppingCart = getItemShoppingCart()
    for (var i = 0; i < listItemShoppingCart.length; i++) {
        var currentItemShoppingCart = listItemShoppingCart[i]
        if (currentItemShoppingCart.id == id) {
            var index = listItemShoppingCart.indexOf(listItemShoppingCart[i])
            listItemShoppingCart.splice(index, 1)
        }
    }

    saveListItemInLocalStorage(listItemShoppingCart)

    location.reload();
}

function subtotal() {
    var total = document.querySelector('.sub-total')
    var subtotal = 0
    var listPrice = document.querySelectorAll('.price-total')
    for (var i = 0; i < listPrice.length; i++) {
        var listPriceTotal = listPrice[i]
        var listPriceTotalvalue = listPriceTotal.textContent
        subtotal += Number(listPriceTotalvalue)
    }
    total.innerHTML = `${subtotal} $`
}

const checkBox = document.getElementById('checkbox')
const checkBtn = document.querySelector('.cart-footer-box__btn')

checkBox.addEventListener('change', function () {
    if (this.checked) {
        checkBtn.style.pointerEvents = 'auto'
        document.getElementById("checkbox-content").innerText = ''
    } else {
        document.getElementById("checkbox-content").innerText = "Please agree to the Terms of Service and Privacy Policy"
        checkBtn.style.pointerEvents = 'none'
    }
});


const quantity = document.querySelector('#quantity')
function getQuantity() {
    var listItemShoppingCart = getItemShoppingCart()
    for (var i = 0; i < listItemShoppingCart.length; i++) {
        listItemShoppingCart[i].quantity = quantity.value
    }
    saveListItemInLocalStorage(listItemShoppingCart)

}

quantity.oninput = function(){
    getQuantity()
}

const update = document.querySelector('#update')

update.onclick = function(){
    location.reload();
}





