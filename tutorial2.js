//ch#2:operators and conditional statement


// (/* .......  */) multiple line comment
//  (//) single line comment



//Artimethic operators
//  + , - , multiply * , divide /

let a=5;
let b=2;
console.log("a =b",a,"& b =",b);
console.log("a + b =",a+b);  // Addition 
console.log("a - b =",a-b);    // subtraction
console.log("a * b =",a*b);   // multiply
console.log("a / b =",a/b);   // divide 
console.log("a % b =",a%b);   // modulus sign (divide me jo reminder bachta hai)
console.log("a ** b =",a**b);  // exponentiation means 5 to the power 2 = 5^2 {5x5=25}

//unary operators
console.log('unary operators increment ++');
let c=5;
// let d=2;
console.log('c = ',c,'after increment');
c++;
console.log('c =',c);
console.log('unary operators decrement --');
let e=5;
console.log('e = ',e,'after decrement');
e--;
console.log(e);

//post increment and decrement


//Assignment operators (= , += , -= , *= , %= , **= )
console.log('Assignment operators');
// += operator
let f =5;  
let g =2;
f += 4;   // f = f+4
console.log('f =',f);

//-= operator
let h = 5;
let i = 2 ;
h -= 4;
console.log('h =',h);

// *= operator
let j = 5;
let k = 2;
j *= 4;
console.log('j =',j);

// /= operator
let l = 5;
let m = 2;
l /=4;
console.log('l = ',l);

// %= operator
let n = 5;
let o =2;
n %= 4;
console.log('n =',n);

// **= operator
let p= 5;
let q = 2;
p **=4 ;
console.log('p =',p);
//----------comparision operator------------------

// Equal to ==
console.log('comparision operator  a = 5 and b = 2');
let r=5;
let s=2;
console.log('r == s',r==s);

//Equal to & type
let v=5;
let w='2';
console.log('v === w',v===w);

//not Equal to !=
let t=5;
let u=2;
console.log('t != u',t!=u);

//not double equal
let x=5;
let z=2;
console.log('x!==',x!==z);

//------------Logical operator-------
//Logical and &&   ---------  "If even one condition is false, the answer will be false."
let $1=6;
let $2=5;
console.log('cond 1 && cond 2',$1 > $2 && $1 === 6); //The answer is true
 
// Logical OR|| If both conditions are false,the result will be false;otherwise, if even one condition is true,the answer will be true.
let $3=6;
let $4=5;
console.log('cond 1 || cond 2',$3 > $4 || $3 === 4);//The answer is true bcoz one condition is true .

//Logical not !  "This gives the opposite answer."
 let $5=6;
let $6=5;
console.log('!($6 > $5)' , !($6 > $5));//the answer is true

//conditional satatements :-  It is used for checking conditions, it has 3 conditions.
// if statement
let age=20;
if(age>=18){
    console.log('you can vote');
}
//multiple type:-
if(age <18){
    console.log("you cannot vote");
}
//------------------ Let's take another example of if satement.
let mode='dark';
let color;
if(mode==='dark'){
    color='black';
}
if(mode==='light'){
    color='white';
}
 console.log('if statemenet',color);

 //We use an if-else statement instead of multiple if statements.
//if-els statement
let mode1='light';
let color1;
if (mode1==='dark') {
    color1='black';
}else{
    color1='white';
}
console.log('if-else statement',color1);
 // ---------- Let's take another example of if-else satement.
let num=9;
if(num % 2 === 0){
    console.log(num,'is even');
}else{
    console.log(num,'is odd');
}

//else if statement-----------
let mode2='pink';
let color2;
if(mode2 === 'dark'){
    color2='black';
}else if (mode2 ==='gray'){
    color2='gray';
}else if (mode2 ==='blue'){
    color2='blue';
}else if(mode2 ==='brown'){
    color2='brown';
}else {
    color2='white'
}
console.log("else if statement",color2);

//ternary operator .  This is nothing; can you call this a simpler or compact if-else.
let age_check=18;
let check= age_check >=18 ? 'adult' : 'not edult';
console.log(check);

// switch statement :- This is also like if-else; we don't use it in day-to-day life.
let expr='banana';

switch(expr){
    case'papaya':
    console.log("Papaya is $2.79 per pound.");
    break;
    case'mango':
    console.log("mango is $1.78 per pound.");
    break;
    case'orange':
    console.log("orange is $0.59 per pound.");
    break;
    default:
        console.log("Sorry, we don't have that.");
}
/*ch#2 Q/A
Q1: Get user to print a number using prompt(Enter a number:). Check if the number is a multiple of 5 or not.

Q2: Write a code which can give grades to students according to their scores:*/


//--------------- ch#2 complete




