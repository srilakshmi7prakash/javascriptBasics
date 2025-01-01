var greet = ()=>{
 console.log("hi")
}
greet();

// 
var morning = (num1,num2)=>{
return (num1 + num2);
}
console.log(morning(2,3));


var evening = a1=>{
    console.log(a1)
}

evening('two');

var afternoon = one =>{
 console.log(one);
}
afternoon("hi there an arrow function with string");

var strUpper = str => str.toUpperCase();

console.log(strUpper("hello"));

// implicit returns (if the body has only simple expression omit braces)
const num = (num1,num2) => num1*num2;

console.log(num(2,2));

// if there are only one parater omit parenthsis 
const multiply = x => x*x
console.log(multiply(9));

function counter(){
  this.count = 0;
  setInterval(()=>{
    this.count++;
    console.log(this.count);
  },1000);
}
counter()

