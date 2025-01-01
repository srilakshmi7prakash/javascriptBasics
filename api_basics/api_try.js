document.addEventListener("DOMContentLoaded",function(){
    fetchsampledata();
})
function fetchsampledata(){
    fetch('https://api.spacexdata.com/v4/launches/past')
    .then(Response=>{   // it is a callback function => is a kind of callback function called arrow
        if (!Response.ok){
        throw new Error("Network response error");
        }
        return Response.json(); 
    })
    .then(post_data=>{
            displaydata(post_data);   //this is a function call function defined below
    })
    .catch(error=>{    //it is a convention to name it error 
        console.log("there was a problem with the response",error);
    })
}
function displaydata(post_data){
    const dataWrapper=document.getElementsByClassName("data-display-wrapper")[0];
   post_data.forEach(post_dataitem=>{
    const dataItemElement=document.createElement("li") ;
    dataItemElement.innerHTML=`<strong>${post_dataitem.name}</strong>: ${post_dataitem.flight_number}`;
    dataWrapper.appendChild(dataItemElement);
   })
}