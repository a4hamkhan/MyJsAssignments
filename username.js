let userInput = prompt("Enter Your Full Name :");
let strippedUsername = userInput.replace(' ', '');
let userLower = strippedUsername.toLowerCase()
let username = "@" + userLower + userLower.length

console.log(username);
