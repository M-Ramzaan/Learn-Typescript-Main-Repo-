// Import via variable Name
import { a } from "./first.js";
import { b, c } from "./second.js";
let d = a + b + c;
console.log(d); //17
//import via default
import multiply from "./second.js";
console.log(multiply(5, 5)); //25
