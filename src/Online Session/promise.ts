//Promise Basic Syntax
/*
//Resolve
const promise = new Promise((resolve, reject) => {
  resolve("Success");
});

//.then Method (This method is used only in case of resolve)

promise.then((value) => {
  console.log(value);
});
*/

import { promises } from "dns";
import { resolve } from "path";

//Reject
/*
const promise = new Promise((resolve, reject) => {
  reject("Failed!!!");
});

//.catch Method (This method is used only in case of reject)

promise.catch((error) => {
  console.log(error);
});
*/
//Things to remember promise has three states
//1-Pending
//2-Resolved
//3-Rejected

//Example
//Assume you take money form your friend and he give you some money

const returnMoney = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve(`Money Returned`);
    reject(`Money not paid.`);
  }, 2000);
});

returnMoney
  .then((value) => {
    console.log(value);
    console.log(`Thanks for your help.`);
  })
  .catch((value) => {
    console.log(value);
    console.log(`Sorry! i can't pay the money right now.`);
  });
