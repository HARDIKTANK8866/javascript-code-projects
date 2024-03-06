// let btn1 = document.querySelector("#btn1");

// // btn1.onclick =(evt) =>
// // {
// //     // console.log("btn was clicked");
// //     // let a=25;
// //     // a++;
// //     // console.log(a);
// //     console.log(evt);
// //     console.log(evt.type);                  //ALL EVENT OBJECT 
// //     console.log(evt.target);
// //     console.log(evt.clientX,evt.clientY);

// // };
// btn1.addEventListener("click",() =>
// {
//   console.log("Button was clicked -handler1");  
// });
// btn1.addEventListener("click",() =>
// {
//   console.log("Button was clicked-handler2");  
// });

// const handler3 = () =>                                              //handler 3 variable store
// {
//   console.log("Button was clicked -handler3");  
// };

// btn1.addEventListener("click",() =>
// {
//   console.log("Button was clicked -handler4");  
// });
// btn1.removeEventListener("click",handler3);              //removeLIstner 

// // let div =document.querySelector("div");

// // div.onmouseover =() =>
// // {
// //     console.log("You are in Div")
// // };

//ONE BUTTON WITH DARK AND LIGHT MODE ON OFF
let modeBtn = document.querySelector("#mode");
let currMode ="light";

modeBtn.addEventListener("click", ()=>
{
    if (currMode ==="light")
     {
        currMode ="dark";
        document.querySelector("body")
    } else 
    {
        currMode ="light";
    }
    console.log(currMode);
});
