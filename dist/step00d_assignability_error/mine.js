//Assignability Error
// An assignability error occurs in TypeScript when you try to assign a value to a variable that is not compatible with the declared type. Here's an example of a common assignability error:
//let count: number = "five"; // Error: Type 'string' is not assignable to type 'number'
//In this example, the variable count is declared as a number, but a string value "five" is being assigned to it, causing an assignability error.
//Corrected version:
let count = 5;
// let person: Person = {
//     name: "Alice",
//     age: "twenty-five" // Error: Type 'string' is not assignable to type 'number'
//};
// In this example, the age property is expected to be a number, but a string value "twenty-five" is being assigned.
//Corrected version:
let person = {
    name: "Alice",
    age: 25,
};
export {};
//These examples highlight common assignability errors, where the assigned value does not match the expected type.
