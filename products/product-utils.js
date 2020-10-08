import { findById, getFromLocalStorage, setInLocalStorage, CART } from '../helper-functions.js';



export function renderFruit(fruits) {
    const li = document.createElement('li');
    const name = document.createElement('h3');
    const image = document.createElement('img');
    const description = document.createElement('p');
    const category = document.createElement('p');
    const price = document.createElement('p');
    const button = document.createElement('button');
    const removeButton = document.createElement('button');

    li.classList.add('fruits');

    name.classList.add('name');
    name.textContent = fruits.name;
    li.append(name);

    image.src = fruits.image;
    li.append(image);

    description.classList.add('description');
    description.textContent = fruits.description;
    li.append(description);

    category.classList.add('category');
    category.textContent = fruits.category;
    li.append(category);

    price.classList.add('price');
    price.textContent = `$${fruits.price.toFixed(2)}`;
    li.append(price);

    button.textContent = 'Add to cart';
    button.classList = 'add-cart-button';
    button.addEventListener('click', () => {
        const cart = getFromLocalStorage(CART) || [];
        const cartItem = findById(cart, fruits.id);
        console.log(cart);
        if (cartItem === undefined) {
            const newCartItem = {
                id: fruits.id,
                quantity: 1,
            };
            cart.push(newCartItem);
        } else {
            cartItem.quantity++;
            console.log(cartItem.quantity);
        }
        setInLocalStorage(CART, cart);
    });

    li.append(button);

    return li;
}

