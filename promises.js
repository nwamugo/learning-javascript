 // A promise exists in 3 possible states
 // unresolved, resolved, and rejected
 // By default, a promise exists in the unresolved state (waiting for something to finish)
 // resolved means something finished and it all went ok
 // rejected means something finished and something went bad
 //
 // resolved ... then
 // rejected ... catch

 // I want to create a new promise
promise = new Promise((resolve, reject) => {
    // let's simulate a long running process
    setTimeout(() => {
        resolve();
    }, 3000);
    // or
    // reject(); This will turn the promise into the rejected state
 });

promise
  .then(() => console.log('finally finished'))
  .then(() => console.log('I was also ran!!!'))
  .catch(() => console.log('uh oh!!'));



//fetch helper
url = "https://jsonplaceholder.typicode.com/posts/";
fetch(url)
  // .then(data => console.log(data)) //with fetch, this does not actually contain our data. This is an object that represents the response that we got back from the server
  .then(response => response.json()) // gets our data
  .then(data => console.log(data)) //now we can see our data gotten above
  .catch(error => console.log(error));