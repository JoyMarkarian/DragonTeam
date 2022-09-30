



/* Partie de Sylvain*/
let sidenav = document.getElementById("mySidenav");
let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
  sidenav.classList.add("active");
}
function closeNav() {
  sidenav.classList.remove("active");
}
/* Partie de Gaetan*/






/* Partie de Sébastien*/




/* Partie de Charlie*/






































// const button = document.getElementById("form-button");
// button.addEventListener("submit", function(event){
    const message =
    "Thank you for submitting your request. The.";   

document
    .getElementById("form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      alert(message);
    });

/* Partie de Joy*/
