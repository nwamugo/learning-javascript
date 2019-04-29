// Let's create an object constructor
function Car(options) {
    this.title = options.title;
}

// Let's add a method to Car
// whenever we add a method to an object constructor
// it's preferable we add it to the prototype object of the constructor

Car.prototype.drive = function() {
    return 'vroom';
}
function Toyota(options) {
    Car.call(this, options); //we are running any initialization that occurs in the Car as well
    this.color = options.color;
}

// I also want to make sure I can call Car's drive method from a Toyota object
Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function() {
    return 'beep';
}

const toyota = new Toyota({color: 'red', title: 'Daily Driver'});
console.log(toyota);
console.log(toyota.drive());
console.log(toyota.honk());



const car = new Car({ title: 'Focus' });
console.log(car);
console.log(car.drive());




//Refactoring with classes... an ES6 feature
class Vehicle {
    //to handle some initial iniialization and setup inside a class, we define a very special method called constructor
    constructor({ title }) { //we destructured here
        this.title = title;
    }

    // whenever you are adding methods inside the class, you don't need to separate the methods with a comma
    drive() {
        return 'vroom'
    }
}

// We want ot add our Mazda class that extends/inherits all the methods that exist in the Vehicle class
class Mazda extends Vehicle { //just like that, we inherit from Vehicle
    constructor(options) {
//whenever we have a subclass like Mazda that wants to call a method on a parent when that same method is declared on both sides, we refer to the super keyword
//whenever we call a super(), we need to make sure we pass along any options that were provided in the method
//so usually we do not use destructuring when we involve super() because we want to get access to every property that has been provided
        super(options); //this keyword allows Vehicle's constructor to run
        this.color = options.color;
    }
    honk() { // if Vehicle had a honk method and I wanted to call both honk methods, I would put in the super keyword inside this honk as well i.e. super.honk()
        //Note that the super method cannot then have a return keyword in its definition. Because the child class method seeks to extend/overwrite it
      return 'beep';
    }
}

const mazda = new Mazda({color: 'pink', title: 'Dad\'s Car'});
console.log('---');
console.log(mazda.honk());
console.log(mazda);

const vehicle = new Vehicle({title: 'Mazda'});
console.log(vehicle);
console.log(vehicle.drive())
