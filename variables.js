var fullName = 'Jack Davis';
var itemsInCart = 32;
var isCartEmpty = false;

var firstName = 'Jack';
var lastName = 'Davis';

//ES5 style
console.log(firstName + ' ' + lastName);
console.log(firstName, lastName);

//ES6 style
console.log(`${firstName} ${lastName}`);

console.log(`The IT Director's name is: ${firstName}`);

var fullName = firstName + ' ' + lastName;
var fullName = `${firstName} ${lastName}`;

console.log(fullName);

var dogsName = 'Cody';

var dogsName = 'Harper';

let catsName = 'Pickles';

// let catsName = 'Wuss'; //declaring a second time will not work

catsName = 'Wuss'; //Yeah, this works


const name = 'Rick Smith';
let position = 'Purchasing Manager';
let salary = 60000;
let extension = 215;
const birthDate = 'March 14th, 1974';
