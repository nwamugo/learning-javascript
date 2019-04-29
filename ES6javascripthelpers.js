//for of loop
const examplecolors = ['orange', 'purple', 'yellow'];

for (let examplecolor of examplecolors) {
  console.log(examplecolor);
}


const examplenumbers = [1, 2, 3, 4];

let exampleTotal = 0;
for (let examplenumber of examplenumber) {
  exampleTotal += number;
}
console.log(exampleTotal);


//Moving on
var colors = [ 'red', 'blue', 'green' ];

//the traditional forLoop goes this way
for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}



//say hello to better JS array helper methods
//The forEach Helper
colors.forEach(function(color) {
    console.log(color);
});



var numbers = [1,2,3,4,5];
var sum = 0;

numbers.forEach(function(number) {
    sum += number;
});
console.log(sum);



//The inner function of the forEach don't need to be anonymous.
//We can define it separately and then pass it into the forEach

function adder(number) {
    sum += number;
}

numbers.forEach(adder);




//The Map Helper
var numbers = [1,2,3];
var doubledNumbers = [];

//traditionally we can go
for (var i = 0; i < numbers.length; i++) {

    doubledNumbers.push(numbers[i] * 2);
}

//using map (always put the return keyword in map statements)
var doubled = numbers.map(function(number) {
    return number * 2;
});


//the below operation is what is known as a pluck
//because we are plucking a property off an object
var cars = [
{model: 'Buick', price: 'CHEAP'},
{model: 'Camaro', price: 'EXPENSIVE'}
];

var prices = cars.map(function(car) {
    return car.price;
});
console.log(prices);


//The Filter Helper
var products = [
  { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
  { name: 'banana', type: 'fruit', quantity: 10, price: 15 },
  { name: 'celery', type: 'vegetable', quantity: 30, price: 9 },
  { name: 'orange', type: 'fruit', quantity: 3, price: 5 }
];

var filteredProducts = [];

for (var i = 0; i < products.length; i++) {
    if (products[i].type === 'fruit') {
        filteredProducts.push(products[i]);
    }
}
console.log(filteredProducts);

//let's refactor the above
products.filter(function(product) {
    return product.type === 'fruit';
});


//more
//Type is 'vegetable', quantity > 0, price < 10
products.filter(function(product) {
    return product.type === 'vegetable'
      && product.quantity > 0
      && product.price < 10
});

var post = { id: 4, title: 'New Post' };
var comments = [
  { postId: 4, content: 'awesome post' },
  { postId: 3, content: 'it was ok' },
  { postId: 4, content: 'neat' }
];

function commentsForPost(post, comments) {
    return comments.filter(function(comment) {
        return comment.postId === post.id;
    });
}

commentsForPost(post, comments);


//The Find Helper
//Very flexible. Whenever you have a  single record
//or you're trying to find it inside a larger collection
//and you want just one singular element out of there

var users = [
  { name: 'Jill'},
  { name: 'Alex'},
  { name: 'Bill'}
];

var desiredUser = '';
for (var i = 0; i < users.length; i++) {
    if (users[i].name === 'Alex') {
        desiredUser = users[i];
        break;
    }
}
console.log(user);

// refactor
users.find(function(user) { //this helper exits once it finds a match
    return user.name === 'Alex';
});

//more
function Car(model) {
    this.model = model;
}

var cars = [
  new Car('Buick'),
  new Car('Camaro'),
  new Car('Focus')
];

cars.find(function(car) {
    return car.model === 'Focus';
});


var posts = [
  { id: 1, title: 'New Post' },
  { id: 2, title: 'Old Post' }
];

var comment = { postId: 1, content: 'Great Post' };

function postForComment(posts, comment) {
    return posts.find(function(post) {
        return post.id === comment.postId;
    });
}

postForComment(posts, comment);


//'every' helper and 'some' helper
var computers = [
  { name: 'Apple', ram: 24 },
  {name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 }
];


var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

for (var i = 0; i < computers.length; i++) {
    var computer = computers[i];

    if (computer.ram < 16) {
        allComputersCanRunProgram = false;
    } else {
        onlySomeComputersCanRunProgram = true;
    }
}



computers.every(function(computer) {
  return allComputersCanRunProgram = computer.ram > 8; //this returns false because not every computer is greater than 16
});

computers.some(function(computer) {
    return onlySomeComputersCanRunProgram = computer.ram > 16;
});

console.log(allComputersCanRunProgram);
console.log(onlySomeComputersCanRunProgram);

var names = [
  "Alexandria",
  "Matthew",
  "Joe"
];

var allNames = true
var someNames = false;

names.every(function(name) {
    return allNames = name.length > 4;
});

names.some(function(name) {
    return someNames = name.length > 4;
});


console.log(allNames);
console.log(someNames);



function Field(value) {
    this.value = value;
}

//let me add a method to Field
Field.prototype.validate = function() {
    return this.value.length > 0; //we are saying a field is valid if it has a length greater than zero
}


var username = new Field("2cool");
var password = new Field("my_password");
var birthdate = new Field("10/10/2010");


console.log(username.validate() && password.validate());


//Instead of listing out all the fields the console.log statement, we can instead
var fields = [username, password, birthdate];

var formIsValid = fields.every(function(field) {
    return field.validate();
});

if (formIsValid) {
    // allow user to submit!
} else {
    //show an error message
}


//The reduce helper
var numbers = [ 10, 20, 30 ];
var sum = 0;

for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i]; //60
}


numbers.reduce(function(sum, number) {
  return sum + number;
}, 0); //with reduce, we pass in a second argument (initial value of sum)


var primaryColors = [
  { color: 'red' },
  { color: 'yellow' },
  { color: 'blue' }
];

var results = primaryColors.reduce(function(previous, primaryColor) {
    previous.push(primaryColor.color);
    return previous;
}, []);

console.log(results);



function balancedParens(string) {
  turnToarray = string.split(""); //we convert to an array because helpers only work with arrays
  return !turnToarray.reduce(function(previous, char) { //JS interpretes a positive or negative number as truthy and interpretes zero as being falsey
      if (previous < 0) { //with this code, if the string starts with ')', it is instantly unbalanced no matter if it even out
        return previous;
      }
      if (char === "(") {
        return ++previous;
      }
      if (char === ")") {
        return --previous;
      }
      return previous;
  }, 0);
}

console.log(balancedParens("((((")); //opening brackets with no closing partners, so not balanced
console.log(balancedParens(")(")); //unbalanced
