import { renderFruit } from './product-utils.js';
import { getLocalStorageFruits } from '../helper-functions.js';

const localStorageFruits = getLocalStorageFruits();
const ul = document.querySelector('#list');

for (let i = 0; i < localStorageFruits.length; i++) {
    const newFruit = localStorageFruits[i];
    console.log(newFruit);
    const li = renderFruit(newFruit);
    ul.append(li);
}