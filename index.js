let button = document.querySelectorAll('.box');
let body =  document.querySelector('body');
button.forEach((button, index) =>{
    button.addEventListener("click", (event) =>{
        console.log(event.target);
        if(event.target.id == "red"){
           body.style.backgroundColor = event.target.id;
        }
        if(event.target.id == "green"){
            body.style.backgroundColor = event.target.id;
         }
         if(event.target.id == "blue"){
            body.style.backgroundColor = event.target.id;
         }  
         if(event.target.id == "gray"){
            body.style.backgroundColor = event.target.id;
         }
         if(event.target.id == "yellow"){
           body.style.backgroundColor = event.target.id;
        }
    })
})





