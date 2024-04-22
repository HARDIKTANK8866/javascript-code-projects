                                    //SIMPLE OBJECT CREAT
const student = {
    fullName: "Hardik tank",
    marks: 98.7,
                                    //PRINTMARKS METHOD AND FUNCTION CREAT
    printmarks : function() {
        // console.log("marks = ",this.marks);
    }
}

// string = "abcdefghijklmnopqstvwxyz"
// for (let i = 1; i <= 10; i++) 
// {
    
//     console.log(`char is = ${string.charCodeAt(22)}`);    

// }


// / Define an object
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

// 1. Object.keys()
const keys = Object.keys(person);
// console.log('Keys:', keys); 

// 2. Object.values()
const values = Object.values(person);
// console.log('Values:', values); 

// 3. Object.entries()
const entries = Object.entries(person);
// console.log('Entries:', entries); 

// 4. Object.hasOwnProperty()
// console.log('Has name property:', person.hasOwnProperty('name')); 
// console.log('Has gender property:', person.hasOwnProperty('gender')); 

// 5. Object.assign()
const newObj = Object.assign({}, person, { profession: 'Engineer' });
// console.log('New Object:', newObj); 


                                //"this" function with object 


const hardik = {
  firstName: 'HARDIK',
  lastName:'tank',
  fullName:function () {
    // console.log(this);
    // console.log(`My full name is ${this.firstName},${this.lastName}`);
  }
}

const rohit = {
  firstName: 'ROHIT',
  lastName:'bhatu',
  fullName:function () {
    // console.log(`My full name is ROHIT bhatu`);
  }
}

hardik.fullName()
rohit.fullName()

                    //"this"  function with button and object

function showthis(){  
  console.log(this);
}

const hardik1 = {
  name: 'hardik',
  showthis:showthis
}
const bob ={
  name: 'bob',
  showthis:showthis
}

hardik1.showthis()
bob.showthis()

// const btn1 = document.querySelector('.btn-1')
// const btn2 = document.querySelector('.btn-2')

// btn1.addEventListener('click',showthis)
// btn2.addEventListener('click',showthis)



//FACTORY FUNCTION
 function creatPerson(firstName,lastName){
  return{
    firstName:firstName,
    lastName:lastName,
    fullName: function(){
  console.log(`My full name is ${this.firstName} ${this.lastName} and i love js`);    
    }
  }
 }

 const john = creatPerson('john','aldo')
 john.fullName()
 const Bob = creatPerson('bob','odd')
 Bob.fullName()
 const rahul = creatPerson('rahul','lakhani')
 rahul.fullName()



                                      //factory function with constructor functions

function Person(firstName,lastName){
  this.firstName = firstName,
  this.lastName = lastName,
  this.fullName = function(){
    console.log(`My full name is ${this.firstName} ${this.lastName} and i love js`);    

  }
}

const jonny = new Person('jonny','ramson')
jonny.fullName()


                                //ES6 CLASS SYNTAX

class Account {
  constructor(name,intialBalance){
    this.name = name
    this.balance = intialBalance
  }
  bank ='RBI'
deposit(ammount){
  this.balance += ammount
  console.log(`Hello my name is ${this.name} and you balance is ${this.balance}`);
}

}

const rembo = new Account('rembo',0)
console.log(rembo);
console.log(rembo.name);
rembo.deposit(500)
console.log(rembo.bank);

const jinal = new Account('jinal',500)
console.log(rembo);
console.log(rembo.name);
rembo.deposit(1000)
console.log(rembo.bank);

              //call,apply and bind run instantly ,  arguments

const rohan={
  name: 'rohan',
  age: 24,
  greet: function(){
    console.log(this);
    console.log(`hello, I'am ${this.name}and i'am ${this.age}year old`);
  }
} 
const susan ={
  name: 'sushan',
  age: 23
}

rohan.greet()

function greet(){
  console.log(this);
  console.log(`hello, I'am ${this.name}and i'am ${this.age}year old`);
  
}

greet.call(susan)
greet.call(rohan) 
greet.call({name:'richa',age: 22})

rohan.greet.call(susan)


              //button with increment and decrement example

const counter = {
  count: 0,
  increment(){
    console.log(this)
    this.count++;
      console.log(this.count);
  }
}
// const btn = document.querySelector('.increment')
// btn.addEventListener('click',counter.increment.bind(counter))
      


                                                              // OBJECT DESTRUCTURING 
 
const rita ={
  first:"rita",
  last:"moriya",
  city: "surat",
  sibling:{
        sister:" rehana"
  }
}

const {
  first,
  last,
  city,
  sibling:{sister:favoritesibling},
} = rita
console.log(first,last,city,favoritesibling);