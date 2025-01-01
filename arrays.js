//In array some methods have parenthesis and some doesn't this is because 
//methods with parenthesis : These methods are functions that perform an action on the array and potentially modify the
// original array or return a new array. They require parentheses to be called and 
//often take arguments (additional information) to control their behavior.sort(), pop(), push(), map(), filter(), 
//methods without parenthesis : these are properties of the array and it contains the information about the array itself
//basically it is the difference between properties and methods

//use for loops if you want to iterate over the specific index, efficient iteration for large data 
// use for in if you want to iterate over multiple properties of an object


//sorting an array
var randomnum = [24, 1, 66, 98];
var sortasc = randomnum.sort(function (x, y) { return x - y });
console.log(sortasc);

//checking if an array is empty
var checkempty = randomnum.length;
if (checkempty == 0) {
    console.log("Array is empty")
}
else {
    console.log("Array is not empty")
}

//find sum of all elements in an array

var sumofall = randomnum.reduce(sumfunc,0);
function sumfunc(initial,current){
    return initial + current
}

//another way instead of using an elaborate function
// const sumofall = randomnum.reduce((initial,current)=> initial + current ,0);                                                                                          
console.log(sumofall);
//finding sum using for loop

var SumOfElements = 0;
for (var i = 0; i < randomnum.length; i++){
    SumOfElements += randomnum[i];
}
//the below is  not ideal because array migt contain inumerable properties since our array only has one this worked but it might not work 
//everytime also for in loop takes a lot more time and also for in return indexes as strings so there is a type conversion issue 
// for (var i in randomnum){
//     SumOfElements += randomnum[i];
// }
console.log("sum using for" +" " + SumOfElements );

//reverse an array

var reversesrr = randomnum.reverse();
console.log(reversesrr);

//find the last element
var ltelem= randomnum[randomnum.length -1];
console.log("last number is" +" " + ltelem);

//check if there are empty elements

var ifEmpty= randomnum.every(element=> element !== null && element !== undefined);
if (!ifEmpty){
    console.log("The array has empty elements");
}
else{
    console.log("The array doesnt empty elements");
}
//eliminating duplicate elements

var animals=['tiger','lion','zebra','koala','koala'];
var animalsDup = new Set(animals);
console.log("Array without duplicate element: " + Array.from(animalsDup.values()));

//getting duplicate elements 

uniqueElements= new Set(animals);
var duplicateElement = animals.filter(animal=> !uniqueElements.has(animal));
console.log(" duplicate elements" +duplicateElement);


//array's index = array value [3,1,0,2] = [0,1,2,3]

const indexArray = [2,0,4,3,1];
for (i=0; i < indexArray.length; i++){
  indexArray[i]= i;
}
console.log(indexArray);
//Given an array of integers and another array containing the desired indexes
// for each element in the first array, reorder the first array based on the indexes provided in the second array.

var sampleArray = [10, 20, 30, 40] ;
var desiredIndex = [2, 0, 1, 3];
const sampleDesired = new Map();

sampleArray.forEach((elem,index)=>{
    sampleDesired.set(elem,desiredIndex[index]);
})
console.log(sampleDesired);
sampleDesired.forEach((index,elem)=>{   //foreach on map returns value,key,map
sampleArray[index] = elem;
})

console.log(sampleArray);

//find peak element
var peakElemArray= [23,32,1,98,76];
    if (peakElemArray[0] > peakElemArray[1]  || peakElemArray[peakElemArray.length - 1] > peakElemArray[peakElemArray.length - 2]  ){
        console.log(peakelem);
    }
    else{
        peakElemArray.forEach((peakelem,peakindex)=>{
            if (peakElemArray[peakindex] >peakElemArray[peakindex + 1] &&  peakElemArray[peakindex] >peakElemArray[peakindex - 1] ){
             console.log(peakelem);
            }
        })
        
    }

//remove duplicates without set 

var numarr= [10,46,23,10,1,98,23];
 var duparr= [];

numarr.forEach((num,numindex)=>{
    if (!duparr.includes(num)){
      duparr.push(num);
    }
})
console.log(duparr);

//removing without creating a new array 0(1) space complexity

nodup = numarr.filter((num,index,self)=>{
   return !self.includes(num,index+1);
})
console.log(nodup);

//finding intersection
const arr1 = [1, 2, 4, 6, 8];
const arr2 = [2, 4, 5, 6, 7];

const resultarr = [];

let arr1ind= 0;
let arr2ind = 0;
while (arr1ind < arr1.length && arr2ind < arr2.length){
   if (arr1[arr1ind] === arr2[arr2ind]){
    resultarr.push(arr1[arr1ind]);
    arr1ind +=1;
    arr2ind +=1;
   }
   else if ( arr1[arr1ind]< arr2[arr2ind]){
    arr1ind +=1;
   }
   else{
    arr2ind +=1 ;
   }
}
console.log(resultarr);

//merge two sorted array

let array1 = [1, 3, 5, 7, 9];
let array2 = [2, 4, 6, 8, 10];
for (let i = 0 ; i < array2.length ; i+=1){
    if (array1[i] == array2[i]){
    }
    else if (array1[i] > array2[i]){
        array1.splice(i,0,array2[i]);
    }
    else{
        array1.splice(i+1,0,array2[i]);
    }
}

console.log(array1 + "sorted merged array");

// converting Arrays to Json
// Here  Js Array to Json string representation
var months = ["Jan","Feb","March"];
var monthJs= JSON.stringify(months);
console.log(monthJs);
console.log(typeof(monthJs));

var randNum = [1,2,3,4,5];
var randNumJ = JSON.stringify(randNum);
console.log(randNumJ);
console.log(typeof(randNumJ));

console.log( Object.keys(randNum));

// spread operator
arrnum =[11,23,39,45]

console.log(...arrnum);