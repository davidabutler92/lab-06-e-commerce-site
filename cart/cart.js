import { cartArray } from '../data.js';
import { renderTableRow } from '../cart/cart-utils.js';
import { calcTotal } from '../helper-functions.js'; 

const table = document.querySelector('tbody');

for (let i = 0; i < cartArray.length; i++) {
    const fruit = cartArray[i];
    const tr = renderTableRow(fruit);
    table.append(tr);
}

const total = calcTotal(cartArray);
const totalCell = document.querySelector('.total');

totalCell.textContent = `Total: $${total}`;
