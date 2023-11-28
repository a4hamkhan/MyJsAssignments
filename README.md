# MyJsAssignments

**Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length.**
```
let userInput = prompt("Enter Your Full Name :");
let strippedUsername = userInput.replace(' ', '');
let userLower = strippedUsername.toLowerCase()
let username = "@" + userLower + userLower.length

console.log(username);
```
