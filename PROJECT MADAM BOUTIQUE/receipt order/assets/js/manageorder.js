

function OrderList(id, date, name, address, phone, price,status) {
    var itemOderList = {}
    itemOderList.id = id
    itemOderList.date = date
    itemOderList.name = name
    itemOderList.address = address
    itemOderList.phone = phone
    itemOderList.price = price
    itemOderList.status = status
    return itemOderList
}

function getItemOrderList(){
    var listItemShoppingCart = []
    var jsonlistItemShoppingCart = localStorage.getItem('orderList')

    if(jsonlistItemShoppingCart != null){
        listItemShoppingCart = JSON.parse(jsonlistItemShoppingCart)
    }
    return listItemShoppingCart
}


function saveListOrder(orderList){
    var jsonorderList = JSON.stringify(orderList)

    localStorage.setItem('orderList', jsonorderList)
}

