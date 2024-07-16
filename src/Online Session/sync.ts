//Synchronous Programming

console.log(`Start`);

let userName: string = "Muhammad Ramzan Akram";
console.log(userName);

let age: number = 2024 - 1990;
if (age < 18) {
  console.log(`You are not an adult.`);
} else {
  console.log(`You are an adult`);
}

let bestFriends: string[] = ["Hassan", "Sheraz", "Waqar", "Junaid"];
for (let i = 0; i < bestFriends.length; i++) {
  console.log(`${bestFriends[i]} is my best friend.`);
}

type TCar = {
  model: string;
  year: number;
  isUsed: boolean;
  brand: string;
};

const car: TCar = {
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
