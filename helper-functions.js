import { fruits } from './data.js';
export function findById(someArray, someId) {
    for (let i = 0; i < someArray.length; i++) {
        const product = someArray[i];
        if (product.id === someId) {
            return product;
        }
    }
}

export function calcTotal(cartArray) {
    let accumulator = 0;
    for (let i = 0; i < cartArray.length; i++) {
        const item = cartArray[i];
        const actualItem = findById(fruits, item.id);
        const subTotal = actualItem.price * item.quantity;
        accumulator = accumulator + subTotal;
    }
    return accumulator;
}


