/*
//Asynchronous Programming
console.log(`One`);

//One way to do that

setTimeout(function () {
  console.log(`Hello i am a delay code.`);
}, 2000);

//Second way to do that

function greet() {
  console.log(`Hi! Muhammad Ramzan Akram.`);
}

setTimeout(greet, 2500);

console.log(`Two`);
*/

//Example 01 (Washing Clothes)

//In below code callback give error which is change via following commands

/*If you want to ignore this error and allow the any type for parameters, you can do so by changing the TypeScript compiler options. There are a few ways to achieve this:

Option 1: Disable noImplicitAny
You can disable the noImplicitAny option in your tsconfig.json file. This will allow parameters to implicitly have the any type without causing an error.

In your tsconfig.json file, set noImplicitAny to false:*/

function washing(callback) {
  console.log(`Washing Started...`);
  setTimeout(() => {
    console.log(`Washing Completed...`);
    callback();
  }, 5000);
}

function soaking(callback) {
  console.log(`Soaking Started...`);
  setTimeout(() => {
    console.log(`Soaking Completed...`);
    callback();
  }, 3000);
}

function drying() {
  console.log(`Drying Started...`);
  setTimeout(() => {
    console.log(`Drying Completed...`);
  }, 2000);
}

//Calling these functions

washing(() => {
  soaking(() => {
    drying();
  });
});
