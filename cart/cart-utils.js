import { fruits } from '../data.js';
import { findById } from '../helper-functions.js';
// import { calcTotal } from '../helper-functions.js';
// import { cartArray } from '../data.js';


// const tdCartTotal = document.createElement('td');
// const total = calcTotal(cartArray);

export function renderTableRow(cartItem) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdPrice = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdTotalCost = document.createElement('td');

    
    const fruitsData = findById(fruits, cartItem.id);
    const price = fruitsData.price;
    const title = fruitsData.name;   
    
    tdQuantity.textContent = cartItem.quantity;
    tdName.textContent = title;
    tdPrice.textContent = `$${price}`;
    tdTotalCost.textContent = `$${price * cartItem.quantity}`;

    tr.append(tdName, tdPrice, tdQuantity, tdTotalCost);
    return tr; 
}     


