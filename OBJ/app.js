// // student = {
// //     fullName : "Hardik tank",
// //     marks : 98.5,
// //     printmarks : function (){
// //             console.log("marks=", this.marks);

// //     }
// // };
// const employee ={
//     calcTax(){
//         console.log("tax rate is 10%");
//     }
// };
// const karanArjun ={
//     salary :50000,
// };
// karanArjun.__proto__=employee;

//CLASS IN JS
// class Toyotacar{
//     constructor(brand, mileage){
//         console.log("Creating new object");
//         this.brand =brand;
//         this.mileage=mileage;

`//     }
//     start()
//     {
//         console.log("start");
//     }
//     stop()
//     {
//         console.log("stop");
//     }
//     setbrand(brand){
//         this.brand=brand;
//     }
// }
// let fortuner=new Toyotacar("fortuner",10);  //constructor
// console.log(fortuner);
// let lexus=new Toyotacar("lexus",18);        //constructor
// console.log(lexus);

//inheritance class

// class person{
//     eat()
//     {
//         console.log("eat");
//     }
//     sleep()
//     {
//         console.log("sleep");
//     }
// }
// class engineer extends person{
//     work()
//     {
//         console.log("solver problems,build something ");
//     }
// }
//     class doctor extends person{
//         work()
//         {
//             console.log("patient treatment");
//         }
//     }

//     let hardikTank= new doctor();

//SUPER() KEYWORD USED
// class person{
//     constructor(name){
//         this.species ="homo sapiens";
//         this.name=name;
//     }
//     eat()
//     {
//         console.log("eat");
//     }
    
// }
// class engineer extends person{
//     constructor(name){
//         super(name); //to onvoked person class constructor.
//     }
//     work()
//     {
//         super.eat();
//         console.log("solver problems,build something ");
//     }
// }
//     let engObj= new engineer("Hardiktank");

//USER DATASHEET PROGRAM
let data ="secret information";
class user{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewdata (){
        console.log("data=",data);
    }
}
let student1=new user("hardik","abc@email.com");
let student2=new user("tushal","xyz@email.com");
 
  