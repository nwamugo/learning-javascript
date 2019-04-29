let grades = [92, 98, 84, 87, 93];

console.log(grades[0]);
console.log(`My fourth grade was ${grades[3]}`);

let myStuff = ['baseball', 'football', 32, true, 'Magic Mouse'];

console.log(myStuff.length);


// Array methods

// pop
let poppedValue = myStuff.pop();
console.log(poppedValue); //Magic Mouse
console.log(myStuff);

// PUSH
myStuff.push(poppedValue);
console.log(myStuff);

console.log(grades);
grades.push(79, 92, 84);
console.log(grades);

// SHIFT
//SHIFT and UNSHIFT operate at the beginning of the Array
let shiftedValue = myStuff.shift();
console.log(shiftedValue); //baseball
console.log(myStuff); //['football', 32, true, 'Magic Mouse']

// UNSHIFT
myStuff.unshift(shiftedValue);
console.log(myStuff);

// CONCAT
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let concatArray = array1.concat(array2);
console.log(concatArray); //[1, 2, 3, 4, 5, 6]

let array3 = [7, 8, 9];

let concatArray2 = array1.concat(array2, array3);
console.log(concatArray2);

// REVERSE - reverses the order of the elements
let reversedArray = concatArray2.reverse();
console.log(reversedArray);

// SORT
let statesArray = ['Imo', 'Abia', 'Anambra', 'Cross River', 'Rivers', 'Ekiti'];
let sortedStatesArray = statesArray.sort();
console.log(sortedStatesArray);

// custom sort The Parameter is called compareFunction. It defines an alternative sort order
// When the sort() method compares two values, it sends the values to the compare
// function, and sorts the values according to the returned value (negative -> zero -> positive).
let numericArray = [233, 3, 83, 2399, 23, 5, 8];

let sortedNumericArray = numericArray.sort((a, b) => a - b);
console.log(sortedNumericArray);

const allStates = ["Abia", "Adamawa", "Anambra", "Akwa Ibom", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Enugu", "Edo", "Ekiti", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"];

const sortByNameLength = (states) => {
  let sortedStates = states.sort((a, b) => b.length - a.length);
  return sortedStates;
}

const sorted = sortByNameLength(allStates);
console.log(sorted);

// SLICE
// slice allows you to pull out a part of an array.
// It takes two values, the start index and the end index. The method will
// return all values from the start index up to, but NOT INCLUDING the end index.
let slicedState = sortedStatesArray.slice(2, 5);
console.log(slicedState);

slicedState = sortedStatesArray.slice(2);
console.log(slicedState);
