import { renderTableRow } from '../cart/cart-utils.js';
import { calcTotal, getFromLocalStorage, getLocalStorageFruits } from '../helper-functions.js';
import { CART } from '../constants.js'; 

const table = document.querySelector('tbody');
const orderButton = document.getElementById('place-order');
const cart = getFromLocalStorage(CART) || [];

for (let i = 0; i < cart.length; i++) {
    const fruit = cart[i];
    const tr = renderTableRow(fruit);
    table.append(tr);
}

const fruitsArray = getLocalStorageFruits();

const total = calcTotal(cart, fruitsArray);
const totalCell = document.querySelector('.total');

totalCell.textContent = `Total: $${total}`;

orderButton.addEventListener('click', () => {
    const stringyCart = JSON.stringify(cart, true, 2);
    alert(stringyCart);
    localStorage.clear();
    window.location.href = '../index.html';
});
