//simplepromise

function fetchData(url){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
         const data ={ message : "Data recieved successfully" };
         resolve(data);
        },1000);
    })
}
fetchData('https://api.spacexdata.com/v4/launches/past')
.then(data =>{
    console.log("data", data);
})
.catch(error=>{
 console.log("The error is ", error);
})




