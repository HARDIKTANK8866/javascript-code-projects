// class user {
//     constructor (username,email,password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//         changeUsername(){
//         return `${this.username}`
//     }
    
// }
// const wolverine = new user("wolverine","wol@gmail.com","123")

// console.log(wolverine.encryptPassword());
// console.log(wolverine.changeUsername());

                                                                        //INHERITANCE
class user{
    constructor (username){
        this.username = username 
       }
       logMe(){
        console.log(`USERNAME IS ${this.username}`);
       }
}

class Teacher extends user {
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password =password
    }
    addCourse(){
        console.log(`A new course was added  by ${this.username}`);
    }
}

const chai =new Teacher("chai","chai@teacher.com","123")

chai.addCourse()
const masalaChai = new user("masalaChai")

masalaChai.logMe()

console.log(chai === masalaChai);

                                                                    //CLASS
