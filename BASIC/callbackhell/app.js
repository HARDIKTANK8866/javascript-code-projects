// callback hell, promise

// const heading1 = document.querySelector('.one')
// const heading2 = document.querySelector('.two')
// const heading3 = document.querySelector('.three')

// const btn = document.querySelector('.btn')


// btn.addEventListener('click',()=>{
//     setTimeout(()=>{
//         heading1.style.color = 'red'
//         setTimeout(()=>{
//             heading2.style.color = 'green'
//             setTimeout(()=>{
//                 heading3.style.color = 'blue'
//             },1000)
//         },1000)
//     },2000)
// })

                                                                //PROMISE

const promiseOne = new Promise(function (resolved, reject) {
    setTimeout(function(){
            console.log('Asyns task is complate');
            resolved()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://github.com/HARDIKTANK8866')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))


                                                //SIMPLE EXAMPLE PROMISE


// const date = new Promise(function(resolved,reject){

//     setTimeout(() => {
//         console.log("Promise simple example : ",{name:"HARDIK",age:28});
//     }, 2000);
// })

// data.then((item)=>{
// console.log(item);
// })

// IN CASE CODE REJECT USE CATCH WITH SIMPLE EXAMPLE 

// const Date = new Promise(function(resolved,reject){

//     setTimeout(() => {
//         reject("catch simple program: some issues ");
//     }, 2000);
// })

// Data.then((item)=>{
// console.log(item);
// }).catch((error)=>{
// console.log("catch block",error);
// })



// const api =fetch("https://api.ipify.org?format=json")
// api.then((item)=>{
// return item.json()
// }).then((result)=>{
// console.log("output is:",result);
// })

function getData(dataId) {
    return new Promise((resolve,reject)=>{
        setInterval(() => {
                console.log("data",dataId);
                resolve("success")         
        }, 2000);
    })
}

async function getAllData(){
    await getData(1)
    await getData(2)
    await getData(3)
}
