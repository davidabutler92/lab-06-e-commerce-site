import { findById, getLocalStorageFruits } from '../helper-functions.js';

const localStorageFruits = getLocalStorageFruits();

export function renderTableRow(cartItem) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdPrice = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdTotalCost = document.createElement('td');
    
    const fruitsData = findById(localStorageFruits, cartItem.id);
    const price = fruitsData.price;
    const title = fruitsData.name;   
    
    tdQuantity.textContent = cartItem.quantity;
    tdName.textContent = title;
    tdPrice.textContent = `$${price}`;
    tdTotalCost.textContent = `$${price * cartItem.quantity}`;
    
    tr.append(tdName, tdPrice, tdQuantity, tdTotalCost);
    return tr; 
}     


