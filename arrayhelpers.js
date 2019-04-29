(function() {
  "use strict";
// Array Helper methods

let numArray = [32, 49, 54, 58];

console.log('FOR LOOP========');
for (let i = 0; i < numArray.length; i++) {
  console.log(numArray[i]);
}

console.log('FOR EACH========');
numArray.forEach(function(arrayElem) {
  console.log(arrayElem);
});

console.log('FOR EACH fat arrow========');
numArray.forEach(value => console.log(value));

console.log('GRADES=========');
let grades = [98, 87, 82, 74, 89, 67];

let sum = 0;
grades.forEach(grade => sum += grade);

let average = sum / grades.length;
console.log(`Our average is ${average}`);
console.log(`Our average is ${average.toFixed(1)}`); //toFixed rounded up the number to one decimal place
console.log(`Our average is ${average.toFixed(0)}`); //toFixed rounded up the number to zero decimal place


console.log('=====MAP Helper======')
// Map Helper
// iterate through an array and perform some operation on each element.
// One of the most commonly used helpers.

let newArray = [1, 2, 3, 4, 5];
let addOne = [];

for (let i = 0; i < newArray.length; i++) {
  addOne.push(newArray[i] + 1);
}
console.log(addOne);

// let's refactor
let addOneMap = newArray.map(value => value + 1);
console.log(addOneMap); //this holds the same values as addOne above

let vehicles = [
  { id: 1, make: 'Dodge', model: 'Ram 1500', year: '2011', is4WD: true },
  { id: 2, make: 'Dodge', model: 'Charger R/T', year: '2015', is4WD: false },
  { id: 3, make: 'Nissan', model: 'Rogue', year: '2016', is4WD: false },
];

let truckDriver = {
  vehicleId: 1,
  name: 'Jack'
};

let models = vehicles.map(vehicle => vehicle.model);
console.log(models);


// Filter
console.log('FILTER=======');

let filteredVehicles = vehicles.filter(vehicle => vehicle.make === 'Dodge');

console.log(filteredVehicles);



// FIND
console.log('FIND======');

let vehicle = vehicles.find(vehicle => vehicle.make === 'Nissan');
console.log(vehicle);


console.log('another example======');

function driverForVehicle(vehicles, driver) {
  return vehicles.find(vehicle => vehicle.id === driver.vehicleId);
}
let driver = driverForVehicle(vehicles, truckDriver);
console.log(driver)



// EVERY and SOME
console.log('EveryANDSome========');

let areAll4WD = vehicles.every(vehicle => vehicle.is4WD === true);
console.log(areAll4WD);

let areSome4WD = vehicles.some(vehicle => vehicle.is4WD === true);
console.log(areSome4WD);

// REDUCE
console.log('REDUCE=======');

grades = [98, 87, 82, 74, 89, 67];
sum = 0;

for (let i = 0; i < grades.length; i++) {
  sum += grades[i];
}
console.log(sum);
console.log(`Our average is ${(sum / grades.length).toFixed(1)}`);

//refactor
// let total = grades.reduce(function(sum, grade) {
//   return sum + grade;
// }, 0);

let total = grades.reduce((sum, grade) => {
  return sum + grade;
}, 0);

console.log(`total = ${total}`);
console.log(`Our average is ${(total / grades.length).toFixed(3)}`);

});