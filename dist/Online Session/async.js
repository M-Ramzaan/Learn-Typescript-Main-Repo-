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
/*
function washing(callback: () => void) {
  console.log(`Washing Started...`);
  setTimeout(() => {
    console.log(`Washing Completed...`);
    callback();
  }, 5000);
}

function soaking(callback: () => void) {
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

console.log(`Folding Laundry`);

//Calling these functions

washing(() => {
  soaking(() => {
    drying();
  });
});

console.log(`I am making Biryani.`);
*/
//Making same above functions but using Promise here
function washing() {
    console.log(`Washing Started...`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Washing Done...`);
        }, 5000);
    });
}
function soaking() {
    console.log(`Soaking Started`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Soaking Completed...`);
            //reject(`Soaking Failed!!!`);
        }, 3000);
    });
}
function drying() {
    console.log(`Drying Started...`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Drying Completed...`);
        }, 2000);
    });
}
//Handle promises via .then and .catch
/*
washing()
  .then((value) => {
    console.log(value);
    return soaking();
  })
  .then((value) => {
    console.log(value);
    return drying();
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(`Error Occured`);
  });
*/
//Handle promises via async and await
async function runWashingMachine() {
    try {
        const result1 = await washing();
        console.log(result1);
        const result2 = await soaking();
        console.log(result2);
        const result3 = await drying();
        console.log(result3);
    }
    catch (error) {
        console.log(error);
    }
    finally {
        console.log(`I will run anyway.`);
    }
}
console.log(`Foldning Laundry`);
runWashingMachine();
console.log(`I am making Biryani.`);
export {};
