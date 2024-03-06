// // // // // // // // console.log("HELLO BUDDY !");
// // // // // // // // alert("Welcome to Dom page");
// // // // // // // // let HEADING = document.getElementById("HEADING");
// // // // // // // // console.dir(HEADING);
// // // // // // // let parah= document.getElementsByTagName("p");
// // // // // // // console.dir(parah);
// // // // // // let element = document.querySelector("p");
// // // // // // console.dir(element);                           // 1st element

// // // // // // let firstEle = document.querySelectorAll("p");
// // // // // // console.dir(firstEle);                          // all element
// // // // // let div = document.querySelector("div");
// // // // // console.dir(div);

// // // // let h2=document.querySelector("h2");
// // // // console.dir(h2.innerText);
// // // // h2.innerText ="Hello Fruits";

// // // let divs =document.querySelectorAll(".box");
// // // let idx=1;
// // // for(div of divs)
// // // {
// // //     divs.innerText =`${idx}New value Define`;
// // //     idx++;
// // // }

// // let newbtn =document.createElement("button");
// // newbtn.innerText ="Click me";
// // console.log(newbtn);
// // let div =document.querySelector("div");
// // div.after(newbtn);

// //NEW PROGRAM WITH JS BUTTON
let newbtn =document.createElement("button");
newbtn.innerText ="Click me";
newbtn.style.color = "white";
newbtn.style.backgroundColor ="red";
document.querySelector("body").prepend(newbtn);

