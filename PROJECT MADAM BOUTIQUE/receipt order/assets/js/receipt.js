const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
// get date
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;


// render user
const receiptCustomer = $('.receipt-customer')
function getUserList() {
    const jsonUsertList = localStorage.getItem('user')
    const productList = JSON.parse(jsonUsertList)
    return productList
}

function renderUserList() {
    const userList = getUserList()
    const lastUserList = userList[userList.length - 1]
    const html = `
        <div class="receipt-customer-heading">Customer information</div>
        <div class="receipt-customer-name">Customer name: ${lastUserList.fullName}</div>
        <div class="receipt-customer-phone">Phone number: ${lastUserList.phone}</div>
        <div class="receipt-customer-email">Email: ${lastUserList.email}</div>
        <div class="receipt-customer-address">Address: ${lastUserList.deliveryAddress} (${lastUserList.cityName})</div>
        <div class="receipt-customer-date">Date order: ${today}</div>
    `
    receiptCustomer.innerHTML = html
}

renderUserList()

//render product list
function showListItemShoppingCart() {
    var listItems = getItemShoppingCart()

    var html = switchListItemShoppingcartToHTML(listItems)

    const cartItem = document.querySelector('.receipt-product-item')
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
    <tr>
        <th class="product-name">
            <p>${product.name}</p>
        </th>
        <th class="no-text">

        </th>
        <th class="product-quantity">
            ${itemShoppingCart.quantity}
        </th>
        <th class="product-price">
            <span>${product.price}$</span>
        </th>
        <th class="product-total-price">
            <p class="product-total">${priceTotal}</p>
            <span>$</span>
        </th>
    </tr>
    `
    return html
}

function subtotal() {
    var total = document.querySelector('.receipt-subtotal')
    var subtotal = 0
    var listPrice = document.querySelectorAll('.product-total')
    for (var i = 0; i < listPrice.length; i++) {
        var listPriceTotal = listPrice[i]
        var listPriceTotalvalue = listPriceTotal.textContent
        subtotal += Number(listPriceTotalvalue)
    }
    console.log(listPriceTotalvalue )
    total.innerHTML = `Order total: ${subtotal}$`
}

showListItemShoppingCart()