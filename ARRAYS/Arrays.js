// // // // // let heros =["Batman ","Thor","Spiderman","Hulk","Ironman","Antman"]
// // // // // //console.log(heros);
// // // // // for(let i=0;i<heros.length;i++)
// // // // // {
// // // // //     console.log(heros[i]);
// // // // // }
// // // // //AVERAGE OF MARKS WITH ARRAYS AND FOR LOOP
// // // // let marks=[85,97,44,37,76,60]
// // // // let sum = 0;
// // // // for(let val of marks)
// // // // {
// // // //     sum += val;
// // // // }
// // // // let avg = sum / marks.length;
// // // // console.log(`avg marks of class = ${avg}`);
// // // let item=[250,645,300,900,50]
// // // let i =0;
// // // for(let val of item)
// // // {
// // //     console.log(`value at index= ${i}=${val}`);
// // //     let offer = val / 10;
// // //     item[i]= item[i]-offer;
// // //     console.log(`value after offer = ${item[i]}`);
// // //     i++;

// // // }
// // //ARRAY METHODS
// // let fooditems =["potato","burger","cherry","banana","apple"]
// // //fooditems.push("frankey","ladyfingrs");
// // console.log(fooditems);
// // let deletedval=fooditems.pop();
// // console.log(deletedval);
// // //ARRAY CONVERT TO TOSTRINGS
// // console.log(fooditems.toString());
// //CONCAT ARRAY TWO ARRAY JOIN IN DIFFRENT NEW ARRAY
//  //let marvel_heros=["batman","thor","spiderman","ironman"];
// // let dc_heros=["superman","antman"];
// // let heros = marvel_heros.concat(dc_heros);
// // console.log(heros);
// //marvel_heros.unshift("krish"); UNSHIFT AND SHIFT ARRAY USED TO ADD ND DELETED ARRAY
// //SLICE() METHOD
// //let heros=["batman","thor","spiderman","ironman","antman","superman"];
// //console.log(heros);
// //console.log(heros.slice(1, 4));
// //SPLICE() ARE USED TO ORIGINAL ARRAY CHANGED ADD REPLACE REMOVE
// let arr = [1,2,3,4,5,6];
// //arr.splice(2,2,505,606);
// //add element
// //arr.splice(1,0,111);
// //delete element
// arr.splice(4,1);
// //replace arry
// arr.splice(4,1,12);

// console.log(arr);

//PRACTICE FOR ARRAY
let companies =["Bloomberg","Microsoft","Uber","Google","Igm","Netflix"];
console.log(companies);
companies.shift();
companies.splice(3,1,"Ola");
companies.push("Amazone");
console.log(companies);
