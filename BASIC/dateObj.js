                            

const months = ['January',
'February',
'March',
'April',
'May',
'June',
'July',
'August',
'October',
'November',
'December'
]

const days = ['Sunday',
'Monday',
'Tuesday',
'Wednesday',
'Thursday',
'Friday',
'Saturday']

const currentDate =  new Date()
console.log("Currentdate :",currentDate);

const date = new Date();

const year = date.getFullYear()
const month = date.getMonth()
const day = date.getDay()
const hours = date.getHours()
const minutes = date.getMinutes()
const second = date.getSeconds()
const milisec = date.getMilliseconds()
const dayofweek = date.getDay()


console.log("Running year is :",year);
console.log("Running month is :",month);
console.log("Running day is :",day);
console.log("Running hours is :",hours);
console.log("Running min is :",minutes);
console.log("Running second  is :",second);
console.log("Running mili se is :",milisec);
console.log("Running year is :",dayofweek);

console.log(date.toDateString());




