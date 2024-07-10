//Strong Typing
// Strong typing in TypeScript ensures that variables and functions have explicitly defined types, which can help prevent type-related errors. Here are a few examples:

//Example 1: Variable Declaration

let message: string = "Hello, world"; // Strongly typed as a string
let count: number = 42; // Strongly typed as a number
let isActive: boolean = true; // Strongly typed as a boolean

//Example 2: Function Parameters and Return Types

function add(a: number, b: number): number {
  return a + b;
}

let result: number = add(5, 3); // result is strongly typed as a number

//Example 3: Interfaces

interface Person {
  name: string;
  age: number;
  isActive: boolean;
}

let person: Person = {
  name: "Alice",
  age: 30,
  isActive: true,
}; // person is strongly typed to match the Person interface

//Example 4: Arrays

let numbers: number[] = [1, 2, 3, 4, 5]; // Strongly typed as an array of numbers
let names: string[] = ["Alice", "Bob", "Charlie"]; // Strongly typed as an array of strings

//Example 5: Generics (We will read it later)

function identity<T>(arg: T): T {
  return arg;
}

let output1: number = identity<number>(42); // output1 is strongly typed as a number
let output2: string = identity<string>("Hello"); // output2 is strongly typed as a string

//Example 6: Classes (We will read it later)

class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(distance: number): void {
    console.log(`${this.name} moved ${distance} meters.`);
  }
}

let dog: Animal = new Animal("Dog");
dog.move(10); // Strongly typed instance of Animal class
// These examples demonstrate strong typing in TypeScript, where explicit types are defined for variables, function parameters and return types, interfaces, arrays, generics, and classes. This approach helps catch type-related errors during development and improves code readability and maintainability.
