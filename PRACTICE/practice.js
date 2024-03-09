 const accountId = 12345;
let fullName ="Hardik";
var accountEmail ="abc@gamil.com";

// //console.log(accountEmail);
// console.table([accountId,fullName,accountEmail]);

// // Prefer not to use var
// // beacause of issue in block scope and fucntional scope
// let name = "chiranjeev"
// let age = 20
// let isLoggedIn = true
// let state

// // datatypes
// // number => 2^53
// // bigInt
// // string = ""
// // boolean => true/false
// // null (its stand-alone value)
// // undefined =>
// // symbol => unique

// // object
// // typeof

// console.log(typeof "namaste");
// console.log(typeof age);
// console.log(typeof isLoggedIn);
// console.log(typeof state);
// console.log(typeof null);
// console.log(typeof undefined);


// // HOW TO DATATYPE FIND OUT
//  let score = 123
//  console.log(typeof score);
//  console.log(typeof (score));
let str1 = "hello";
let str2 = "hardik";
 let str3 = str1 + str2 
// console.log(str3);
// PRIMITIVE DATATYPE EXAMPLE

///const score = 100
const scoreValue = 100.11
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId =Symbol ('123')

// console.log(id === anotherId);

const bigNumber = 12345566666666666666666n

// console.log(bigNumber);
// NON PRIMITIVE DATATYPE EXAMPLE
const heros =["SHAKTIMAN","KRISH","MASK"];
let myObj = {
          name: "HARDIK",
          age : 26
} 

const myFunction = function (){
    // console.log("Hello world");
}

const name = "HARDIK"
const repoNum = 12
// console.log(name,repoNum + "hello");

// console.log(`Hello my name is ${name} and my repoNUm is ${repoNum}.`);  //backticks are mostly used in js


const gameName = new String('HARDIKT')
// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toLocaleLowerCase());
// console.log(gameName.charAt('3'));
// console.log(gameName.indexOf('H'));

//const newString = gameName.slice(2,4);
const newString = gameName.substring(2,4);
// console.log(newString);

const newStringOne = "     Spiderman      "

// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://hardik.com%20tank"

// console.log(url.replace('%20', '--'));
// console.log(url.includes('richa'));  //find out words in syntax
// console.log(gameName.split('-'));

const num = 400;
// console.log(num);

const balance =new Number (1111)
// console.log(balance);
// console.log(balance.toString().length);

// console.log(balance.toFixed(1));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

//*******************************************Maths************* */

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.sqrt(25));