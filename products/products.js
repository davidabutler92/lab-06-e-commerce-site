import { fruits } from '../data.js';
import { renderFruit } from './product-utils.js';

const ul = document.querySelector('#list');

for (let i = 0; i < fruits.length; i++) {
    const newFruit = fruits[i];
    const li = renderFruit(newFruit);
    ul.append(li);
}