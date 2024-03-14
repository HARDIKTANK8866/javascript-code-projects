// const user = {
//     username: "Hardik",
//     loginCount: 8,
//     signedin: true,

//     getUserDatailes: function(){
//         // console.log("Got user detailes from database");
//         console.log(`username:${this.username}`);
//     }
    
// }
// console.log(user.username);
// console .log(user.getUserDatailes());

function user(username,loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}
const userOne= new user("hardik",12,true)
const usertwo= new user("bhatu",11,false)
console.log(userOne);
console.log(usertwo);