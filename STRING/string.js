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
// console.log(gameName);


// console.log(`string num is :${gameName.length}`);                       //.length 
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
// //console.log('code point',gameName.codePointAt(3,2)); 
//console.log(gameName.concat(name));                         //.concat to used string join
//console.log(gameName.endsWith('tank'));                     ///.endswith to used last string true/false
// console.log(gameName.lastIndexOf('H'));
//console.log(Padded);
//console.log(gameName.repeat(3));                           //.repeat(3) repeat str num of time
//console.log(gameName.replace(`tank`,`prince`));            //.replace is used to replace char
// //console.log(gameName.replaceAll(`tank`,`PRINCE`));         //.replaceAll all replace value
// console.log('search :',gameName.search('tank'));                      //.search position of the match:
// //console.log(name.split(''));                                 //.split returns the array
// console.log(name.matchAll('tank'));
// console.log(gameName.matchAll('Hardik'));
// console.log(gameName.valueOf());





const string = " Hardiktanktanktank  89  . "
console.log(`string length is :${string.length}`);
console.log(string[13]);
console.log(`string is uppercase:${string.toUpperCase()}`);
// console.log(string);
console.log(`string is lowercase:${string.toLowerCase()}`);
// console.log(string);
console.log(`character is :${string.charAt(3)}`);
console.log(`charUnicode is :${string.charCodeAt(67)}`);
let latter = string.at(4)
console.log(`at charaacter return is:${latter}`);
let Text = "Hello word"
let char = Text[0]
console.log(`string is :${char}`);
console.log(`Orignal is :${string}modified is :${string.slice(2,9)}`);
console.log(`Orignal is :${string}modified is :${string.split([])}`);
console.log(`Original is :${string}concat to ${string.concat(Text)}`);
console.log(`Original string is:${string}trim string is :${string.trim()}`);
console.log(`Original string is:${string}starttrim string is :${string.trimStart()}`);
console.log(`Original string is:${string}Endtrim string is :${string.trimEnd()}`);
console.log(`Original string is:${string}SubString is :${string.substring(0,6)}`);
console.log(`Original string is:${string}SubStr is :${string.substr(-0,6)}`);
let num_P = "5"
console.log(`Original  is:${num_P}paded is :${num_P.padStart(6,"4")}`);
console.log(`Original  is:${num_P}paded is :${num_P.padEnd(6,"4")}`);
console.log(`Original string is :${string}repeat string is${string.repeat(3)}`);
console.log(`Original string is :${string}modified string is${string.replace("Hardik","jemish")}`);
console.log(`Original string is :${string}modified  string is${string.replaceAll("tank","00")}`);
console.log(string.indexOf("t"));
console.log(string.lastIndexOf("8"));
console.log(string.search("t"));
console.log(`Original string is :${string}modified match  string is:${string.match("tank")}`);
// let Array = string.matchAll(string)
// console.log(Array[0]);
// console.log(`Original string is :${string}modified matchAll  string is:${string.matchAll("tank")}`);
let ary =Array.from(string.matchAll("tank"))
for (let i = 0; i < ary.length;i++)
    console.log(ary[i][0],ary[i].index);
    

//yarynlengthg(Array);
// console.log(Array.from(ary));
console.log(`Original string is :${string}modified  string is :${string.includes("raks")}`);
console.log(`Original string is :${string}modified  string start With :${string.startsWith(" Hardik")}`);
console.log(`Original string is :${string}modified  string End With :${string.endsWith("  89  .")}`);












// .length      length janva mate
// .toUpperCase  uppercase mate
// .toLowerCase     lowercase mate
// .charAt           index mathi char find karva    
// .charCodeAt         unicode value return //char na hoyto NaN return kare
// .substr              string start to end print karva
// .substring               similer substr
// .slice                   start index to end endex print karva
// .concat                   string join karva
// .trim                        whitespace clear karva
// .trimEnd                     end whitespace clean
// .trimStart                   start whitespace clean
// .split                       string to arry
// .at                      string index mathi chara
// .string[0]               similer to charAt
// .search                  one word find out karva mate
// .indexOf                 char ni index janva
// .lastIndexOf             last indexof char ni position janva
// .match                   similer word match karva
// .matchAll                > similer word match into array
// .startsWith              start with true and false
// .endsWith                end with true and false
// .includes                include word true and false
// .repeat                  string repeat karva copy paste
// .replace                 replace word to another word
// .replaceAll              replaceAll word to another word
// .padEnd
// .padStart












