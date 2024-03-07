function makeAjaxRequest(url, method) {
    if (!method) {
        method = 'GET';
    }
    //logic to make the request
}

makeAjaxRequest('google.com');
makeAjaxRequest('google.com', 'GET');
makeAjaxRequest('google.com', 'POST');


// refactor
// to make use of default function arguments, instead of the tedious
// check we did with the if statement above

function makeAjaxRequest(url, method = 'GET') {
    //logic to make the request
}

//if you want the method to deliberately be empty, then
makeAjaxRequest('google.com', null); // method will not be reassigned to default


//if you use undefined instead of null, method will yes be reassigned to default
makeAjaxRequest('google.com', undefined);

// With default parameters, 0 or "" or null are valid values and will not
// be replaced by the default value.

// Below is a constructor function
function User(id) {
    this.id = id;
}

// generate random id
function generateId() {
    return Math.random() * 999999;
}

function createAdminUser(user) {
    user.admin = true;
    return user;
}

createAdminUser(new User(generateId()));

// refactor to accomodate whether a user parameter is passed in or not
function createAdminUser(user = new User(generateId())) {
    user.admin = true;
    return user;
}

createAdminUser();

//If I have a user already, I could pass in the user as well
const user = new User(generateId());
createAdminUser(user);


function getPonies(size = defaultSize(), page = size - 1) {
    server.get(size, page)
}


const { timeout = 1000 } = httpOptions;
// timeout will be the value of httpOptions.timeout if it exists
// or 1000 if not