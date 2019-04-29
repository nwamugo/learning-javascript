let a = 9;
let b = 32;

if (a > b) {
  console.log('a is greater than b');
} else if (a === b) {
  console.log('a is equal to b');
} else {
  console.log('a is less than b');
}


if ((a + b) > (a * b - 248)) {
  console.log('The condition is true');
} else {
  console.log('The condition is false');
}


// && = AND
// || = OR

if ((true) && (true)) {
  console.log('true');
} else {
  console.log('false');
}

if ((true) && (false)) {
  console.log('true');
} else {
  console.log('false');
}

if ((true) || (false)) {
  console.log('true');
} else {
  console.log('false');
}



let isDarkOutside = true;

if (isDarkOutside) {
  console.log('It is dark outside');
} else {
  console.log('It is daylight');
}

// switch statement
let color = 'black';

switch(color) {
  case 'yellow':
    console.log('Yellow');
    break;
  case 'green':
    console.log('Green');
    break;
  case 'red':
    console.log('Red');
    break;
  default:
    console.log('We couldn\'t determine the color');
}


// Loops

// while Loop
console.log('While loop');
let counter = 5;
while (counter <= 10) {
  console.log(`The value is ${counter++}`);
}

// Do while Loop
console.log('Do while loop');
counter = 5;
do {
  console.log(`The value is ${counter}`);
  counter++;
} while (counter <= 10);

// for Loop
console.log('For Loop');
for (let i = 5; i <= 10; i++) {
  console.log(`The value is ${i}`);
}
