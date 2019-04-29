function getMessage() {
    const year = new Date().getFullYear();

    return `The year is ${year - 2}`; //we can put any valid JS expression within the curly brackets
}

console.log(getMessage());


//PHP
// $data = '{"device_id":"'.$device_id.i","guid":"'.$guid.'","username":"'.$username.'",'"}';



const device_id = 4;
const guid = 20;
const username = "hello";

//const data = '{"device_id":"' + device_id + '","guid":"' + guid + '","username":"' + username + '"}';

//refactor
const data = `{"device_id":"${device_id}","guid":"${guid}","username":"${username}"}`;

console.log(data);