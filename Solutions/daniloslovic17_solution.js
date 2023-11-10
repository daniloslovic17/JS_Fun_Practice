// Write a function identity that takes an argument and returns that argument
const identity = (x) => x;

// Write a binary function addb that takes two numbers and returns their sum
const addb = (a, b) => a+b;

// Write a binary function subb that takes two numbers and returns their difference
const subb = (a, b) => a-b;

// Write a binary function mulb that takes two numbers and returns their product
const mulb = (a, b) => a*b;

// Write a binary function minb that takes two numbers and returns the smaller one
const minb = (a, b) => (a < b ? a : b);

// Write a binary function maxb that takes two numbers and returns the larger one
const maxb = (a, b) => (a > b ? a : b);

// Write a function add that is generalized for any amount of arguments
const add = (...nums) => nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Write a function sub that is generalized for any amount of arguments
const sub = (...nums) => nums.reduce((accumulator, currentValue) => accumulator - currentValue, 0);

// Write a function mul that is generalized for any amount of arguments
const mul = (...nums) => nums.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

// Write a function min that is generalized for any amount of arguments
const min = (...nums) => nums.reduce((accumulator, currentValue) => (currentValue < accumulator ? currentValue : accumulator));

// Write a function max that is generalized for any amount of arguments
const max = (...nums) => nums.reduce((accumulator, currentValue) => (currentValue < accumulator ? accumulator : currentValue));