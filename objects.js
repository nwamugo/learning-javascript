//An object is a value type that contains key-value pairs inside
//curly braces. The keys are also known as properties.
//Anything in JavaScript that isn't a primitive type is an object
//Primitive types are strings, numbers, booleans, undefined, null

//when variables are used in objects they are called properties
//when functions are used in objects, they are called methods


//object literal. AN object literal simply mean you create a variable
//and assign it an object right then
var truck = {
  // properties
  make: 'Dodge',
  wheels: 4
};

// Bracket notation
console.log(`I have a ${truck['make']} that has ${truck['wheels']} wheels`);

// Dot notation
console.log(`I have a ${truck.make} that has ${truck.wheels} wheeels`);

//Object literal
var employee = {
  // properties
  firstName: 'Joe',
  lastName: 'Blow',
  // method
  fullName: function() {
    return `${this.firstName} ${this.lastName}`;
  }
};

// Call a method
console.log(`The new employee's name is ${employee.fullName()}`);


// Object constructor function
function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.getFullDescription = function() {
    return `${this.year} ${this.make} ${this.model}`;
  };
}

// Create new instances with the new keyword
let myTruck = new Vehicle('Dodge', 'Ram 1500', '2011');
let myWifesCar = new Vehicle('Dodge', 'Charger R/T', '2015');
let myDaughtersCar = new Vehicle('Nissan', 'Rogue', '2016');

console.log(myTruck.year, myTruck.make, myTruck.model);

console.log(myWifesCar.getFullDescription());

//instead of using this like in the above function
function createVehicle(make, model, year) {
  return {
    make: make,
    model: model,
    year: year,
    getFullDescription: function() {
      return `${year} ${make} ${model}`;
    }
  };
}

let myTruck2 = createVehicle('Dodge', 'Ram 1500', '2011');
let myWifesCar2 = createVehicle('DOdge', 'Charger R/T', '2015');
let myDaughtersCar2 = createVehicle('Nissan', 'Rogue', '2016');

console.log(myTruck2.getFullDescription());
console.log(myWifesCar2.getFullDescription());
console.log(myDaughtersCar2.getFullDescription());

//ES6 Enhanced Object literal
function createVehicle(make, model, year) {
  return {
    make,
    model,
    year,
    getFullDescription() {
      return `${year} ${make} ${model}`;
    }
  };
}

console.log(myTruck2.getFullDescription());
console.log(myWifesCar2.getFullDescription());
console.log(myDaughtersCar2.getFullDescription());
