let button = document.querySelectorAll(".toggle-text");
let details = document.querySelectorAll(".projectDetails");

//funziona ma contemporaneamente su tutti i details

button.forEach(button => {
    button.addEventListener('click', ()=> {
        for(i=0; i < details.length; i++)
        details[i].classList.toggle("show");
    })
});
