setTimeout(function () {
    console.log("this is a callback function")
}, 8000);

function a(b) {
    console.log("this is a");
    b();
}

a(function b() {
    console.log("this is b");
})
// here in the above code b is the callback it is not called immedeately but the responsibility of 
// calling it is with the a 

function mycustomfunc() {
    console.log("This is a function in set timeout argument");
}
// setTimeout(mycustomfunc(),2000);

function child() {
    console.log("yes mom");
}

function mom(child) {
    console.log("where are you");
    child();
}

mom(child);