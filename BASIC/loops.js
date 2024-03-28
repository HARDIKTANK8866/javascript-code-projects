                        //for loop
// calculate sum of 1 to 5 num
// let sum =0
// for (let i = 1; i <= 5 ; i++) {
//      sum = sum + i;
//      console.log(sum);    
// }

                        //while loop

// let e = 1
// while (e<=10) {
//     console.log("e is :",e);
//     e++;
// }
                        //do-while loop
// let e = 1
// do {
//     console.log("e is :",e);
//     e++
// } while (e<=5);

                        //for of loop
let str = "JavaScript"
let size = 0;
for (let i of str) {
    // console.log("i= ",i);
    size++;
}
// console.log("size is = ",size);

//for-in loop

let student={
    name: "Hardik tank",
    age : 26,
    cgpa : 7.78,
    isPass : true,
}
for (const key in student) {
    //    console.log("key =",key,",value is =",student[key]);
    }

                                    //print all even numbers from  0 to 100 
for (let i = 0; i <=100; i++)
 {
     if (i%2===0) {
        // console.log("Even num is =",i);
     }
     
}

// -JavaScript Variables
// -JavaScript Operators
// -JavaScript Data Types basic infomation
// -JavaScript Strings and Methods
// -JavaScript String Search
// -JavaScript Template Strings
// -JavaScript Functions(Basic Intro)
// -JavaScript Objects(Basic Intro)
// -JavaScript Arrays(Basic Intro)
// -Js Conditional Statements(if, else, and else if,switch)
// -JavaScript For Loops

let index = 0
while (index <= 10) {
    console.log(`value of index is ${index}`);
    index= index + 2
}
let myarry = ["thor","spiderman","flash"]
let ar = 0
while (ar <myarry.length) {
    console.log(`All hero print ${myarry[ar]}`);
    ar = ar+1;
}

let score = 0
do {
    console.log(`score value is : ${score}`);
    score ++
} while (score <=10);