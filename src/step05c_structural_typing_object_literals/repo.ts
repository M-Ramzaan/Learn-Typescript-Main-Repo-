//We are going to create two interfaces that completely interchangeable to each other

interface Ball {
  diameter: number;
}

let myBall: Ball = { diameter: 10 };

interface Sphere {
  diameter: number;
}

let mySphere: Sphere = { diameter: 20 };

//Condition 01

myBall = mySphere;

//Condition 02

mySphere = myBall;

//Theses both interfaces can assign to each other as they have similar structure (Key value pairs.)

// If we add in a type which structurally contains all of the members of Ball and Sphere, then it also can be set to be a ball or sphere.

interface Tube {
  diameter: number;
  length: number;
}

let myTube: Tube = { diameter: 5, length: 30 };

myBall = myTube;
mySphere = myTube;
//myTube = myBall //It is not assignable as it have one access property.
//myTube = mySphere; //It is not assignable as it have one access property.

// Now lets do it Case By Case

//Case when "FRESH"" object literal are assigned to a variable

//Rule: When a fresh object literal is assigned to a variable or passed for a parameter of a non-empty target type,

//it is an error for the object literal to specify properties that don't exist in the target type.

//The rationale for the below two errors is that since the fresh types of the object literals are never captured in variables, static knowledge of the excess or misspelled properties should not be silently lost.

let myName = { name: "Muhammad Ramzan Akram", id: 1 };

//Case 01 (can only assign a type which has the the same properties)

myName = { id: 2, name: "Hassan Shezad" };

//Case 02a ( Error, renamed or missing property)

//myName = { id: 3, fullName: "Waqar" };

//Case 02b (A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:)

let myName2: { id: number; [key: string]: any };

myName2 = { id: 4, fullName: "Waqar" };

//Case 03 (Error, excess property)

//myName = { id: 5, name: "Hassan Shezad", age: 27 };

//Case when STALE object literal are assigned to a variable

let myName3 = { id: 5, name: "Junaid" };

//Case 1 (can only assign a type which has the the same properties, rule same for fresh and stale object)

myName = myName3;

let myName4 = { id: 6, fullName: "kamran" };

//Case 2 (Error, renamed or missing property, rule same for stale and fresh object )

//myName = myName4;

//Case 2b (A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:)

let myName5: { id: number; [key: string]: any };

let myName6 = { id: 7, fullName: "Faisal" };

let myName7 = { id: 8, lastName: "Khan" };

myName5 = myName6; //Ok, `fullName` matched by index signature
myName5 = myName7; //Ok, `lastName` matched by index signature

let myName8 = { id: 9, name: "Hassan Shezad", age: 27 };

myName = myName8;
//myName8 = myName; //Error as myName8 has excess property `age`

/*
More examples from repo
var x: { foo: number };
x = { foo: 1, baz: 2 };  // Error, excess property `baz`

var y: { foo: number, bar?: number };
y = { foo: 1, baz: 2 };  // Error, excess or misspelled property `baz`



var a: { foo: number };
var a1 = { foo: 1, baz: 2 };
a = a1;//No Error

var z: { foo: number, bar?: number };
var z1 = { foo: 1, baz: 2 };
z = z1;//No Error
*/
