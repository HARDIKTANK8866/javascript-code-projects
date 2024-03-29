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
fruits[0] = 'Cherry'                                                    //Replace [0] to Cherry
console.log(fruits);
console.log(`The first fruits is :`,fruits[0]);
//delete fruits[0];                                                           //Delete item
console.log(`The first fruits is :`,fruits[0]);
console.log("After delete array is : ",fruits);

// const myGirls = ["Sarika","Taruna"]
// const myBoys = ["Nehanshu","Sagar","Nilesh","Pratik"]
// const myTeam = myGirls.concat(myBoys);                                       //Array.concat()
// console.log(`Use concat array is :`, myTeam);

// console.log(myTeam);
// console.log("Copy Array",myTeam.copyWithin(2,0));
// console.log("Another Copy Array",myTeam.copyWithin(2,0,2));

// const Fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// Fruits.copyWithin(2);
// console.log(Fruits);

const num = [[1,2],[3,4],5,[6,7],8,[9,0]]
// console.log(num);
newNum = num.flat()                                                             //Array.flat()
// console.log("Sub array is : ",newNum);

const abc = ["a","b","c","d","e","f","g","h"]                                     //Array.slice()
console.log("Array slice is: ",abc.slice(2,-5));
console.log(abc);


const A = ["a","b","c","d","e","f","g","h"]                                     //Array.splice()
// console.log(A.splice(3,2,"A","B"));
console.log("Array spllice is : ",A);

const spliced = A.toSpliced(2)
console.log(spliced);
