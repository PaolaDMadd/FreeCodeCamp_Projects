let button = document.getElementsByClassName(".toggle-text");
let details = document.getElementsByClassName(".projectDetails");

button.addEventListener("click", () =>{
    details.classList.toggle("show");
});
    
