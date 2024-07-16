//Udemy course 01 Objects
//Object as a function
export default function myName(Person) {
    console.log(`${Person.firstName} ${Person["lastName"]}`);
}
//Object in a variable
let coordinates = { x: 100, y: 200 };
let studentsId = {
    std1Id: 1,
    std2Id: 2,
    std3Id: 3,
};
//Object in a function
function studentsId1() {
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
let ramzan = {
    firstName: "Muhammad Ramzan",
    lastName: "Akram",
    age: 34,
};
let ramzan1 = {
    firstName: "Muhammad Ramzan",
    age: 34,
};
myName(ramzan); //It give no error as ramzan have the excess property age
//myName(ramzan1); //It give no error as ramzan have the two property but it dont have the last name.
//Type Alias
//Without Type Alias
let coordinates1 = { x: 100, y: 200 };
function myCoordinates() {
    return { x: Math.random(), y: Math.random() };
}
function myCoordinates1(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
let myCoordinates2 = { x: 100, y: 200 };
function myCoordinates3() {
    return { x: Math.random(), y: Math.random() };
}
function myCoordinates4(point1) {
    return { x: point1.x * 2, y: point1.y * 2 };
}
const mySong = {
    title: "Suraj hoa Madham",
    artist: "Kajol",
    numStreams: 1000,
    credits: {
        producer: "Sharukh Khan",
        writer: "Kumar Sanu",
    },
};
function calcPayout(myBill) {
    return myBill.numStreams * 0.0033;
}
function printSong(mySong) {
    console.log(`${mySong.title} - ${mySong.artist}`);
}
const julyBill = calcPayout(mySong);
console.log(julyBill);
printSong(mySong);
