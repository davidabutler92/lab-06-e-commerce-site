import { cartArray } from '../data.js';
import { renderTableRow } from '../cart/cart-utils.js';
import { calcTotal, getFromLocalStorage } from '../helper-functions.js'; 

const table = document.querySelector('tbody');
const orderButton = document.getElementById('#place-order');

const cart = getFromLocalStorage('CART') || [];

for (let i = 0; i < cartArray.length; i++) {
    const fruit = cartArray[i];
    const tr = renderTableRow(fruit);
    table.append(tr);
}

const total = calcTotal(cartArray);
const totalCell = document.querySelector('.total');

totalCell.textContent = `Total: $${total}`;

orderButton.addEventListener('click', () => {
    console.log('clicked');
    // const stringyCart = JSON.stringify(cart, true, 2);
    // alert(stringyCart);
    // localStorage.clear();
});
