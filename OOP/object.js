function multi(num)
 {
    return num*5    
}
multi.power=5
console.log(multi(5));
console.log(multi.power);
console.log(multi.prototype);

function creatuser(username,score){
    this.username = username
    this.score = score
}
creatuser.prototype.increment = function(){
    this.score++
}
creatuser.prototype.printMe = function(){
    console.log(`price is : ${this.score}`);
}
const chai =new creatuser("chai",25)
const tea = creatuser("tea",250)

chai.printMe()


//******************************************************PROTOTYPE**********************************
let myName ="Hardik"
let myChannel ="chai"
console.log(myName.trueLength);


let myHeros =["thor","spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function () {
        console.log(`spidy power is ${this.spiderman}`);
    }
}
Object.prototype.hardik = function(){
    console.log(`hardik is present in all objects`);
}
Array.prototype.heyhardik = function(){
    console.log(`hardik say hello`);
}


heroPower.hardik()
myHeros.hardik()
myHeros.heyhardik()
//heroPower.heyhardik()

                                                                //inheritance
const user ={
    name : "chai",
    email: "chai@google"
}

const teacher ={
    makevideo : true
}

const TeachingSupport ={
    isAvailable : false
}

const TASupport ={
    makeAssignment : 'JS assignment ',
    fullTime : true
}

teacher.__proto__= user

                                                            //latest syntax
Object.setPrototypeOf(TeachingSupport,teacher)

let anotherUsername = "hellobuddy       "

String.prototype.trueLength =function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is : ${this.trim().length}`);
}
anotherUsername.trueLength()
"hardik".trueLength()
"wolverine".trueLength()