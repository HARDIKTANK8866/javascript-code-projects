                                                        //SIMPLE FUNCTION DECLARATION 
function myName() {

    console.log("Hardik");
}
myName()


                                                                    //second 
function addTwoNumbers(number1,number2) {
    
    console.log(number1 + number2)
}
addTwoNumbers(2,3)

                                                                    //third
function addTwonumbers(num1,num2) {
    let result = num1 + num2
    return result                   //otherwise you can declaire return num1 + num 2
}                                        
const result = addTwonumbers(2,4)
console.log("Result : ",result);

                                                                    //forth
function loginUserMessage(username) {
    return `${username} just logged in`
}                                                                    
console.log(loginUserMessage("Hardik"));

function calculateTotal(subTotal,tax) {
    
    return subTotal + tax
}
const order1 = calculateTotal(100,250)
const order2 = calculateTotal(15,15)
const order3 = calculateTotal(25,250)
console.log(order1,order2,order3);
                                                            // ARROW FUNCTION
//SUM
function sum(a,b) {
    let result = a + b
    console.log(`sum is : ${result}`);
    return result;
}                                                            
  sum(4,6)

  const arrowSum = (a,b) =>{
 
    return s = a + b; 
 };
 arrowSum(1,4);
 console.log(s);