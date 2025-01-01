// 1. call() lets you to call a function explixcitly specifying the value of this keyword
//2. apply () similar to call but takes arguments as an array instead of individual par
// 3. this creates a new function that lets you define this and arguemnts and orginal fn is not called

//what exactly is this keyword?
//this keyword is contextual 
//object - that object 
// fucntion - gloabal object 
// strict mode function - udefined
// event - selected element 
// alone - gloabl object 

obj = {
   p1: 400,
   p2: 500
}
function distance(p1, p2) {
   if (this.p1 > this.p2) {
      console.log(this.p1 - this.p2);
   }
   else if (this.p2 > this.p1) {
      console.log(this.p2 - this.p1);
   }
}
distance.call(obj);

//in the above conventionally there should have been two arguments for the functionntwo numbers 
// but call lets you modify the this and assigns the value of this as the object 


function greetUser(name, timeOfDay) {
   console.log("hello" + " " + name + " " + "Good" + " " + timeOfDay)
}

var greetAlice = greetUser.bind(null, "Alice");
greetAlice("Morning");

//in the above we gave the bind functions's first argument null because we are considering that as 'this' and then from
// the second argument we are referrring to the greetUser's first argument that is name 

var inventory = {
   name: 'phone',
   price: '30000'
}
var product;
function createProduct(name, price) {
   var product = new Object();
   product.name = this.name;
   product.price = this.price
   return product;
}
console.log(createProduct.call(inventory));


//apply
const points = [
   { x: 1, y: 2 },
   { x: 4, y: 6 }
];
function calcDistance(p1, p2) {
   p1 = this[0];
   p2 = this[1]
   return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

console.log(calcDistance.apply(points));

// 25/10
const objm = { a: 5, b: 10 };
function  multiply(n1,n2){
    return this.a * this.b
}
console.log(multiply.call(objm));