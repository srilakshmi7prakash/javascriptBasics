// destructuring

// Arrays
const fruits = ['apple', 'banana', 'cherry'];
const [first,second] = fruits ; 
console.log(first);
console.log(second);

// you can skip values in beween just leave an empty space in case of arrays
const animals = ["dog","cat","deer"];

const [ ,two,] = animals;
console.log(two);

// objects

// in objects you cannot skip values by leaving an emoty space just omit the value withot leaving any space
// this is possible because objects have keys and you can call according to keys

const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};


const {name,city} = person;

console.log(city);

const { name: firstName ,age: yearsold} = person;
console.log(firstName);

// nested 
const user = {
    id: 1,
    profile: {
        name: 'Alice',
        age: 25
    }
};
const {profile:details{name:fName,age:timeSinceborn}} = user