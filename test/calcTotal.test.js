import { getLocalStorageFruits } from '../helper-functions.js';
import { calcTotal } from '../helper-functions.js';

const test = QUnit.test;

test('should take in cart item and fruit item and return total', (expect) => {
    //Arrange

    // Set up your arguments and expectations
    const expected = '69';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcTotal(cartArray, getLocalStorageFruits);


    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});