const form = document.querySelector('form');

import { addProduct } from '../helper-functions.js';

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);

    const id = data.get('id');
    const title = data.get('title');
    const image = data.get('image');
    const description = data.get('description');
    const category = data.get('category');
    const price = data.get('price');

    const newFruit = {
        id: id,
        name: title,
        image: image,
        description: description,
        category: category,
        price: Number(price),
    };
    addProduct(newFruit);
});

    