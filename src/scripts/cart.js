export function processCart(rawCart) {
    console.log('bing bong');

    var cart = {};
    cart.lineItems = [];

    rawCart.AvailableItems.forEach((item) => {
        cart.lineItems.push(new LineItem(
            item.Name,
            item.SalePrice,
             ))
    })

    console.log(cart);

    return cart;
}



export class LineItem {
    constructor(name, price, nutInfo) {
        this.name = name;
        this.price = price;
    }
}

export class NutritionalInformation {

}