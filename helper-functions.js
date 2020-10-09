import { fruits as hardCodedFruits } from './data.js';
// import { PRODUCTS } from './constants.js';

const PRODUCTS = 'PRODUCTS';

export function getLocalStorageFruits() {
    let localStorageFruits = JSON.parse(localStorage.getItem(PRODUCTS));
    if (!localStorageFruits) {
        const stringifyFruits = JSON.stringify(hardCodedFruits);
        localStorage.setItem(PRODUCTS, stringifyFruits);
        localStorageFruits = hardCodedFruits;
    }
    return localStorageFruits;
}

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
        const actualItem = findById(hardCodedFruits, item.id);
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
    // return value;
}

export function addProduct(newProduct) {
    const localStorageFruits = getLocalStorageFruits();
    console.log(localStorageFruits);
    localStorageFruits.push(newProduct);

    setInLocalStorage(PRODUCTS, localStorageFruits);
}




