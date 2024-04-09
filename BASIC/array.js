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


// const A = ["a","b","c","d","e","f","g","h"]                                     //Array.splice()
//  console.log(A.splice(3,2,"A","B"));
// console.log("Array spllice is : ",A);

// const spliced = A.toSpliced(2)
// console.log(spliced);

const A = ["a","b","c","d","e","f","g","h"]                                        //Array.splice()
console.log(A.splice(1,3,"lemon","limbu"));
console.log("after updated = ",A);


// const month = ["jan","feb","march","april","may"]
// spliced = month.toSpliced(0,1)
// console.log(spliced);

console.log("fruits is = ",fruits);
console.log("Indexof position is = ",fruits.indexOf("papayas"));                //Array.indexof()

console.log("fruits is = ",fruits);
console.log("Last indexof is =",fruits.lastIndexOf("papayas"))                  //Array.lastIndexOf()

let numbers = [1, 2, 3, 4, 5];
let evenNum = numbers.find(numbers => numbers % 2 === 0)
console.log("Even num is = ",evenNum);                          //array.find() >> findout first element 

let evenIndexnum = numbers.findIndex(numbers => numbers % 2 === 0) //index of first even number
console.log("evenIndex is = ",evenIndexnum);

const temp = [27,28,30,40,42,35,30,45,44]
let high = temp.findLast(temp => temp > 40)                        //array.findLast()
console.log("High temp is =",high);                                 //findout last index value

let tempPosition = temp.findLastIndex(x => x > 40);             //array.findLastIndex()
console.log(tempPosition);                                      //findout last index number in array    

//************************************Array sorting******************************************** */

const shope =["Banana","Apple","Mango","Lemon","Orange"]

console.log("Fruits is : ",shope);
console.log("Sorted array : ",shope.sort());                                      //Array.sort()
console.log("Reverse array is :",shope.reverse());                                //Array.reverse()
// const newArray =shope.toSorted();
// console.log(newArray);

const points = ['40', '100', '1', '5', '25', '10'];
console.log(points.sort());



points.sort(function(a,b)                                                       //Array.sort by Numeric sort
 {
    return a-b                                                                                                           
}    )
console.log("Number Sorted",points);


points.sort(function (a,b)
 {
    return 0.5 - Math.random()    
})
console.log("Random sorted array :",points);

//                                          Lowest and Highest value in Array


console.log(points);
points.sort(function (a,b) {
    return a-b
})
console.log("Lowest value:",points[0]);         //Lowest number



points.sort(function (a,b) {
    return b-a
})
console.log("Highest value:",points[0]);


                                     
                                                        //USING Math.Min() on array

const arr= [3,5,6,4,67,89,34,21,2]
function myArrayMin(arr) {
    return Math.min.apply(num,arr)
}
console.log("Min value is: ",myArrayMin(arr))

function myArrayMax(arr) {
    return Math.max.apply(null,arr)
}
console.log("Max value is :",myArrayMax(arr));

//Using loop find out lowest value and Highest value

function myArrayMin(arr) {
    let len = arr.length;
    let min = Infinity;
    while (len--) {
      if (arr[len] < min) {
        min = arr[len];
      }
    }
    return min;
  }
console.log("Using Loop findout Min value is : ",myArrayMin(arr));



function myArrayMax(arr) {
    let len = arr.length;
    let max = -Infinity;
    while (len--) {
      if (arr[len] > max) {
        max = arr[len];
      }
    }
    return max;
  }
console.log("Using Loop findout Max value is : ",myArrayMax(arr));

                                                                      //Sorting Object Array
const cars = [
    {type : "Volvo",Year : 2001},
    {type : "Saab",Year : 2016},
    {type : "BMW",Year : 2010},
]

console.log("",cars.sort(function(a,b){return a.Year-b.Year}));
    

                                                                                //Array iteration Method

const number = [40,50,1,23,44,55,98]

number.forEach(myFunction)
function myFunction(value,index) {
   console.log(index + ":"+ value);
}


const a = ["hardik","karan","aman","neha"]
a.forEach(myFunction)                                                          //Array.forEach()
function myFunction(value,index) {
    console.log(index+":"+ value);
}

myNewNum = number.map((number)=>(number+10))
console.log("Using map value is : ",myNewNum);                               //Array.map

console.log(number);
const newArr = number.flatMap((number)=>(number*2))
console.log("Using flatmap value is : ",newArr);                            //Array.flatMap

const newName = a.flatMap((a)=>(a.concat("bhai")))                          //Array.flatMap()
console.log(newName);

const array = [1, 2, 3];

      // Using map()
const mappedArray = array.map(num => [num, num * 2]);
console.log(mappedArray);

      // Using flatMap()
const flatMappedArray = array.flatMap(num => [num, num * 2]);
console.log(flatMappedArray);

const myNumS = [1,3,43,12,34,4,5,6,7,44,5,43,7,2]

 newNum = myNumS.filter((myNumS)=>(myNumS > 7))
console.log("filter number is : ",newNum);
console.log(myNumS);

const rNum = [1,2,3,4]                                                  //Array.reduce()
const myTotal = rNum.reduce((acc,curvall) => (acc+curvall),0)
console.log("Array total number is : ",myTotal);


const shoppingCart = [
  {
    item : "js",
    price : 1200
  },
  {
    item : "py",
    price : 2000,
  },
  {
    item : "html",
    price : 3000
  }
]

const toPaycart = shoppingCart.reduce((acc,items) => acc+items.price,0)
console.log(toPaycart);


const MyTotal = rNum.reduceRight((acc,curvall) => (acc+curvall),0)
console.log("Array total number is : ",MyTotal);


istrue = rNum.every((rNum) => (rNum<10))                // Array.every()
console.log("number is in ya not",istrue);

result = rNum.some((rNum)=>(rNum>2))                    // Array.some()
console.log("some value is : ",result);

const name = "hardiktank"                               //Array.from()
const nName =Array.from(name)
console.log(nName);

const fal = ["banana","apple","mengo"]
const iterator = fal.keys()                             //Array.keys()
for(const key of iterator){
console.log(key);
}

const f = fal.entries()                                 //Array.entries()
for(let x of f)
{
  console.log("Array key / value :",x);
}

// const Arr = [1, 2, 3, 4, 5];                            //with pending
// console.log(Arr.with(2, 6)); 
// console.log(Arr); 

//Spread operators

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];
const year = [...q1,...q2,...q3,...q4]
console.log(year);