const btn = document.querySelector('.btn')
btn.addEventListener('click',function(){
    console.log("Hey You clicked me");
})
const heading = document.querySelector('h2')
btn.addEventListener('click',function(){
    heading.classList.add('red')
})

//function reference

function changeColor(){
    console.log("hello");
}
btn.addEventListener('click',changeColor())