// // // // // // // // console.log("Hello Tony Stark ");
// // // // // // // // console.log("Hello Tony Stark ");
// // // // // // // // console.log("Hello Tony Stark ");
// // // // // // // // console.log("Hello Tony Stark ");
// // // // // // // // console.log("Hello Tony Stark ");
// // // // // // FOR LOOP
// // // // // // // for (let count=1;count<=10000;count++)
// // // // // // // {
// // // // // // //     console.log("Hello HULK");
// // // // // // // }
// // // // // // // console.log("Loop has Ended");
// // // // // //FOR WITH SUM NUMBER
// // // // // // let sum =0;
// // // // // // let n=100
// // // // // // for(i=1;i<=n;i++)
// // // // // // {
// // // // // //     sum = sum + i;
// // // // // // }
// // // // // //     console.log("Sum is",sum);

// // // // // //     console.log("Loop has Ended");
 
// // // // // //WHILE LOOP
// // // // // let i=1;
// // // // // while(i<=5)
// // // // // {
// // // // //     console.log("Hello Spiderman");
// // // // //     i++;
// // // // // }
// // // // //DO WHILE LOOP
// // // // let i=1;
// // // // do
// // // // {
// // // //     console.log("i is",i);
// // // //     i++;
// // // // }
// // // // while(i<=10);
// // // // FOR-OF LOOP
// // // let str ="MARVEL";
// // // let size=0;

// // // for (let i of str)
// // //  {
// // //   console.log("i=",i);
// // //   size++;  
// // // }
// // // console.log("String size is",size);
// // // FOR IN LOOP
// // let student ={
// //     name: "HARDIK",
// //     age: 23,
// //     csg: 7.89,
// //     isPass : true,
// // }
// // for (let key in student)
// //  {
// //     console.log("key=",key,"value=",student[key] );

// //     }
// //ODD EVEN NUMBER

// for(let num=0; num<=100 ;num++)
// {
//     if(num %2 === 0) //EVEN NUMBER   IF NEED ODD NUMBER THAN if(!==)
//     {

//      console.log("num is",num);
// }
// }
//WRIGHT OR WRONG NUMBER GAME
let ganmeNum = 25;
let userNum =prompt("Guess the numer");
while(userNum != ganmeNum)
{
    userNum =prompt("You entered wrong number. Guess again :");

}
console.log("congratulation, You entered right number ");