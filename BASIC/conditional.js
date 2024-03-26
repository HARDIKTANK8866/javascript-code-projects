// Conditional statements
//if else condition
let age = 22    

if (age >=18) {
    console.log("You can vote");    
}
 else{
    console.log("You can not vote");
}

const value = false
if (!value) {
    console.log("value is false");    
}

// let mode = "light"
// let color
// if (mode=== "dark") {
//     color ="black"
// } else {
//     color = "white"
// }
// console.log(color);

                            //odd even
let num = 3
if (num%2 === 0) {
    console.log(`${num} is even`);
} else {
    console.log(`${num} is odd`);
}
                            //ELSE IF CONDITION
const ages = 25
if (ages < 18) {
    console.log(ages," is junior");
} else if(ages > 60)
 {
    console.log(ages, "is senior");
}
else {
    console.log(ages, " is middle");
}

let Mode = "dark"
let color
if (Mode==="dark") 
{
    color ="black"
} 
else if(Mode === "blue")
{
    color ="blue"
}
else if(Mode === "pink")
{
    color = "pink"
}
else
{
color ="white"
}
console.log(color);
    //SWITCH STATEMENT

const expr = 'papayas'
// switch (expr) {
//     case 'orange':
//         console.log("orange are $50.00 a pound");
//         break;
//     case 'mangos':
//         console.log("mangos are $60.00 a pound");
//         break;
//     case 'papayas':
//         console.log("papayas are $6.89 pound");
//         break;
//     default:
//         console.log(`Sorry we are out of ${expr}.`);

// }

switch (expr) {
    case "Oranges":
      console.log("Oranges are $0.59 a pound.");
      break;
    case "Apples":
      console.log("Apples are $0.32 a pound.");
      break;
    case "Bananas":
      console.log("Bananas are $0.48 a pound.");
      break;
    case "Cherries":
      console.log("Cherries are $3.00 a pound.");
      break;
    case "Mangoes":
    case "Papayas":
      console.log("Mangoes and papayas are $2.79 a pound.");
      break;
    default:
      console.log(`Sorry, we are out of ${expr}.`);
  }
  
  console.log("Is there anything else you'd like?");
  



const foo = 3

let output = "Output: ";
switch (foo) {
  case 0:
    output += "So ";
  case 1:
    output += "What ";
    output += "Is ";
  case 2:
    output += "Your ";
  case 3:
    output += "Name";
  case 4:
    output += "?";
    console.log(output);
    break;
  case 5:
    output += "!";
    console.log(output);
    break;
  default:
    console.log("Please pick a number from 0 to 5!");
}


for (let i = 0; i <=100; i++) 
{
    const String = "i";
    // console.log(String.CharCodeAt(i))
    // console.log(i);
}
for (let i = 0; i < 100; i++) {
    let char = String.fromCharCode(i)
    // console.log(i, char)
}

//  let char = String.fromCharCode(65)
//  console.log(`charcode is ${char}`);

const text = "A"

console.log(`"A" Unicode Number is : ${text.charCodeAt()}`);             //CHAR UNICODE NUMBER   

console.log("CAPITAL Alpha:");
for (let i = 65; i < 91; i++) {
    let char = String.fromCharCode(i)                       //CAPITAL ALPHA
    console.log(i, char)
}

for (let i = 97; i < 123; i++) {
    let char = String.fromCharCode(i)                       //SMALL ALPHA
    console.log(i, char)
}