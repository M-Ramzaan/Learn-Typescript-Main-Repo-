//Synchronous Programming
console.log(`Start`);
let userName = "Muhammad Ramzan Akram";
console.log(userName);
let age = 2024 - 1990;
if (age < 18) {
    console.log(`You are not an adult.`);
}
else {
    console.log(`You are an adult`);
}
let bestFriends = ["Hassan", "Sheraz", "Waqar", "Junaid"];
for (let i = 0; i < bestFriends.length; i++) {
    console.log(`${bestFriends[i]} is my best friend.`);
}
const car = {
    model: "Mustang",
    year: 2024,
    isUsed: true,
    brand: "Ford",
};
console.log(car.model);
console.log(car["year"]);
console.log(car.isUsed);
console.log(car["brand"]);
console.log(`The End`);
export {};
