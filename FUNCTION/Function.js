// // // // //     function myFunction(){
// // // // //         console.log("HEllo");
// // // // //         console.log("Welcome to Js");
// // // // //     }
// // // // // myFunction();
// // // // //sum of two numbers with function
// // // // function sum(a,b){
// // // //     s = a+b;
// // // //     console.log("before return");
// // // //     return s;
// // // // }
// // // // let val =sum(5,10);
// // // // console.log(val);
// // // //ARROW FUNCTION
// // // function sum(a,b){
// // //     return a + b;
// // // }
// // // const arrowsum= (a,b) =>{
// // //     console.log(a+b);

// // // };
// // // function mul(a,b){
// // //     return a*b;

// // // }
// // // const arrowmul= (a,b) =>{
// // //     console.log(a*b);

// // // };
// // //COUNT VOWELS
// // function countVowels(str){
// //     let count = 0;
// //     for(const char of str){
// //         if(char === "a" || char === "e" || char ==="i" || char ==="i" || char ==="o" || char ==="u")
// //         {count++;
// //         }
// //     }
// //         return count;

// // }
// // //SAME PROGRAM WITH ARROW FUNCTION
// // const countVow = (str) => {
// //     let count = 0;
// //     for(const char of str){
// //         if(char === "a" || char === "e" || char ==="i" || char ==="i" || char ==="o" || char ==="u")
// //         {count++;
// //         }
// //     }
// //         return count;
// // }
// // //FOREACH FUNCTION
 
// // let arr =[1,2,3,4,5];
// // arr.forEach(function printval(val) 
// // {
// //     console.log(val);

// // }) //foreach method is highr order function
// // //SQUARE OF EACH NUMBER WITH FOREACH METHOD
// let num =[1,5,6,9,3];
//  num.forEach((num) =>{
//     console.log(num*num);
//  })
//LARGEST NUMBER FIND OUT WITH REDUCE ARRAY
// let arr=[1,2,3,4,5,6,7];

// const output = arr.reduce((prev ,curr) => {
//     return prev > curr ? prev : curr ;
//     });
//     console.log(output);
//90 plus marke print with array
// let marks= [56,70,95,99,94,45,96];

// let topppers = marks.filter((val) => {
// return val > 90;
// })
// console.log(topppers);
                                                //ASK USER NUMBER 1 TO N SUM WITH REDUCE METHOD 
// let n = prompt("Enter a number");
// let arr = [];   
// for(let i=1 ; i<=n; i++) {
//     arr [i-1]= i;
// }
// console.log(arr);
// let sum = arr.reduce((res ,curr) =>{
//     return res + curr;
// });
// console.log(sum);

                                                //closure function BANK DEPOSIT WITHDRAW PROGRAM WITH CLIENT

function newAccount(name,initialBalance) {
    let balance = initialBalance
    function showBalance() {
        console.log(`Hey ${name} your balance is ${balance}`);
    }
    function deposit(amount) {
        balance += amount
        showBalance()
    }
    function withdraw(amount) {
        if(amount > balance){
        console.log(`hey ${name}, sorry not enough balance`);
            return
    }
    balance -= amount;
    showBalance()
    }
    return {showBalance:showBalance,deposit:deposit,withdraw:withdraw}
}

const priti = newAccount('priti',500)

const subhash = newAccount('subhash',1000)

priti.showBalance()
priti.deposit(500)
priti.withdraw(15000)
subhash.showBalance()

                    

