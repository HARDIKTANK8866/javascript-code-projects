                                        //Array declaration
// >> let myArry = [1,2,3,4,5]               using array Literals
// >> let myArry = new Array(1,2,3,4,5)      using array constructor
// >> let myArray = []                       Empty array
// >> let myArray =Array.from('hello')       using iterable object
// >> let let originalArray = [1,2,3]        using spread oper
//    let newArray = [...originalArray]


const fruits = ["Banana", "Orange", "Apple","Kivi", "Mango"];
console.log(fruits);


console.log(`Array length is : ${fruits.length}`);                          // Array.length
const str = fruits.toString()                                               // Array.toString    
console.log(`Convert to string : ${str}`);
console.log(`Position is : ${fruits.at()}`);                                //Array.at()
console.log(`Minus Position is : ${fruits.at(-3)}`);                        //Array.at() minus
console.log(`Convert to string join method : ${fruits.join('**--**')}`);    //Array.join()
console.log(`New value out in array: ${fruits.pop()}`);                     //Array.pop()
console.log(fruits);
console.log(`New value add in array: ${fruits.push('papayas')}`);           //Array.push()
console.log(fruits);
console.log(`Remove element with shift: ${fruits.shift()}`);                //Array.shift()
console.log(fruits);
console.log(`Add element with unshift: ${fruits.unshift('Lemon')}`);        //Array.unshift()
console.log(fruits);
fruits[0] = 'Cherry'                                                        //Replace [0] to Cherry
console.log(fruits);
fruits[fruits.length]="Cherry"