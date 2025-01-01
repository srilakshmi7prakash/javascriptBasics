//They act like key value pairs where key is often string used to identify a piece of data and value
//represent actual data you want to store
//objects are mutable

//difference between dot notation and square bracket notation
//------------------------------
// dot notation is used when you know property name and square bracket when you want to access dynamically using a variable
// the things we give inside the object like india poland, etc. are the properties in an object 
const country ={"India" : "Delhi" , "Poland" : "warsaw"};


const anotherPerson = new Object();
anotherPerson.firstName = "Bob";
anotherPerson.lastName = "Johnson";


country.unitedStates = "Washington DC";
console.log(country);
console.log(anotherPerson);

//using square brackets 

const person = {
     name: "Alice",
     age: 30,
     city: "New York"
   };
   
   const propertyName = "age";
   console.log(person[propertyName]);





   
   
   const anotherProperty = "city";
   console.log(person[anotherProperty]);

//hasOnwProperty returns a true or False value
console.log(country.hasOwnProperty("Poland"));   

//creating an object using contsructor 
// creating an object using constructor function lets create multiple instance

function listSquares(one,two,three){
     this.one = one;
     this.two = two;
     this.three = three ;
}
console.log(new listSquares(23,34,49));
let squaresFirst = new listSquares(1,4,9);
console.log(squaresFirst);


//METHODS IN JAVASCRIPT 
//methods are function defined as properties in objects
//they allow object to perform actions relevant to their purpose

//to find mean age 

//below the key value pair are properties and the function is method
// methods rae function attached to objects that perform a specific function to that object 
const age = {
     "Roy" : 23,
     "Alice" : 12,
     "John" : 8 ,
     ageSum(){
      console.log(this.Roy + this.Alice + this.John);
     }
};

age.ageSum();


// Different ways to display objects 

// properties

console.log(age.Roy);

// objects in loop
for (let x in age){
     console.log(age[x]);
}

// Object.values to convert objects to string
console.log(Object.values(age));

// diplay as a JSON
console.log(JSON.stringify(age));

//functions wont be converted to JSON so convert it to string before stringify
age.ageSum=age.ageSum.toString();

console.log("afetr converting function to string " + JSON.stringify(age));

// getters and setters in js Objects

const sumNum = {
     num1 : 23 , 
     num2 : 45 ,
     num3 : 39,
     num4 : 0  ,
     set lastNum(num){
          this.num4 = num;
     },
     get sumOf(){
          return this.num1 + this.num2 + this.num3;
     }
}

sumNum.lastNum = 3;
Object.defineProperty(sumNum,'multiplyValues',{
     get : function(){ 
        return  this.num1 * this.num2 * this.num3;
     }
});
console.log(sumNum.sumOf);
console.log(sumNum);
console.log(sumNum.multiplyValues);
var numKeys = Object.keys(sumNum); 
console.log(numKeys);
console.log(typeof(numKeys));
// why are getters and setters used 
// 1. better data quality
// 2. simple syntax
// 3. useful for things behind the scenes
// when you define an array or an object you inherently get few methods and properties you did 
// not define, we get this because the object inherit something called prototype and 
// this itself is an object thus we get properties and methods
// you can access these properties and methods like 
console.log(Array.prototype);

