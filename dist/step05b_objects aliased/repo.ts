//Anonymous Object

let teacher: {
  name: string;
  experience: number;
} = { name: "Muhammad Ramzan Akram", experience: 10 };

//Object Aliased

type Student = {
  name: string;
  age: number;
};

let student: Student = {
  name: "Muhammad Ramzan Akram",
  age: 2024 - 1990,
};

console.log(student.name); //Dot Notation
console.log(student["age"]); //Bracket Notation

//Interface

interface Manager {
  name: string;
  age: number;
  department: string;
  city?: string;
}

let manager: Manager = {
  name: "Muhammad Ramzan Akram",
  age: 2024 - 1990,
  department: "IT",
  city: "Karachi",
};
