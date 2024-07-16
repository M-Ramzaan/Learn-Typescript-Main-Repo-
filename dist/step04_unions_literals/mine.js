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
console.log(myAge.toString());
console.log(myAge.toLocaleLowerCase());
console.log(myAge.toUpperCase());
console.log(myAge.toLocaleLowerCase());
let myAge2 = Math.random() > 0.6 ? "Khan" : 2024 - 1990;
//myAge2.toLowerCase();//Error
if (myAge2 === "Khan") {
    console.log(myAge2.toLowerCase());
}
if (myAge2 === "string") {
    console.log(myAge2.toUpperCase());
}
typeof myAge2 === "string" ? myAge2.toUpperCase() : myAge2.toFixed();
let age;
age = 25;
age = "died";
age = "unknown";
//age = "khan"; //Error as this type is not defined in the union
let zia;
zia = "zia";
//zia = "khan"; //Error
let yourName = Math.random() > 0.6 ? "Hira Khan" : undefined;
if (yourName) {
    yourName?.toUpperCase();
}
//yourName.toUpperCase(); //Error 'yourName' is possibly 'undefined'
yourName?.toUpperCase();
let data;
//We can even combine them
let data2;
export {};
