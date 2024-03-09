let add = function(a, b) {
    return a + b;
};

add(1, 2);


//ES6
add = (a, b) => {
    return a + b;
};

//whenever we have a single JS expression in the function, the fat arrow can even become shorter
add = (a, b) => a + b;


let double = function(number) {
    return 2 * number;
};

//refactor
double = (number) => 2 * number;

//when we have a single argument, the fat arrow function can get even more compact
double = number => 2 * number;

//when there are no argz, you still have to put the parentheses
double = () => {
    return 2;
};


let numbers = [1, 2, 3];

numbers.map(function(number) {
    return 2 * number;
});

//refactor
numbers.map(number => 2 * number);



let team = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Squad',
    teamSummary: function() {
        return this.members.map(function(member) {
            return `${member} is on team ${this.teamName}`; //whenever we have a function passed off to somewhere else in our code base, the value of 'this' gets lost. Hence this.teamName is not pointing to team.teamName
        }.bind(this)); //to solve that lost 'this' issue, we use the bind helper. It binds the value to the current context
    }
};

console.log(team.teamSummary());

team = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Squad',
    teamSummary: function() {
        return this.members.map(function(member) {
            return `${member} is on team ${this.teamName}`; //whenever we have a function passed off to somewhere else in our code base, the value of 'this' gets lost. Hence this.teamName is not pointing to team.teamName
        }, this); // another workaround is by passing this as a second parameter of the map function.
    }
};

team = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Squad',
    teamSummary: function() {
        var self = this; //this is another workaround for the lost issue
        return this.members.map(function(member) {
            return `${member} is on team ${self.teamName}`;
        });
    }
};


console.log(team.teamSummary());

//refactor
team = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Squad',
    teamSummary: function() {
        return this.members.map(member => {
            return `${member} is on team ${this.teamName}`;
        });
    }
};
//so in essence, a fat arrow function has no need to bind this, and does not do it.

console.log(team.teamSummary());
