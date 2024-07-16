//Udemy course 01 Objects
import myName from "../step05_objects/Udemy1.js";
//Structural Typing
//Call upper made function Myname with excess property
myName({ firstName: "Muhammad Ramzan", lastName: "Akram" }); //Ok
//myName({ firstName: "Muhammad Ramzan", lastName: "Akram", age: 34 }); //Error as age is an excess property
//Solve this via below variableR declaration
let ramzan = {
    firstName: "Muhammad Ramzan",
    lastName: "Akram",
    age: 34,
};
let ramzan1 = {
    firstName: "Muhammad Ramzan",
    age: 34,
};
myName(ramzan); //It give no error as ramzan have the excess property age
//myName(ramzan1); //It give no error as ramzan have the two property but it dont have the last name.
