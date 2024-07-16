//Online Session for Asynchronous Programming using TypeScript. Sir Mubashir (Panaverse Dao)
//Functions
//Expect Number
function add(a, b) {
    return a + b;
}
//Expect String
function greet(name) {
    return `Hello ${name}`;
}
//Expect Boolean
function powerOutage(light) {
    if (light) {
        console.log(`Light is on`);
    }
    else {
        console.log(`Light is off`);
    }
}
//Expect Array
function customFind(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true;
        }
    }
}
const person = {
    name: "Muhammad Ramzan Akram",
    age: 34,
};
function logPerson(person) {
    console.log(person.name);
}
export {};
