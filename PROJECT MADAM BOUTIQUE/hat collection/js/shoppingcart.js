var keyLocalStorageItemShoppingCart = 'listItemShoppingCart';
// tao doi tuong item gio hang
function ShoppingCart(id,quantity){
    var itemShoppingCart = {}
    itemShoppingCart.id = id
    itemShoppingCart.quantity = quantity
    return itemShoppingCart
}

//lay ra item
function getItemShoppingCart(){
    var listItemShoppingCart = []
    var jsonlistItemShoppingCart = localStorage.getItem(keyLocalStorageItemShoppingCart)

    if(jsonlistItemShoppingCart != null){
        listItemShoppingCart = JSON.parse(jsonlistItemShoppingCart)
    }
    return listItemShoppingCart
}

//luu vao localStorage
function saveListItemInLocalStorage(listItemShoppingCart){
    var jsonlistItemShoppingCart = JSON.stringify(listItemShoppingCart)

    localStorage.setItem(keyLocalStorageItemShoppingCart, jsonlistItemShoppingCart)
}

function getProductList() {
    var jsonProductList = localStorage.getItem('productFall2022')
    var productList = JSON.parse(jsonProductList)
    return productList
}