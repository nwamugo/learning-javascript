// In javascript, the way you get code from other files
// is that you export it

// let myVariable = 942;
// let func1 = () => {
//   console.log('Hello from func1');
// }
//
// let func2 = () => {
//   console.log('Hello from func2');
// }
//
// // old way
// // we could have even done without declaring variables globally
// // and instead do everything within the object
// module.exports = {
//   myVar: myVariable,
//   func1: func1,
//   func2: func2
// };




//ES6
export let myVariable = 942;
export let func1 = () => {
  console.log('Hello from func1');
}

export let func2 = () => {
  console.log('Hello from func2');
}


// Say this file was a class, we would at the bottom of the file add this line
// export default className;