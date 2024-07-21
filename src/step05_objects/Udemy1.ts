//Udemy course 01 Objects

//Object as a function

function myName(Person: { firstName: string; lastName: string }): void {
  console.log(`${Person.firstName} ${Person["lastName"]}`);
}

//Object in a variable

let coordinates: { x: number; y: number } = { x: 100, y: 200 };
let studentsId: { std1Id: number; std2Id: number; std3Id: number } = {
  std1Id: 1,
  std2Id: 2,
  std3Id: 3,
};

//Object in a function
function studentsId1(): { std1Id: number; std2Id: number; std3Id: number } {
  return {
    std1Id: Math.random(),
    std2Id: Math.random(),
    std3Id: Math.random(),
  };
}

//Excess Property Checking
//Structural Typing
//Call upper made function Myname with excess property

myName({ firstName: "Muhammad Ramzan", lastName: "Akram" }); //Ok
//myName({ firstName: "Muhammad Ramzan", lastName: "Akram", age: 34 }); //Error as age is an excess property
//Solve this via below variableR declaration
let ramzan: { firstName: string; lastName: string; age: number } = {
  firstName: "Muhammad Ramzan",
  lastName: "Akram",
  age: 34,
};

let ramzan1: { firstName: string; age: number } = {
  firstName: "Muhammad Ramzan",
  age: 34,
};
myName(ramzan); //It give no error as ramzan have the excess property age
//myName(ramzan1); //It give no error as ramzan have the two property but it dont have the last name.

//Type Alias
//Without Type Alias
let coordinates1: { x: number; y: number } = { x: 100, y: 200 };

function myCoordinates(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}

function myCoordinates1(point: { x: number; y: number }): {
  x: number;
  y: number;
} {
  return { x: point.x * 2, y: point.y * 2 };
}

//With Type Alias

type Coordinates = {
  x: number;
  y: number;
};

let myCoordinates2: Coordinates = { x: 100, y: 200 };

function myCoordinates3(): Coordinates {
  return { x: Math.random(), y: Math.random() };
}

function myCoordinates4(point1: Coordinates): Coordinates {
  return { x: point1.x * 2, y: point1.y * 2 };
}

//Nested Objects

type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: {
    producer: string;
    writer: string;
  };
};

const mySong: Song = {
  title: "Suraj hoa Madham",
  artist: "Kajol",
  numStreams: 1000,
  credits: {
    producer: "Sharukh Khan",
    writer: "Kumar Sanu",
  },
};
function calcPayout(myBill: Song): number {
  return myBill.numStreams * 0.0033;
}

function printSong(mySong: Song): void {
  console.log(`${mySong.title} - ${mySong.artist}`);
}

const julyBill: number = calcPayout(mySong);
console.log(julyBill);
printSong(mySong);
