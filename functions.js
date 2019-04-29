sayHi();
sayHiWithParameter('Duz');

function sayHi() {
  console.log('Well, hello there');
}

function sayHiWithParameter(name) {
  console.log(`Well, hello there ${name}`);
}

function addThreeNumbers(a, b, c) {
  return a + b + c;
}

let result = addThreeNumbers(10, 20, 30);
console.log(result);


function sayHello(firstName, lastName) {
  return `Well, hello ${firstName} ${lastName}`;
}

let greeting = sayHello('Billy', 'Moore');
console.log(greeting);


let sayGreeting = function() {
  return 'WEll, hello there';
}

console.log(sayGreeting());


// IIFE - Immediately Invoked Function Expression
let sayGreeting2 = (function() {
  return 'Hi, how are you';
}());

console.log(sayGreeting2);

let sayGreeting3 = (function(firstName, lastName) {
  return `Well, hello there ${firstName} ${lastName};`
}('Billy', 'Moore'));

console.log(sayGreeting3);


console.log(
    (function f(n) {
        return ((n > 1) ? n * f(n - 1) : n)
    })(4)
);

//ES6 fat arrow functions

let speakNames = function(firstName, secondName) {
  return `The names are ${firstName} and ${secondName}`;
}

console.log(speakNames('Jack', 'Jill'));


speakNames = (firstName, secondName) => {
  return `The names are ${firstName} and ${secondName}`;
}

console.log(speakNames('Duz', 'Goz'));


speakNames = (firstName, secondName) => `The names are ${firstName} and ${secondName}`;

console.log(speakNames('Ekiiks', 'Dum'));

speakNames = firstName => `The names is ${firstName}`;

console.log(speakNames('Nicole'));
