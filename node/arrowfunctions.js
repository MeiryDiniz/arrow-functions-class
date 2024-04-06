/**
 * To run this file, use the command: node arrow-functions.js
 * in the terminal. You have to create a folder called <none>
 * then create your JS file inside of this folder and use
 * the command cd to change your directory and then use the 
 * command above to run the function.
 */

// Vanilla JavaScript Function

function addTwoNumbers(a, b) {
    // Code block
    return a + b;
}
let sum = addTwoNumbers(3, 5);
console.log(sum);

/**
 * ES6 arrow functions are defined as constants.
 * This ensures that they can't be overwritten or misused
 * later in the code, and also that they must be defined 
 * before being called.
 */

// ES6 fat arrow =>, an equals sign and 
// a greater tan sign.

// Arrow Function With Parameters

const addTwoNumbers = (a, b) => {
    // Code block
    return a + b;
}
let sum = addTwoNumbers(4, 7);
console.log(sum);


// Single Line ES6 Arrow Function With Parameters
// const addTwoNumbers2 = (a, b) => (a + b); also valid


const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers2(8, 6)
console.log(sum2);


/**
 * For even simpler functions, such as those 
 * that only take a single parameter, you can
 * leave off the first set of parentheses too.
 */

// Implicit Returns

const saySomething = message => console.log(message);
saySomething('Hello there!!');

/**
 * If you’ve got a function that takes no parameters 
 * at all, such as this one called sayHello, you must 
 * use an empty set of parentheses to tell JavaScript
 * you’re declaring a function.
 */

const sayHello = () => console.log('hello');
sayHello();


/**
 * Whenever an arrow function needs to return multiple
 * lines of code, such as this one which returns a 
 * multi-line string, the parentheses mentioned in 
 * the implicit return function above are required. 
 * This goes for using an explicit return statement 
 * inside a set of curly braces, too. If you need to 
 * return multiple lines of code, you must wrap 
 * whatever comes after the return keyword in parentheses.
 */

// Returning Multiple Lines

const returnMultiplesLines = () => (
    '<p>This is a multiple string!</p>'
)
console.log(returnMultiplesLines())