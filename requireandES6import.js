// With import, you can import part of your file instead of the
// whole file at one time


// // we can import the whole file
// let myFuncs = require('./export'); //require is ES5 style
//
// console.log(`The value of myVar is ${myFuncs.myVar}`);
// myFuncs.func1();
// myFuncs.func2();


// ES6
import { myVariable, func1, func2 } from './export';


console.log(`The value of myVar is ${myVariable}`);
func1();
func2();


// Other import examples include
// import className from './nameOfFile';
// import * from './nameOfFile';