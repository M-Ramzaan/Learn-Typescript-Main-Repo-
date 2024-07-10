//Type error example

//Missing Semicolon:

let message: string = "Hello, world";

//corrected

let message2: string = "Hello, world";

//Incorrect Variable Declaration:

//var count: number = "five"; //Can't assign string to a number

//Corrected:

var count: number = 5;

//Unterminated String:

//let greeting: string = "Hello, world;

//Corrected:

let greeting2: string = "Hello, world";

//Mismatched Braces:

// function sayHello() {
//     console.log("Hello, world!";
// }

//Corrected:

function sayHello2() {
  console.log("Hello, world!");
}

//Missing Return Type in Function:

function add(a: number, b: number) {
  return a + b;
}

//Corrected:

function add2(a: number, b: number): number {
  return a + b;
}
