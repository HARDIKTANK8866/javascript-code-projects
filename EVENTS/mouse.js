const heading = document.querySelector('.h1')
const btn = document.querySelector('.btn')

btn.addEventListener('click',function(){
    console.log("You clicked me");
})

btn.addEventListener('mousedown',function(){
    console.log("down");
})

btn.addEventListener('mouseup',function(){
    console.log("up");
})


heading.addEventListener('mouseenter',function(){
    heading.classList.add('red');
})
heading.addEventListener('mouseleave',function(){
    heading.classList.remove('red');
})



//event object
let btn1 = document.querySelector("#btn1")

btn1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
}

// event listeners

btn1.addEventListener("click",()=>{
    console.log("button was clicked handler 1");
})

btn1.addEventListener("click",()=>{
    console.log("button was clicked handler 2");
})

const handler3 = ()=>{

    console.log("button was clicked handler 3");
}

btn1.addEventListener("click",()=>{
    console.log("button was clicked handler 4");
})

btn1.removeEventListener("click",handler3)