const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const orderItem = $('.receipt-product-item')
const sizeS = $('#sizeS')
const sizeM = $('#sizeM')
const sizeL = $('#sizeL')
const sizeXL = $('#sizeXL')
const sizeA = $('#sizeA')


//get orderlist
function getItemOrderList() {
    var listItemShoppingCart = []
    var jsonlistItemShoppingCart = localStorage.getItem('orderList')

    if (jsonlistItemShoppingCart != null) {
        listItemShoppingCart = JSON.parse(jsonlistItemShoppingCart)
    }
    return listItemShoppingCart
}
var orderList = getItemOrderList()

//save orderlist
function saveListOrder(orderList) {
    var jsonorderList = JSON.stringify(orderList)

    localStorage.setItem('orderList', jsonorderList)
}


//render orderlist
function render(arr) {
    const htmls = arr.map(value => {
        return `
        <tr>
        <th class="order-id">
            ${value.id}
        </th>
        <th class="order-date">
            ${value.date}
        </th>
        <th class="order-cus">
            <div class="cus-name">Name: ${value.name}</div>
            <div class="cus-phone">Phone: ${value.phone}</div>
            <div class="cus-address">Address: ${value.address}</div>
        </th>
        <th class="order-notext">
        </th>
        <th class="order-price">
            ${value.price}
        </th>
        <th class="order-status">
            ${value.status}
        </th>
        <th class="order-change">
            <div class="change">
                <div class="change-content">
                    Status change
                    <i class="fa-sharp fa-solid fa-caret-down"></i>
                    <ul class="change-menu">
                        <li id="pending" onclick="changePending(${value.id})">Pending</li>
                        <li id="delivering" onclick="changeDelivering(${value.id})">Delivering</li>
                        <li id="success" onclick="changeSuccess(${value.id})">Success</li>
                        <li id="cancel" onclick="changeCancel(${value.id})">Cancel</li>
                    </ul>
                </div>
            </div>
        </th>
    </tr>
        `
    })

    orderItem.innerHTML = htmls.join('')
}
render(orderList)

//filter
sizeS.addEventListener('click', (e) => {
    e.preventDefault();
    let filterSizeS = orderList.filter(value => {
        return value.status === 'Pending'
    })
    render(filterSizeS)
})

sizeM.addEventListener('click', (e) => {
    e.preventDefault();
    let filterSizeM = orderList.filter(value => {
        return value.status === 'Delivering'
    })
    render(filterSizeM)
})

sizeL.addEventListener('click', (e) => {
    e.preventDefault();
    let filterSizeL = orderList.filter(value => {
        return value.status === 'Success'
    })
    render(filterSizeL)
})

sizeXL.addEventListener('click', (e) => {
    e.preventDefault();
    let filterSizeXL = orderList.filter(value => {
        return value.status === 'Cancel'
    })
    render(filterSizeXL)
})

sizeA.addEventListener('click', (e) => {
    e.preventDefault();
    render(orderList)
})

//change status
function changePending(id){
    for(var i = 0; i < orderList.length; i++){
        if(orderList[i].id === id){
            orderList[i].status = 'Pending'
        }
    }
    saveListOrder(orderList)
    location.reload();
}

function changeDelivering(id){
    for(var i = 0; i < orderList.length; i++){
        if(orderList[i].id === id){
            orderList[i].status = 'Delivering'
        }
    }
    saveListOrder(orderList)
    location.reload();
}

function changeSuccess(id){
    for(var i = 0; i < orderList.length; i++){
        if(orderList[i].id === id){
            orderList[i].status = 'Success'
        }
    }
    saveListOrder(orderList)
    location.reload();
}

function changeCancel(id){
    for(var i = 0; i < orderList.length; i++){
        if(orderList[i].id === id){
            orderList[i].status = 'Cancel'
        }
    }
    saveListOrder(orderList)
    location.reload();
}