//Type Objects

type Person1 = {
  name: string;
  age: number;
  gender: string;
  country: string;
  city: string;
  profession: string;
};

//Basic Object

let employee1: Person1 = {
  name: "Muhammad Ramzan Akram",
  age: 2024 - 1990,
  gender: "Male",
  country: "Pakistan",
  city: "Karachi",
  profession: "Software Developer",
};

//Optional Properties
type Person2 = {
  gender: string;
  country: string;
  city?: string;
  profession: string;
};

let employee2: Person2 = {
  gender: "Male",
  country: "Pakistan",
  //city: "Karachi", It is an optional property so no error.
  profession: "Software Developer",
};

//Readonly Property
type Person3 = {
  gender: string;
  country: string;
  city?: string;
  readonly profession: string;
};

let employee3: Person3 = {
  gender: "Male",
  country: "Pakistan",
  //city: "Karachi", It is an optional property so no error.
  profession: "Software Developer",
};

// employee3.profession = "Document Controller";//Cannot assign to 'profession' because it is a read-only property

//Index Signature

type stringDictionary = {
  [key: string]: string;
};

let employee4: stringDictionary = {
  name: "Muhammad Ramzan Akram",
  age: "2024 - 1990",
  gender: "Male",
  123: "123", //This is allowed as The key 123 is automatically converted to the string "123" by JavaScript. Thus, { 123: "123" } is equivalent to { "123": "123" }.
  //height:180c;//This give error
};

type stringNumberDictionary = {
  [key: string]: number;
};

let employee5: stringNumberDictionary = {
  age: 2024 - 1990,
  123: 123, //This is allowed as The key 123 is automatically converted to the string "123" by JavaScript. Thus, { 123: "123" } is equivalent to { "123": "123" }.
  height: 180,
};

//Methods in Objects
type Person4 = {
  name: string;
  age: number;
  greet: () => void;
};

let employee6: Person4 = {
  name: "Muhammad Ramzan Akram",
  age: 2024 - 1990,
  greet: function greet() {
    console.log("Hello my name is " + this.name);
  },
};

employee6.greet();

//Accessing Objects

//Dot Notation

console.log(employee1.profession);

//Bracket Notation

console.log(employee2["country"]);

//Accessing all keys

let keys = Object.keys(employee6);
console.log(keys);
