//destr in objects
obj1 = {
    firstName : "srilaskhmi",
    lastName : "prakash",
    currentAge : "23"
};

// we are initializing the objects as variables
let {firstName,lastName,middleName="p",...rest} = obj1;  //(destructuring objects as variables in js)
console.log(middleName);
console.log(rest);
// the variables can be renamed as well 

let {firstName:fName,lastName:lName} = obj1;

// if you try to destructure a property that is not there you get a undefined message and not an error


//ARRAYS

