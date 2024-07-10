//Const and Let
// In TypeScript (and JavaScript), const and let are keywords used to declare variables, each with different characteristics regarding scope and mutability.
//let
//Scope: Variables declared with let are block-scoped, meaning they are only accessible within the block (e.g., { ... }) in which they are defined.
//Reassignable: Variables declared with let can be reassigned new values.
//Example:
let count = 1;
if (true) {
    let count = 2; // This 'count' is scoped to the block
    console.log(count); // Output: 2
}
console.log(count); // Output: 1
// Reassigning the variable
count = 3;
console.log(count); // Output: 3
//const;
//Scope: Like let, variables declared with const are also block-scoped.
//Immutable: Variables declared with const cannot be reassigned. However, if the variable is an object or array, the contents of the object or array can still be modified.
//Example:
const name = "Alice";
console.log(name); // Output: Alice
// Attempting to reassign will cause an error
// name = "Bob"; // Error: Assignment to constant variable.
// For objects and arrays
const person = { name: "Alice", age: 25 };
person.age = 26; // This is allowed
console.log(person); // Output: { name: "Alice", age: 26 }
const numbers = [1, 2, 3];
numbers.push(4); // This is allowed
console.log(numbers); // Output: [1, 2, 3, 4]
export {};
//Summary
// let: Use let when you need a variable that can be reassigned and is scoped to the block in which it's defined.
// const: Use const when you need a variable that should not be reassigned, ensuring immutability of the variable binding itself, while still allowing the modification of object properties or array elements.
// Choosing between let and const helps ensure your code is more predictable and easier to understand by clearly indicating the intended use of variables.
