//Online Session for Asynchronous Programming using TypeScript. Sir Mubashir (Panaverse Dao)

//Functions

//Expect Number

function add(a: number, b: number): number {
  return a + b;
}

//Expect String

function greet(name: string): string {
  return `Hello ${name}`;
}

//Expect Boolean

function powerOutage(light: boolean): void {
  if (light) {
    console.log(`Light is on`);
  } else {
    console.log(`Light is off`);
  }
}

//Expect Array

function customFind(arr: string[], element: string): void | boolean {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return true;
    }
  }
}

//Expect Object

type TPerson = {
  name: string;
  age: number;
};

const person: TPerson = {
  name: "Muhammad Ramzan Akram",
  age: 34,
};

function logPerson(person: TPerson): void {
  console.log(person.name);
}
