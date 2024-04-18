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
         // age : 26
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
// console.log(Math.random());
// console.log(Math.random()*10) + 1;
// console.log(Math.floor(Math.random()* 10 ) + 1);

const min = 10
const max = 20
// console.log(Math.floor(Math.random()* (max - min + 1) ) + min);

const myDate = new Date()
//  console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());

//let myCreatedDate = new Date(2024, 0, 3)          //1
// let myCreatedDate = new Date(2024, 0, 3, 5, 3)         //2
let myCreatedDate = new Date(2024, 0, 3, 5, 3)


// console.log(myCreatedDate.toDateString());            // 1
// console.log(myCreatedDate.toLocaleDateString());        //2

let myTimeStamp = Date.now()
//console.log(Math.floor(Date.now()/ 1000));


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

// newDate.toLocaleDateString('default',{
//     weekday :"long", 
// })
// console.log(newDate);


//ARRAY DECLARATION

const myArr = [0,1,2,3,4,5]
const myHeros =["shaktiman", "antman"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr2[1]);

//ARRAY METHOD

// myArr.push(6)
// myArr.pop()
myArr.unshift(9)
myArr.shift()
//console.log(myArr);

//slice and spilce  diffrent

//console.log(myArr);

const myn1 = myArr.slice(1,3)
// console.log(myn1);

const myn2 = myArr.splice(1,3)
// console.log(myn2);
// console.log(myArr);

const anotherArray = [1,2,3,[4,5,6],7,8,[9,9,[1,3,3]],9,0]
// console.log(anotherArray);

const newAA =anotherArray.flat(Infinity)            //used .flat() array join karva mate
//console.log(newAA);


//OBJECT

const mysym = Symbol("key1")

const JsUser = {

    name : "Hardik",
    [mysym]: "mykey1",
    age : 25,
    Location : "Surat" ,
    email : "htank8866@google.com",
    isLoggedIn : false
}
JsUser.age=("23")
//console.log(JsUser)

JsUser.greeting = function(){
    // console.log("hello JS");
};
JsUser.greetingtwo= function(){
    // console.log(`hello my name is ,${this.name}how are you`);
};
// console.log(JsUser.greeting());
// console.log(JsUser.greetingtwo());
// ============== Advance Object ==============

 //let tinderUser = new Object(); //key difference is this is singleton object
 
 const tinderUser = {};
 tinderUser.id = "TU123";
 tinderUser.name = "Naman";
 tinderUser.isLoggedIn = true;
//  console.log(tinderUser);

 let facebookUser = {
     email: "someone@google.com",
     fullName: {
         userFullName: {
             firstName: "hardu",
             lastName: "tank"
         }
     }
 }
// console.log(facebookUser); //complete object
// console.log(facebookUser.fullName); //nested-object
// console.log(facebookUser.fullName.userFullName.firstName); //nested-object
// console.log(facebookUser.fullName.userFullName.lastName); //nested-object

const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {3: "a", 4: "b", 5: "c"}
const obj4 = {1: "a", 2: "b", 3: "c"}


//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2,obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// console.log(Object.values(tinderUser));
// console.log(Object.keys(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const cource ={

    courceName : "js ",
    price : 999,
    inst : "hardik"
}
const {inst} = cource
//console.log(inst);

// *******************************************FUNCTION**********************************


function sayMyName(){
    // console.log("H");
    // console.log("A");
    // console.log("R");
    // console.log("D");
    // console.log("I");
    // console.log("K");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "tank"){
    if(!username){
        //console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("HARDIK"))
// console.log(loginUserMessage("HARDIK"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "HARDIK",
    prices: 199
}

function handleObject(anyobject){
    //console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
//console.log(returnSecondValue([200, 400, 500, 1000]));

//                                                                             FUNCTION
function one(){
}

// one()

if (true) {
    const username = "HARDIK"
    if (username === "HARDIK") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


//                                                                              interesting 


//console.log(addone(5))

function addone(num){
    // return num + 1
}




// //const addTwo = function(num){
//     return num + 2
// }
// //addTwo(5)


//                                        FUNCTION DECLARATION & ARROW FUNCTION WITH Ex.

const User = {
    username : "Harditank",
    price : 999,
    welcomeMsg:function(){
  //      console.log(`${this.username},welcome to website`);
        //console.log(this);
    }        
}
User.welcomeMsg()
User.username = "Herry"                      //user name changed but print same value
User.welcomeMsg()
//console.log(this);

// function chai(){
//     console.log(this);
// }
// chai()

// const chai =()=> {
//     let userName = "Hardik"
//     console.log(this);
// }
// chai()

//  const addTwo = (num1, num2)=>{
//     return num1 + num2
// }
// const addTwo = (num1, num2)=>  num1 + num2                      //Implicit return with arrow function
// const addTwo = (num1, num2)=>  (num1 + num2)
const addTwo = (num1, num2)=>  ({username : "HARDIK"})   //implicit object user karva ({object})   ()compulsory 
//console.log(addTwo(3,1))

                                                    //IIFE USED
(function chai(){
    //NAME IIFE
    ///console.log(`DB CONNECTED`);
})();   
                                            //TWO IIFE USED MATE ; COMPULSORY LAGAVU 
((name)=>{
    //console.log(`DB CONNECTED TWO ${name}`);
})('Hardik')
                                            // IF ELSE 
                                            // if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    ///console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    //console.log("User logged in");
}   

                                                        //SWITCH
const month = 3
switch (month)  {
    case 1:
        //console.log("january");
        break;
    case 2:
      //  console.log("febuary");
        break;
    case 3:
       // console.log("march");
        break;
    case 4:
     //   console.log("april");
         break;
    case 5:
   //     console.log("may");
        break;
    default:
 //       console.log("default case match");
        break;
}

const emptyObj = {}
if(Object.keys(emptyObj).length == 0){
//    console.log("object is empty");
}
                                            // nullish coalescing operator (??) : null undefined
let val1;

// val1 = 10 ?? 15;
// val1 = null ?? 10;
// val1 = undefined ?? 14;
val1 = num ?? 10 ?? 15 
//console.log(val1);
//                                      terniary operators
//condition ? true : false

// const iceprice = 100
// iceprice <=80 ? console.log("less than 80 ") : console.log("more than 80");


                                                                                // FOR loop         
// for (let i = 1; i <=10 ; i++)
//  {
//     const element = i;
//     console.log(element);
        
// }

for (let i = 1; i <=10 ; i++)
 {
    const element = i;
    if (element == 5) {                                     // FOR WITH IF
       // console.log("5 is best number");
    }
    
    ///console.log(element);
}
for (let I = 1; I <=10; I++)
 {
  //  console.log(`outer loop ${I}`);
    for (let j = 0; j<=10; j++)
     {
//    console.log(I + '*'+j+'='+I*j );    
    }
}

let myArray = ["flash","batman","superman"]
///console.log(myArray.length)
for (let index = 0; index < myArray.length; index++)
 {
    const element = myArray[index];
  //console.log(element);  
}

                                            //break and continue
for (let i = 1; i <=20; i++)
 {
    if (i == 5)
     {
    // console.log('detected 5');
     break   
    }
  //console.log(i);
    
}

                                                            //WHILE LOOP AND DO WHILE LOOP
let index = 0
while (index <=10)
 {
    //console.log(`value of index ${index}`);
    index = index + 2

}                                                            

let myarr =["batman","spiderman","Thor"]
let arr =0
while (arr<myArr.length)
 {
//    console.log(`value of    index${myarr[arr]}`);
    arr = arr +1    
}
                                                            //DO WHILE
let score = 1
do {
    //console.log(`score value is ${score}`);
    score++
} while (score<=10);
                                                            //FOR OF LOOP
const Arr =[1,2,3,4,5]
for (const val of Arr)
 {
//    console.log(val);
}
const greetings = "hello world"
for (const greet of greetings)
 {
  ///  console.log(`each char is ${greet}`);    
} 

//                                                              MAPS
const map = new Map()

map.set('IN',"India")
map.set('USA',"United State of Amrica")
map.set('Fr',"France")
map.set('IN',"India")

//console.log(map);
for (const [key,value] of map) {

 //   console.log(key,':-',value);
}
                                                            //OBJECT WITH FOR IN LOOP
const myObject = {
    js : 'JAVASCRIPT',
    cpp : 'c++',
    rb : 'rubby',
    swift : 'swift by apple'
}
for (const key in myObject) {
   //console.log(myObject[key]);       //1st printout
       //console.log(`Shortname is : ${key} Fullname : ${myObject[key]}`);    
}
                                                            //ARRAY WITH FOR IN LOOP
const programming = ["js","rb","py","java","cpp"]
for (const key in programming) {
    ///console.log(programming[key]);
    }

                                                                //FOREACH WIRH FUNCTION
const coding = ["js", "ruby","java","python","cpp"]

coding.forEach( function(val)
{
   // console.log(val);
})
                                            //ARRAY IN OBJECT WITH ITRATION DATABASE
const mycoding = [
    {
        languageName: "javascript",
        languagedFileName: "js"
    },
    {
        languageName: "java",
        languagedFileName: "java"
    },
    {
        languageName: "python",
        languagedFileName: "py"
    },
]
mycoding.forEach((item)=>{
    //console.log(item.languageName);
})
                                                //FILTER WITH ARRAY
//const myNum =[1,2,3,4,5,6,7,8,9,10]
// const myNums = myNum.filter((num) => num > 4)
// console.log(myNums);
                                                //MAP WITH ADD 10
// const myNumbers =[1,2,3,4,5,6,7,8,9,10]
//const myNums = myNumbers.map((num) => num +10)
//console.log(myNums);
                                                //CHAINING METHOD 
//const myNumbers =[1,2,3,4,5,6,7,8,9,10]
//const myNums =myNumbers
                    // .map((num) => num * 10)
                    // .map ((num)=> num+1)
                    // .filter((num)=> num >=40) 

//console.log(myNums);
                                                    //reduce method
const myNum =[1,2,3,4,5]
// const myTotal =myNum.reduce(function(acc,curval){
//     console.log(`acc: ${acc}and currval is: ${curval}`);
//     return acc +curval
// },0)
const myTotal =myNum.reduce((acc,curval)=>acc+curval,0)
console.log(myTotal);





 
