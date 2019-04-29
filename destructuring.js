var expense = {
    type: 'Business',
    amount: '45 NGN'
};


// var type = expense.type;
// var amount = expense.amount;

//ES6 refactor
//We can use destructuring for drammatically decreasing the
//amount of code that we have to write whenever we are
//pulling properties off an object


// const { type } = expense;
// const { amount } = expense;

//In the above, we are not making an object on the LHS
//The syntax on the left says basically
//I want to declare a new variable called type
//and I want to reference the expense.type property.
//Same thing with amount. Yes, of course, you can keywords var and let as well

//NB: In destructuring, the name of the variable must
//be identical to the name of the property that we are trying
//to copy off

//When we are destructuring properties, we can combine
//the operations into a single line

const { type, amount } = expense;

console.log(type);
console.log(amount);


//We can also make use of destructuring to pull properties off
//of objects that are passed to functions
var savedFile = {
    extension: 'jpg',
    name: 'repost',
    size: 14040
};

function fileSummary(file) {
    return `The file ${file.name}.${file.extension} is of size ${file.size}`;
}

console.log(fileSummary(savedFile));

//refactor
function fileSummary({ name, extension, size }) {
    return `The file ${name}.${extension} is of size ${size}`;
}

console.log(fileSummary(savedFile));


//We can even add another property e.g.
function fileSummary2({ name, extension, size }, { color }) {
    return `${color} The file ${name}.${extension} is of size ${size}`;
}

console.log(fileSummary2(savedFile, { color: 'red'}));



// Let's destructure out of arrays as well
// When we destructure arrays, we pull off individual elements
const companies = [
  'Google',
  'Facebook',
  'Uber'
];

const [ name ] = companies;
console.log(name); // Google

//the rule behind destructuring arrays is basically the place
// in which we place the variable in "const []" is the order
// we pull it out of the array
//so if we add in another element

const [ firm, firm2 ] = companies;
console.log(firm2); // Facebook

const [ llc, llc2, llc3 ] = companies;
console.log(llc3); // Uber

//we can pull off the length of the array as well
const { length } = companies; //note this is in curly braces
console.log(length);


// WE can use rest rest operator in destructuring
const [plc, ...rest] = companies;
console.log(...rest); // Facebook Uber


// let's mix and match object and array destructuring together
const firms = [
  { name1: 'Google', location: 'Mountain View' },
  { name1: 'Facebook', location: 'Menlo Park' },
  { name1: 'Uber', location: 'San Francisco' }
];

//ES5
//var location = firms[0].location;

//By using destructuring
const [ {name1} ] = firms;

console.log(name1);



const Google = {
    locations: ['Mountain View', 'New York', 'London']
};


const { locations: [city] } = Google;
console.log(city);



function signup(username, password, email, dateOfBirth, city) {
    //create new user
}

signup('myname', 'mypassword', 'myemail@example.com', '1/1/1990', 'New York');


//destructure
function signup( {email, password, dateOfBirth, city, username} ) { //I am now pulling off the properties off my user object. By destructuring, I do not anymore have to worry about the order of the arguments
    //create new user
}
const user = {
    username: 'myname',
    password: 'mypassword',
    email: 'myemail@example.com',
    dateOfBirth: '1/1/1990',
    city: 'New York'
};

signup(user);



const points = [
  [4, 5],
  [10, 1],
  [0, 40]
];

// how do we change the above data into
[
  {x: 4, y: 5},
  {x: 10, y: 1},
  {x: 0, y: 40}
]


//let's use ES6
changedStructure = points.map(([ x, y ]) => {
  return { x, y }; // I used the enhanced object literal here
});


console.log(changedStructure);
