import { addProduct, getLocalStorageFruits } from '../helper-functions.js';

const test = QUnit.test;

test('should take in cart item and fruit item and return total', (expect) => {
    const newfruits = {
        id: 'pineapplepen',
        name: 'Pineapplepen',
        image: '../assets/apple.jpg',
        description: 'This product has a crisp bite with a pen in the middle.',
        category: 'Category: Produce pen',
        price: 1000,
    };
    const expected = [    
        {
            id: 'apple',
            name: 'Apple',
            image: '../assets/apple.jpg',
            description: 'This product has a crisp bite with a sweet after taste.',
            category: 'Category: Produce',
            price: 4,
        },
        {
            id: 'banana',
            name: 'Banana',
            image: '../assets/banana.jpg',
            description: 'a tropical fruit that\'s quite sweet in taste.',
            category: 'produce',
            price: 3,
        },
        {
            id: 'mango',
            name: 'Mango',
            image: '../assets/mango.jpg',
            description: 'Mangoes are a rich source of vitamins A, C, and D and has a sweet taste.',
            category: 'produce',
            price: 4,
        },
        {
            id: 'pineapple',
            name: 'Pineapple',
            image: '../assets/pineapple.jpg',
            description: 'Tropical fruit with a very tangy sweet taste.',
            category: 'produce',
            price: 7,
        },
        {
            id: 'kiwi',
            name: 'Kiwi',
            image: '../assets/kiwi.jpg',
            description: 'This fruit has a soft texture with a sweet and unique flavor.',
            category: 'produce',
            price: 5,
        },
        {
            id: 'pineapplepen',
            name: 'Pineapplepen',
            image: '../assets/apple.jpg',
            description: 'This product has a crisp bite with a pen in the middle.',
            category: 'Category: Produce pen',
            price: 1000,
        }
    ];
       
    addProduct(newfruits);
    const localStorageAfter = getLocalStorageFruits(expected);
    
    
    expect.deepEqual(localStorageAfter, expected);
});