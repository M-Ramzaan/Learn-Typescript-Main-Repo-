//Topic No 01 - Variables
// We can store values by declaring variables as below
// let firstName: string = "Muhammad Ramzan";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// let favColor: string = "Blue";
// console.log(favColor);
// favColor = "green";
// console.log(favColor);
// favColor = 25 //Error as number is not assigned to string.
// The number of casing styles used to declare variables in coding can vary depending on the programming language and the conventions followed by developers. However, there are several common casing styles:
// CamelCase: In CamelCase, the first letter of each word is capitalized except for the first word. For example: myVariableName.
// PascalCase (also known as UpperCamelCase): Similar to CamelCase, but with the first letter of each word capitalized, including the first word. For example: MyVariableName.
// snake_case (or snake_case): All lowercase letters with words separated by underscores. For example: my_variable_name.
// kebab-case (or spinal-case): Words are separated by hyphens. For example: my-variable-name.
//We can use it many times as we want or we can also change its value as we want.
//1a- Rule for Naming Variables;
//1-Variable name cant start from number
//2-Variables can only contain. Letters, Numbers, underscores_ and Dollar$ signs.
//3-We also cant name variable as reserve words like, console, function, new and name.
//4-We can name our variable as name but name is a keyword so we cannot use it same goes for start with upper case like Person we also cannot use it as we use it on specific cases in Object Oriented Programming.
//5- We use constant number in uppercase like PI as PI has constant value.
//6- We ensure that we always use our variables names link to the name that we use that is for others developers when they read our code.
//Topic No 02 Data Types
// {
//1-Number
//   let age: number = 23; // Not confirmed but it can store number upto 2^53
//2-String
//   let firstName: string = "Ramzan";
//3-Boolean
//   let fullAge: boolean = true;
//4-Undefined
//   let children: undefined;
//5-Null
//let emptyValue: null = null; // Also means empty value
//6-Symbol
//let uniqueId: symbol = Symbol('id'); // Unique value, not very useful for us
//7-Bigint
let largeNumber = 9007199254740991n; // Large integer number value. Stores numbers larger than 2^53
//8-Any
// Used when you don't want a particular variable to have a specific type.
let randomValue = 23;
randomValue = "Ramzan";
randomValue = 1990;
randomValue = true;
//9-Unknown
// Similar to any but safer as it requires explicit type assertions.
let userValue = 23;
userValue = 43;
userValue = true;
//10-Void
// Used for functions that do not return a value.
function logMessage(message) {
    console.log(message);
    //return message //give error as void function not return a value
}
//11-Never
//Represents the type of values that never occur. Typically used for functions that throw exceptions or have infinite loops.
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
//12-Array
// Can be of any type using the [] notation or generic type Array<type>.
let numbers = [1, 2, 3, 4, 5];
let strings = ["one", "two", "three"];
//13-Tuple
// Allows you to express an array with a fixed number of elements whose types are known.
let person = ["Ramzan", 23];
//14-Enum
// A way of giving more friendly names to sets of numeric values.
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
//}
//1-Boolean
// {
//   let data1: boolean = true;
//   console.log(data1);
//   console.log(typeof data1);
// }
//2-String
// {
//   let data2: string = "Muhammad Ramzan Akram";
//   console.log(data2);
//   console.log(typeof data2);
// }
//3-Number
// {
//   let data3: number = 1990;
//   console.log(data3);
//   console.log(typeof data3);
// }
//4-Undefined
// {
//   let data4: undefined;
//   console.log(data4);
//   console.log(typeof data4);
// }
//5-Null
// {
//   let data5: null;
//console.log(null);
//   console.log(typeof null); //It give null type as object it is bug but this bug is not fixed due to legacy which we cover later in this courses.
// }
//Unknown type example
// Simple Scenario
// A function takes either a product name (string) or a product ID (number) along with its price and adds it to the total cart price.
function addItemToCart(item, price) {
    if (typeof item === "string") {
        console.log(`Adding product by name: ${item}`);
    }
    else if (typeof item === "number") {
        console.log(`Adding product by ID: ${item}`);
    }
    else {
        console.log("Invalid item type. Please provide a product name or ID.");
        return 0;
    }
    return price;
}
function calculateTotal(cart) {
    let total = 0;
    for (const cartItem of cart) {
        total += addItemToCart(cartItem.item, cartItem.price);
    }
    return total;
}
// Example usage:
const shoppingCart = [
    { item: "Apple", price: 1.2 },
    { item: 12345, price: 0.8 },
    { item: "Banana", price: 0.5 },
];
const totalPrice = calculateTotal(shoppingCart);
console.log(`Total cart price: $${totalPrice.toFixed(2)}`); // Output: Total cart price: $2.50
export {};
