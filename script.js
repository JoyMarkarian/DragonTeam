















































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