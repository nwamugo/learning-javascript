// Given a non-negative integer, return an array or a list of the individual digits in order.

function isInteger(x) {
  return x % 1 === 0;
}

function digitize(n) {
  if(typeof(n) === "number" && isInteger(n) && n >= 0) {
    var number = n;
  } else {
    return "Use positive integers only"
  }

  var digits = number.toString().split('');
  var realDigits = digits.map(Number);

  return realDigits;
}




// Write a mySort function which takes in an array integers, and should return an array of the inputed integers sorted such that the odd numbers come first and even numbers come last.
function mySort(nums) {
  var trimmednums = [];
  for (var i = 0; i < nums.length; i++) {
    if(typeof(nums[i]) === "number") {
      var data = parseInt(nums[i]);
      trimmednums.push(data);
    }
  }
  return trimmednums.sort(function(a, b) {
    return b % 2 - a % 2 || a - b;
  });
}



/*Write a function named power that accepts two arguments, a and b and calculates a raised to the power b.

Example

power(2, 3) => 8
Note: Don't use

2 ** 3
and don't use

Math.pow(2, 3)*/

let power = (a,b) => { // a function to calculate the power of a raised to b.
    if (b <= 1) { // the base case to check against infinite recursion
        return a;
    } else {
        return a * power(a, b-1); // the recursive call to the function to calculate the power of a raised to b.
    }
};
power(3, 4);





/* Write a function that counts how many different ways you can make change for an amount of money, given an array of coin denominations. For example, there are 3 ways to give change for 4 if you have coins with denomination 1 and 2:

1+1+1+1, 1+1+2, 2+2.
The order of coins does not matter:

1+1+2 == 2+1+1
Also, assume that you have an infinite amount of coins.

Your function should take an amount to change and an array of unique denominations for the coins:

  countChange(4, [1,2]) // => 3
  countChange(10, [5,2,3]) // => 4
  countChange(11, [5,7]) //  => 0
*/

function countChange (money,coins) {
  function countChangeSub(money,coins,n) {
    if(money == 0) return 1;
    if(money< 0 || coins.length == n) return 0;
    return countChangeSub(money-coins[n],coins,n) + countChangeSub(money,coins,n + 1);
  }
  return countChangeSub(money,coins,0);
}



//Finish the function numberToOrdinal, which should take a number and return it as a string with the correct ordinal indicator suffix (in English). For example, 1 turns into "1st".

//For the purposes of this challenge, you may assume that the function will always be passed a non-negative integer. If the function is given 0 as an argument, it should return '0' (as a string).

function numberToOrdinal(n) {
  // Finish me
  var j = n % 10,
      k = n % 100;
  if (n == 0) {
      return "0";
  }
  if (j == 1 && k != 11) {
      return n + "st";
  }
  if (j == 2 && k != 12) {
      return n + "nd";
  }
  if (j == 3 && k != 13) {
      return n + "rd";
  }
  return n + "th";
}



/*
Given two numbers X and Y, write a function that:
1 returns even numbers between X and Y, if X is greater than Y else it returns odd numbers between x and y
For instance, take the integers 10 and 2 . the function would return all the even numbers between 2 and 10.
*/
const number_game = (x, y) => {
  //   Code here
  let numArray = [];

  if(x === y) {
    return numArray;
  }
  if(x > y) {
    for(let i = y + 1; i < x; i++) {
      if(i % 2 === 0) {
        numArray.push(i)
      }
    }
  }
  if(x < y) {
    for(let i = x + 1; i < y; i++) {
      if (i % 2 !== 0) {
        numArray.push(i);
      }
    }
  }
  return numArray;
}


/*
Object Oriented Tests
For this challenge, you are going to build a mock comments section.

Design
We're going to focus on two aspects:

Users
Users come in 3 flavors, normal users, moderators, and admins. Normal users can only create new comments, and edit the their own comments. Moderators have the added ability to delete comments (to remove trolls), while admins have the ability to edit or delete any comment.
Users can log in and out, and we track when they last logged in
Comments
Comments are simply a message, a timestamp, and the author.
Comments can also be a reply, so we'll store what the parent comment was.
Your Challenge
This is challenge is not about building a fully functional API, but more about focusing on the design from an object-oriented point-of-view.

We've provided the basic API (which is incomplete), which we would like you to complete being aware of the following Object-Oriented Programming concepts:

Encapsulation of Properties
All classes should have no publicly accessible fields
You should make sure you at least "hide" the required fields, for example, using _name instead of _name. Alternatively, feel free to use a better solution as extra credit.
The method-based API is provided. These must be completed as-is.
Additional methods are allowed, though remember to keep read-only properties read-only.
Instantiation
Classes should be instantiated with properties (as provided), to create instances with values already assigned.
User/Moderator/Admin defaults:
Should be marked as not logged in
Should return null for the last logged in at property
Comment defaults:
Should set the current timestamp for the created at property upon instantiation
Replied To is optional, and should be null if not provided.
Inheritance & Access Control
Note: for the sake of simplicity, you can simply treat object equality as "equal", though more complete solutions will also pass.

User
Users can be logged in and out.
When logging in, set the lastLoggedInAt timestamp. Do not modify this timestamp when logging out
Users can only edit their own comments
Users cannot delete any comments
Moderator is a User
Moderators can only edit their own comments
Moderators can delete any comments
Admin is both a User and a Moderator
Admins can edit any comments
Admins can delete any comments
Composition
Comments contain a reference to the User who created it (author)
Comments optionally contain a reference to another comment (repliedTo)
When converting to a string (toString), the following format is used:
No replied to:
message + " by " + author.name
With replied to:
message + " by " + author.name + " (replied to " + repliedTo.author.name + ")"
Beyond these basics, you are free to add to the API, but only these concepts will be scored automatically.
*/

/**
 * Using ES6-style classes
 * See below for an alternative ES5-prototype solution setup
 */

// class User {
//   constructor(name) {}
//   isLoggedIn() {}
//   getLastLoggedInAt() {}
//   logIn() {}
//   logOut() {}
//   getName() {}
//   setName(name) {}
//   canEdit(comment) {}
//   canDelete(comment) {}
// }

// class Moderator {}

// class Admin {}

// class Comment {
//   constructor(author, message, repliedTo) {}
//   getMessage() {}
//   setMessage(message) {}
//   getCreatedAt() {}
//   getAuthor() {}
//   getRepliedTo() {}
//   toString() {}
// }

// /**************************
//  * Alternative using ES5 prototypes
//  * Or feel free to choose your own solution format
//  **************************

function User(name) {
  var _name = name;
  var _state = false;
  var _lastLoggedInAt = null;

  this.isLoggedIn = function() {
    return _state;
  };
  this.getLastLoggedInAt = function() {
    return ((_lastLoggedInAt === null) ? null : _lastLoggedInAt);
  };
  this.logIn = function() {
    _lastLoggedInAt = null;
    _state = true;
    _lastLoggedInAt = Date();
    return;
  };
  this.logOut = function() {
    return _state = false;
  };
  this.getName = function() {
    return _name;
  };
  this.setName = function(name) {
    _name = name;
  };
  this.canEdit = function(comment) {
    return ((comment.getAuthor().getName() === this.getName()) ? true : false);
  };
  this.canDelete = function(comment) {
    return false;
  }
}



function Moderator(name) {
  User.call(this, name);
  this.canDelete = function(comment) {
    return true;
  }
}
Moderator.prototype = Object.create(User.prototype);


function Admin(name) {
  Moderator.call(this, name);
  this.canEdit = function(comment) {
    return true;
  }
}
Admin.prototype = Object.create(Moderator.prototype);



function Comment(author, message, repliedTo = null) {
  var _author = author;
  var _message = message;
  var _repliedTo = repliedTo;

  this.getMessage = function() {
    return _message;
  };
  this.setMessage = function(message) {
    return _message = message;
  };

  this.getAuthor = function() {
    return _author;
  };
  this.getRepliedTo = function() {
    return _repliedTo;
  };

  this.getCreatedAt = function () {
    return Date();
  };

  this.toString = function() {
    return ((_repliedTo === null) ? message + " by " + _author.getName() : message + " by " + _author.getName() + " (replied to " + this.getRepliedTo().getAuthor().getName() + ")");
  }
};


// ***************************/