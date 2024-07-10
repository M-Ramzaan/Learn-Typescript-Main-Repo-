//Union Literals
//string & null
let myName;
myName = "Muhammad Ramzan Akram";
console.log(myName);
myName = null;
console.log(myName);
//myName = 1875;
console.log(myName); //Error Type 'number' is not assignable to type 'string'.
//myName = undefined;
console.log(myName); //Error Type 'undefined' is not assignable to type 'string | null'
//string & number
let myAge;
myAge = 2024 - 1990;
console.log(myAge);
//myAge = myAge.toLowerCase(); //Error Property 'toLowerCase' does not exist on type 'number'
myAge = "I don't know.";
console.log(myAge.toLocaleLowerCase());
console.log(myAge.toUpperCase());
console.log(myAge.toLocaleLowerCase());
export {};
