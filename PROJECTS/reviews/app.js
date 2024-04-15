const reviews =[
    {
        id:1,
        name:"rahul sharma",
        job : "web designer",
        img: "two.jpeg",
        text:"bfkdbfbkjddfdfdfdfdfssssssssdfsdfsfsfffbkdbfkbsdkfbjksdfb"
},
{
    id:2,
        name:"ritesh sharma",
        job : " designer",
        img: "three.jpeg",
        text:"bfkdbfbkjsssssssssssddfdfdfdfdfsdfsdfsfsfffbkdbfkbsdkfbjksdfb"
}
{
    id:3,
        name:"priyank sharma",
        job : "3d designer",
        img: "four.jpeg",
        text:"bfkdcssdfbfbkjddfdfdfdfdfsdfsdfsfsfffbkdbfkbsdkfbjksdfb"
}
]
const img = document.getElementById("person-img")
const author = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info")

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")

let currentItem = 0
window.addEventListener("DOMContentLoaded",function(){
    const item = reviews[currentItem]
    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text

    nextBtn.addEventListener('click', function () {
        currentItem++;
        if (currentItem > reviews.length - 1) {
          currentItem = 0;
        }
        showPerson(currentItem);
      });
      
      prevBtn.addEventListener('click', function () {
        currentItem--;
        if (currentItem < 0) {
          currentItem = reviews.length - 1;
        }
        showPerson(currentItem);
      });
      
      randomBtn.addEventListener('click', function () {
        console.log('hello');
      
        currentItem = Math.floor(Math.random() * reviews.length);
        showPerson(currentItem);
      });
})