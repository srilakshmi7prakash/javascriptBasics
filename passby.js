//passby value
var valuea = 23;
function byValue(num){
console.log(num+1) ;
}

byValue(valuea);
console.log(valuea);


//passby reference
var refObj={ age:21 };

function byRef(obj){
 obj.age + 1;
 console.log(obj);
}

byRef(refObj);
console.log(refObj);


