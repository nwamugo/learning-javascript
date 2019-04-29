function addNumbers(a, b, c, d, e, f, g) {
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0);
}


console.log(addNumbers(1, 2, 3, 4, 5, 6, 7));

//As you observed, the numbers being passed in are not in any array
//But I want these numbers to go into my function as a single array
//to do so we use the rest operator
function addNumbers(...numbers) { //what this says is that I expect some number of arguments. How many? I don't know. And I want to capture all of them and put them in a single array
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0);
}

//While the rest operator is used to kinda gather together variables,
//the spread operator is used to kinda flatten/spread them out
const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];
const fallColors = ['fire red', 'fall orange'];

//we want to join defaultColors and userFavoriteColors
//Hey, we can use the concat method
defaultColors.concat(userFavoriteColors); //the two arrays will get joined together as a single one

//But we can also use the spread operator to achieve this
[...defaultColors, ...userFavoriteColors, ...fallColors];

//what if I want to add new elements at the same time that I
//am joining the arrays. Spread operator makes it so easy
['blue', ...defaultColors, ...userFavoriteColors, ...fallColors];


//we can mix and match the rest and spread operator
function validateShoppingList(...items) {
    if (items.indexOf('milk') < 0) { //if milk is not in the array
        return ['milk', ...items];
    }
    return items;
}

validateShoppingList('oranges', 'bread', 'eggs');



//let's pretend you author a library that is now famous with developers
let MathLibrary = {
    calculateProduct(a, b) {
        return a * b;
    }
};

//But they have a complaint. calculateProduct is a lousy name, they say. And they ask that it is changed to multiply
//How do you go about this without breaking the code of those already depending on the calculateProduct name
//One way to do this, albeit it will give you duplicate functions
MathLibrary = {
    calculateProduct(a, b) {
        return a * b;
    },
    multiply(a, b) {
        return a * b;
    }
}

//How might we solve this issue
MathLibrary = {
    calculateProduct(...rest) {
        console.log('Please use the multiply method instead');
        return this.multiply(...rest);
    },
    multiply(a, b) {
        return a * b;
    }
}
