// // // // // // //                                                            STRING
// // // // // // let str="javaScript";
// // // // // // console.log(str[3]);
// // // // // // //Template 
// // // // // // let obj ={
// // // // // //     Item:"Bottle",
// // // // // //     price :"100",
// // // // // // };

// // // // // // let output =`The cost of ${obj.Item} is ${obj.price}`;
// // // // // // console.log(output);

// // // // // // //                                  \n CAN USE NEXT LINE and \t is calle TABSPACE
// // // // // let str ="This is \n \tjavaScript";
// // // // // //console.log("This is \n \tjavaScript");
// // // // // console.log(str.length);
// // // // let str ="Marvel";
// // // // let newStr = str.toUpperCase();
// // // // console.log(str);
// // // // console.log(newStr);
// // // // //                                                  trim SPACE FIRST AND LAST
// // // let str ="                  All the Best        ";
// // // console.log(str.trim());
// // //                                                BASIC PROGRAM USERNAME WITH LENGTH
// // let fullName =prompt("Please Enter your name without space :");
// // let userName ="@"+fullName+fullName.length;
// // console.log(userName);
// //                                                               SRING METHOD
// let str= "0123456";
// console.log(str.slice(1,4));
//                                                                      CONCAT
let str1 = "SITA";
let str2 = "RAM";
 let res =str1.concat(str2);
 //console.log(res);
 //                                                     OTHERWISE str.replace(search val,newval);
 //str.charAt()
 //console.log(str1.charAt(2));


// ALL STRING ND DECLARATION 

const name= "hardik"
const repocount = "27"

//console.log(`Hello my name is ${name} and my repocount is ${repocount}`);

let numb = '5';
let text = numb.toString();
let padded = text.padStart(4,"0");
let Padded = text.padEnd(4,"1")
const gameName = new String(' Hardiktank tank    88')
let result = gameName.length;
console.log(gameName);


console.log(`string num is :${gameName.length}`);                       //.length 
// console.log(gameName.toLocaleLowerCase());            //.toLocaleLowerCase
// console.log(gameName.toUpperCase());                  //.toUpperCase
// console.log(gameName.charAt(3));                      //.charAt you can see character num of position
// console.log(gameName.charAt(gameName.length -1));
// console.log(gameName.indexOf('t'));                   //.indexOf character position 
// console.log(gameName);
// console.log(gameName.trim());                          //whitespace trim in bothside
// console.log(gameName.trimStart());                     //whitespace trim in start
// console.log(gameName.trimEnd());                       //whitespace trim in end
// console.log(gameName.includes('0'));                      //find out word ya char in true/false\
// console.log(gameName.slice(1,6));                         //.slice print to slice to words 
// console.log(gameName.slice(-4));                          // + to print 4 less char & - last 4 print word
const rohit_name = 'rohit'                   
console.log('rohit_name charAtCode -> ',rohit_name.charCodeAt());
console.log('code point',gameName.codePointAt(3,2)); 
//console.log(gameName.concat(name));                         //.concat to used string join
//console.log(gameName.endsWith('tank'));                     ///.endswith to used last string true/false
console.log(gameName.lastIndexOf('H'));
console.log(padded);
console.log(Padded);
//console.log(gameName.repeat(3));                           //.repeat(3) repeat str num of time
//console.log(gameName.replace(`tank`,`prince`));            //.replace is used to replace char
//console.log(gameName.replaceAll(`tank`,`PRINCE`));         //.replaceAll all replace value
console.log('search :',gameName.search('tank'));                      //.search position of the match:
//console.log(name.split(''));                                 //.split returns the array
console.log(name.matchAll('tank'));
console.log(gameName.matchAll('Hardik'));
console.log(gameName.valueOf());
