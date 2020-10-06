import { cart } from '../data.js';
import { renderTableRow } from '../helper-functions.js';

const ul = document.querySelector('#list');

for (let i = 0; i < fruits.length; i++) {
    const newFruit = fruits[i];
    const li = renderFruit(newFruit);
    ul.append(li);
}