

  // line container
  const hamburger = document.querySelector(".hamburger");
  // ul = links container
  const navLinks = document.querySelector(".links-container");
  // links container + li || ul + li
  const links = document.querySelectorAll(".links-container li");

  
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
      link.classList.toggle("fade");
    });
  });

// // aggiungere funzione home, product , contact

  links.forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.toggle("open");
        links.forEach(link => {
          link.classList.toggle("fade");
           });
       });
  });