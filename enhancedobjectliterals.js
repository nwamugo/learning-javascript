// Enhanced Object Literals are all about writing out object
// literals in a more compact fashion


function createBookShop(inventory) {
    return {
        inventory: inventory,
        inventoryValue: function() {
            return this.inventory.reduce((total, book) => total + book.price, 0);
        },
        priceForTitle: function(title) {
            return this.inventory.find(book => book.title === title).price;
        }
    };
}


//refactor
//whenever we make reference to a key and a value with the
//exact same name, with es6 we can condense this down to
//just one of the words
//
//Also if we have a key-value pair where the value is a
//function, we can omit both the colon and the function key
//word



function createBookShop(inventory) {
    return {
        inventory,
        inventoryValue() {
            return this.inventory.reduce((total, book) => total + book.price, 0);
        },
        priceForTitle(title) {
            return this.inventory.find(book => book.title === title).price;
        }
    };
}




const inventory = [
  { title: 'Harry Potter', price: 10 },
  { title: 'Eloquent JavaScript', price: 15 }
];

const bookShop = createBookShop(inventory);

console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('Harry Potter'));


//jquery below
function saveFile(url, data) {
    $.ajax({ method: 'POST', url: url, data: data });
}

//refactor
function saveFile(url, data) {
    $.ajax({ url, data, method: 'POST' }); //by convention the shortened syntaxes start the object for legibility
}

const url = "http://fileupload.com";
const data = { color: 'red' };

saveFile(url, data);
