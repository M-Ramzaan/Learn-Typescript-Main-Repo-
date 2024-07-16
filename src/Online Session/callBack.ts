function parentFunction(func: () => void) {
  console.log(`Hi! I am the parent function`); //1
  func(); //Calling the function
}

//One way to do that

function childFunction() {
  console.log(`Hi! I am the child function 1.`); //2
}

parentFunction(childFunction);

//Second way to do that

parentFunction(() => {
  console.log(`Hi! I am the child function 2.`); //3
});

//Attributes that need to remember that you know its a call back function

//1-When you see a function inside the round brackets of a function it means its a call back function.

//2-We have to call a function like functionName() this but in case of a call back function we just call a parent function like parentFunction() inside this we just write the name of the callback function like we did above in parentFunction(childFunction), here we just call parentFunction() not the childFunction inside it.

//3- Call back function is not a nested function as it is pass as parameter in the parent function. Nested function is a function that is passed inside the function body not in the space of parameter.

//3-
