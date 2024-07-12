//Object

let teacher = {
  name: "Zeeshan",
  experience: "10",
};

console.log(teacher.name);
console.log(teacher["experience"]);

//Type Objects

let Student: {
  name: string;
  age: number;
};

Student = {
  name: "Ramzan",
  age: 34,
};

console.log(Student.name);
console.log(Student["age"]);
