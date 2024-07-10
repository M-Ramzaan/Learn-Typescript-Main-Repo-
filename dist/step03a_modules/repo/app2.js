//import all from first and second ts files
import * as math from "./first.js";
import * as multiply from "./second.js";
let d = math.a + multiply.b + multiply.c;
console.log(d); //18
let e = multiply.default(5, 5);
console.log(e); //25
