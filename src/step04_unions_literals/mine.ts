//Union Literals
//string & null

let myName: string | null;

myName = "Muhammad Ramzan Akram";
console.log(myName);

myName = null;
console.log(myName);

//myName = 1875;
console.log(myName); //Error Type 'number' is not assignable to type 'string'.

//myName = undefined;
console.log(myName); //Error Type 'undefined' is not assignable to type 'string | null'

//string & number

let myAge: string | number;

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

let age: number | "died" | "unknown";

age = 25;
age = "died";
age = "unknown";
//age = "khan"; //Error as this type is not defined in the union

let zia: "zia";
zia = "zia";
//zia = "khan"; //Error

let yourName = Math.random() > 0.6 ? "Hira Khan" : undefined;

if (yourName) {
  yourName?.toUpperCase();
}

//yourName.toUpperCase(); //Error 'yourName' is possibly 'undefined'

yourName?.toUpperCase();

//We can also define a type alias

type rawData = boolean | number | string | null | undefined;

let data: rawData;

//We can even combine them
let data2: rawData | symbol | bigint;
