// In JavaScript, the thing called 'this' is the object
// that 'owns' the JavaScript code

let hotRod = {};

hotRod = {
  sound: 'vroooom',
  soundOff: function() {
    console.log(this.sound);
  }
};

hotRod.soundOff();

let soundFunction = hotRod.soundOff; // 'this' loses its context
soundFunction();

// We can bind 'this' to the object hotRod
// This will give soundFunction a 'this' context

let boundSoundFunction = soundFunction.bind(hotRod);
boundSoundFunction();

let person1 = {
  name: 'Joe'
};

let person2 = {
  name: 'Jane'
};

function logName() {
  return this.name; // 'this' has no context. It's not part of an object
}
// We can bind the function to an object

console.log(logName());
console.log(logName.bind(person1)());
console.log(logName.bind(person2)());

let number = {
  x: 24,
  y: 22
};

let count = function() {
  console.log(this.x + this.y); // no 'this' context here
}

count(); // NaN

let boundCount = count.bind(number);
boundCount();



var a = function() {
  console.log(this);
}.bind(1); //I am locking in this to the value I passed in which is 1

a(); //this prints out 1

var asim = {
  func: a;
}

asim.func(); //this still prints out 1 because I locked it in with bind


/////////////////////////////
// Lecture: Bind
// One thing to note is that, only in the method call, that the this keyword, actually points to that object. But in a regular function call, the this keyword will always point to the global object

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


var obiFriendly = obi.presentation.bind(obi, 'friendly'); // this is known as carrying. Carrying is a technique where we base a function on another function but with some preset parameters

obiFriendly('evening');

var emilyFormal = obi.presentation.bind(emily, 'formal');
emilyFormal('morning');



var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2019 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20)); // Japan has a fullAge limit of 20
console.log(ages);
console.log(fullJapan);
