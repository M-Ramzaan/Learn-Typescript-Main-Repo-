//Import via Type Aliased

import { a } from "./first.js";
import { b, c as d } from "./second.js";
import { default as multiply } from "./second.js";

let f: number = a + b + d;
console.log(f); //5 + 10 + 2 = 17

let g: number = multiply(5, 5);
console.log(g); //25
