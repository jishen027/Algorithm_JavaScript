// Write a function CreateHelloWorld. It should return a new function that always returns "Hello World".
// Example:
// var myFunction = CreateHelloWorld();
// myFunction(); // "Hello World"
// myFunction(); // "Hello World"

function CreateHelloWorld() {
  return function() {
    return "Hello World";
  }
}

const f = CreateHelloWorld();
console.log(f());