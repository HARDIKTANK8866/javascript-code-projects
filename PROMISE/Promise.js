const promiseOne = new Promise(function (resolve,reject)
 {
    setTimeout(function(){
        console.log('Async task is complate');
    }, 1000)
    
})
promiseOne.then(function()
 {
    console.log("promises consumed");    
})
                                                                    //2 method
new Promise(function (resolve,reject)
 {
   setTimeout(function() {
    console.log("Async task 2");
   }, 1000);

}).then(function(){
    console.log("Async 2 resolved");
})
                                                                    //3 promise
const promiseThree = new Promise(function (resolve,reject)
 {
    setTimeout(function() {
        resolve({username :"Hardik",email: "hardik@123.com"})
    }, 1000);     
})
promiseThree.then(function(user){
    console.log(user);
})
                                                                    //4 method
const promiseFour =new Promise(function (resolve,reject) 
{
    setTimeout(function() {
        let error =false                    //incase true than error catch if false to print userdata
        if (!error) 
        {
            resolve({username: "HD",password:"123"})    
        } else {
            reject('Error: Something wrong')
            
        }
    }, 1000);
    
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error) {
    console.log(error);
})
.finally(()=>console.log("The promise either resolved or rejected"))

                                                                    //5 method

const promiseFive = new Promise(function (resolve,reject) 
{
    setTimeout(function() {
        let error =true                    
            if (!error) 
        {
            resolve({username: "javascript",password:"123"})    
        } else {
            reject('Error:javascript went wrong')
            
        }
    }, 1000);
});
async function consumedPromiseFive()
{   
    try {
        const responce = await promiseFive
        console.log(responce);
    } catch (error) {
        console.log(error);
    }
 
}
consumedPromiseFive()

// async function getAllUsers() {
//     try {
//     const responce = await fetch('https://chat.openai.com/c/58346e07-86e6-4839-bf86-863ac311be1c')
    
//     const data =  await responce.json()
//     console.log(data);
//     }
//      catch (error) {
//         console.log("E: ",error);
//     }
// }
// getAllUsers()

                                                                //other define method
fetch('https://www.youtube.com/watch?v=NJwRQgsu1Q8&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=40')
.then((responce)=>{
    return responce.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))





console.log("START...");

setTimeout(() => {
    console.log("TIMEOUT CALLBACK...")
}, 0);

Promise.resolve().then(() => {
    console.log("PROMISE RESOLVED...")
})

console.log("END...");