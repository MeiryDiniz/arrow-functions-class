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

const addTwoNumbers1 = (a, b) => {
    // Code block
    return a + b;
}
let sum1 = addTwoNumbers1(4, 7);
console.log(sum1);


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


/**
 * ES6 features: spread operator and rest parameter syntax
 */

// No spread operator

/**
 * When you log the first  array to the console, you'll see 
 * that when we pushed the fourth element into the 2nd array,  
 * it was also pushed into the first array. This is because 
 * the second array is  not actually a copy of the first, 
 * it's a new variable which points to the same  object as 
 * the other variable. Because of this, anything we do to the 
 * second array will  be done to the first and vice versa. 
 */

let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log("Second array:", arr2);
console.log("First array:", arr1);

// ES6 spread operator: copying an array

let arr3 = [4, 5, 6];
let arr4 = [...arr3];
arr4.push(7);
console.log("Third array:", arr3);
console.log("Fourth array:", arr4);

// ES6 spread operator: copying an object

let obj1 = {a: 1, b: 2, c: 3};
let obj2 = {...obj1, d: 4};
//overwriting values
let obj3 = {...obj1, b: 5};

console.log("First Object:", obj1);
console.log("Second Object:", obj2);
//overwriting values
console.log("Third Object:", obj3);

// ES6 spread operator: copying only part
// of an array/object

let arr5 = [...arr1, {...obj1}, ...arr3, "x", "y", "z"];
console.log(arr5);
