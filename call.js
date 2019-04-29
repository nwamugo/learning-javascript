let obj = {
  num: 2
};

let addToThis = function(a, b, c) {
  // 'this' has no context here
  return this.num + a + b + c;
};

// call binds the function to the first object passed in.
// Parameters are passed in subsequent values

console.log(addToThis.call(obj, 1, 2, 3));

let person1 = {
  firstName: 'Jack',
  lastName: 'Davis'
};

let person2 = {
  firstName: 'Mark',
  lastName: 'Price'
};

function hello(greeting) {
  console.log(`${greeting} ${this.firstName} ${this.lastName}`);
}

hello.call(person1, 'Good Morning');
hello.call(person2, 'How ya doing');


var obi = {
    name: 'Obi',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay)
 {
     if (style === 'formal') {
         console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
     } else if (style === 'friendly') {
         console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
     }
 }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

obi.presentation('formal', 'morning');

obi.presentation.call(emily, 'friendly', 'afternoon');