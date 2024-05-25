
let students = [
  { name: "heen", age: 22 },
  { name: "rahul", age: 19 },
  { name: "Chirag", age: 25 },
  { name: "David", age: 17 },
  { name: "Emraan", age: 20 },
  { name: "Fenil", age: 18 },
  { name: "Garmi", age: 23 },
  { name: "Hardik", age: 21 },
  { name: "Iqbal", age: 24 },
  { name: "Jayesh", age: 19 },
];

// let adults = students.filter((student) => student.age >= 18);
// console.log("Adult Students Array:", adults);


let dataNeeded = prompt("What data do you need data? Enter 'all' for all students or 'adults' for students who more than 18:");

if (dataNeeded === 'all') 
    {
    console.log("All Students Array:", students);
} 
else if (dataNeeded === 'adults')
     {
    let adults = students.filter(student => student.age >= 18);
    console.log("Adult Students Array:", adults);
} 
else {
    alert("Invalid input! Please enter 'all' or 'adults'.")
    console.log("Invalid input! Please enter 'all' or 'adults'.")
}