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
console.log(receiptCustomer)
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
