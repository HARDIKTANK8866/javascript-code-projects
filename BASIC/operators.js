                                                                // ARITHMATIC OPERATORS
let a = 5
let b = 2

console.log(`a = ${a} and b = ${b}`);
console.log(`a + b = ${a+b}`);
console.log(`a - b = ${a-b}`);
console.log(`a * b = ${a*b}`);
console.log(`a / b = ${a/b}`);

console.log(`a % b = ${a%b}`); //modulus is return remainder
console.log(`a ** b = ${a**b}`); //exponentiation

//                                                                  UNARY OPERATORS

console.log(`a ++  = ${a++}`);     //post increment
console.log(`${a} is increment `);
console.log(` ++a   = ${++a}`);    ///pre increment
console.log(`a --  = ${a--}`);     // post decrement
console.log(`${a} is decrement `);
console.log(`--a   = ${--a}`);     //pre decrement 

console.log(`**********************ASIGNMENT OPERATORS`);
                                                                    //ASIGNMENT OPERATORS
console.log(`a = ${a} and b = ${b}`);
a += 4;                             //a = a + 4
console.log(`a = ${a}`);
a -= 5;
console.log(`a = ${a}`);
a *= 4;
console.log(`a = ${a}`);
a %= 3;
console.log(`a = ${a}`);
a **= 5;
console.log(`a = ${a}`);

console.log(`**********************COMPARISON  OPERATORS`);
                                                                //COMPARISON OPERATORS
let x = 5  ;     //Number DATATYPE
let y = "2";     //STRING  DATATYPE
console.log(`5 == 2 ${x==y}`);          //QQUAL TO
console.log(`5 != 2 ${x!=y}`);      // NOT EQUAL                                                                 
console.log(`5 === 2 ${x===y}`); 
console.log(`5 !== 2 ${x!==y}`); 
console.log(`5 > 2 ${x>y}`);     
console.log(`5 < 2 ${x<y}`);  
console.log(`5 >= 2 ${x>=y}`);
console.log(`5 <= 2 ${x<=y}`);  



console.log(`**********************LOGICAL  OPERATORS`);
                                                                //LOGICAL  OPERATORS
let c = 5
let d = 3
console.log(`a = ${c} and b = ${d}`);
let con1 = c > d;
console.log(`con1 is : ${con1}`);
let con2 = c!==d;
console.log(`con2 is : ${con2}`);
console.log(`con1 && con2 = ${con1 && con2}`);
console.log(`con1 || con2 = ${con1 || con2}`);
console.log(`!(5<3) = ${!(c===d)}`);

//                                                          TERNARY OPERATORS

let age = 15
let drive = age>18 ? 'YES DRIVE' : 'NO DRIVE'            //  ? TERNARY SIMILER TO IF ELSE
console.log(drive);

console.log(`**********************STRINGS  OPERATORS`);
const str1 = "HARDIK"
const str2 = "tank"
const strings = str1 +""+ str2              // + used to add concatenate string
console.log(`${str1} and ${str2} add(+) concatenate string value is  :${strings}`);



const p = 5
const q = 3
console.log(p<<q); 

//data opertaors 

 
//Arithmetic + - / *  modulus % , ** exponenation ++ incremnet -- decrement
// assignment op, = , += ,-+ ,*= ,%=,**= 
//comparison op, == equal to , != not quial to , === equial to type , !== not equal to type
// , > , >= , < , <= , ? ternary op.
// loginal op, && || !  
// string op, + add concanate 
// shift assignment op,  <<, <<= , >> ,>>= >>>= 
// bitwise op, &= , ^= , !=    x&=y x=x&y 
//logical assignment op, &&= , ||=, ??=
// type op, type of instance of