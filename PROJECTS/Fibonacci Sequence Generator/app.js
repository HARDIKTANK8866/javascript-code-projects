const number = parseInt(prompt("Enter  number:"))
let a =0 
let b =1
for (let i = 0; i <=number; i++) {
    let temp= a + b
    console.log(temp);
    a= b;
    b= temp
    
}
