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