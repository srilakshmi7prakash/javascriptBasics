function a(){
    console.log(b);
}

var b=2;
a();


//we know that var has a function scope but here we are able to ccess var from inisde a function that is defined globally 
//that is because var defined globally and not inside a function