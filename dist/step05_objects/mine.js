//Type Objects
//Basic Object
let employee1 = {
    name: "Muhammad Ramzan Akram",
    age: 2024 - 1990,
    gender: "Male",
    country: "Pakistan",
    city: "Karachi",
    profession: "Software Developer",
};
let employee2 = {
    gender: "Male",
    country: "Pakistan",
    //city: "Karachi", It is an optional property so no error.
    profession: "Software Developer",
};
let employee3 = {
    gender: "Male",
    country: "Pakistan",
    //city: "Karachi", It is an optional property so no error.
    profession: "Software Developer",
};
let employee4 = {
    name: "Muhammad Ramzan Akram",
    age: "2024 - 1990",
    gender: "Male",
    123: "123", //This is allowed as The key 123 is automatically converted to the string "123" by JavaScript. Thus, { 123: "123" } is equivalent to { "123": "123" }.
    //height:180c;//This give error
};
let employee5 = {
    age: 2024 - 1990,
    123: 123, //This is allowed as The key 123 is automatically converted to the string "123" by JavaScript. Thus, { 123: "123" } is equivalent to { "123": "123" }.
    height: 180,
};
let employee6 = {
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
export {};
