/* Script for navigation menu */

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  
  var topbutton = document.getElementById("topBtn");
  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topbutton.style.display = "block";
     } else{
       topbutton.style.display = "none";
     }
  }
  
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  /* Script for logga in page */

function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);

  }

  //setFormMessage(loginForm, "success", "Du är inloggad!");
function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
   inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
} 

document.addEventListener("DOMContentLoaded", () => {
const loginForm = document.querySelector("#login");
const createAccountForm = document.querySelector("#createAccount");

document.querySelector("#linkCreateAccount").addEventListener("click", e => {
e.preventDefault();
loginForm.classList.add("form--hidden");
createAccountForm.classList.remove("form--hidden");

});
document.querySelector("#linkLogin").addEventListener("click", e => {
e.preventDefault();
loginForm.classList.remove("form--hidden");
createAccountForm.classList.add("form--hidden");
 });

 loginForm.addEventListener("submit", e => {
e.preventDefault();

setFormMessage(loginForm, "error", "Ogiltig kombination av användarnamn och lösenord");
 });

 document.querySelectorAll(".form__input").forEach(inputElement => {
inputElement.addEventListener("blur", e => {
if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
    setInputError(inputElement, "Användarnamnet måste vara minst 10 tecken långt");
}
});

inputElement.addEventListener("input", e => {
    clearInputError(inputElement);
});
 });
});