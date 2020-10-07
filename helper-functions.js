import { fruits } from './data.js';

export const CART = 'CART';

export function findById(someArray, someId) {
    for (let i = 0; i < someArray.length; i++) {
        const product = someArray[i];
        if (product.id === someId) {
            return product;
        }
    }
}

export function calcTotal(cartArray, fruits) {
    let accumulator = 0;
    for (let i = 0; i < cartArray.length; i++) {
        const item = cartArray[i];
        const actualItem = findById(fruits, item.id);
        const subTotal = actualItem.price * item.quantity;
        accumulator = accumulator + subTotal;
    }
    return accumulator;
}

export function getFromLocalStorage(key) {
    const item = localStorage.getItem(key);
    return JSON.parse(item);
    
}

export function setInLocalStorage(key, value) {
    const stringyItem = JSON.stringify(value);
    localStorage.setItem(key, stringyItem);
    return value;
}

// function calcLineItem() {
//     const subTotal = actualItem.price * item.quantity;
// }


