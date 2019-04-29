// A generator is a function that can be entered and exited multiple times
// With generator, we can run some code, return the value
// and then go right back into the function at the same place that we left it

//Just by adding an asterisks, we create a generator function

// function* numbers() {
//
// }

// //OR

// function *numbers() {
//
// }


function* shopping() {
    // stuff on the sidewalk

    // walking down the sidewalk

    // go into the store with cash
    const stuffFromStore = yield 'cash';
    // walking to laundry place
    const cleanClothes = yield 'laundry';

    // walking back home
    return [stuffFromStore, cleanClothes];
}

// stuff in the store
const gen = shopping();
gen.next(); // leaving our house
// walked into the store
// walking up and down the aisles..
// purchase our stuff

gen.next('groceries'); // leaving the store with groceries
gen.next('cleanClothes');

console.log(shopping());



function* colors() {
    yield 'red';
    yield 'blue';
    yield 'green';
}



const myColors = [];
for (let color of colors()) {
    myColors.push(color);
}
console.log(myColors);

// Generators and for of loops, when used in tandem,
// we can build up objects that will iterate through any
// type of data structure that we can possibly imagine
const testingTeam = {
    lead: 'Amanda',
    tester: 'Bill',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.tester;
    }
};

const engineeringTeam = {
    testingTeam,
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.manager;
        yield this.engineer;
        yield* this.testingTeam;
    }
};




// I want to use generators to iterate through the above subject
// I only want to iterate through the employees


// function* TeamIterator(team) {
//     yield team.lead;
//     yield team.manager;
//     yield team.engineer;
//     yield* team.testingTeam;
// }


// function* TestingTeamIterator(team) {
//     yield team.lead;
//     yield team.tester;
// }


const names = [];
for (let name of engineeringTeam) {
    names.push(name);
}
console.log(names);



// symbol iterator is a tool that teaches objects how to respond
// to the for of loop



// tree data structure
class Comment {
    constructor(content, children) {
        this.content = content;
        this.children = children;
    }

    *[Symbol.iterator]() {
        yield this.content;
        for (let child of this.children) {
            yield* child;
        }
    }
}

const children = [
  new Comment('good comment', []),
  new Comment('bad comment', []),
  new Comment('meh', [])
];

const tree = new Comment('Great post!', children);
console.log(tree);

const values = [];
for (let value of tree) {
    values.push(value);
}
console.log(values);
