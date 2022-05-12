/* Script for navigation menu */

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
 /* Script for top button page */

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

  /* Script for registrering page */

  !(function () {
    const form = document.getElementById("form");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const password2 = document.getElementById("password2");

    // Show error below field
    function showError(input, message) {
      const formControl = input.parentElement;
      formControl.className = "form-control error";
      const small = formControl.querySelector("small");
      small.innerText = message;
    }

    // Show that the field is filled correctly
    function showSuccess(input) {
      const formControl = input.parentElement;
      formControl.className = "form-control success";
    }

    // Check if the email address is valid
    function checkEmail(input) {
      const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(input.value.trim())) {
        showSuccess(input);
      } else {
        showError(input, "E-postadressen har inte korrekt format");
      }
    }

    // Kontrollera obligatoriska fält
      /**
     *
     * @param {HTMLElement[]} inputElements
     * @returns {boolean}
     */

    function checkRequired(inputElements) {
     let isRequired = false;
      inputElements.forEach(function (input) {
       if (input.value.trim() === "") {
        showError(input, `Du måste ange ett värde för ett fält ${getFieldName(input)}`);
        isRequired = true;
      } else {
        showSuccess(input);
      }
    });

    return isRequired;
  }

  // Check the field value against the minimum and maximum length
  function checkLength(input, min, max) {
    if (input.value.length < min) {
      showError(
        input, `Fältet ${getFieldName(input)} får inte vara mindre än ${min} tecken långt`);
    } else if (input.value.length > max) {
      showError(
        input, `Fältet ${getFieldName(input)} får inte vara länge än ${max} tecken`);
    } else {
      showSuccess(input);
    }
  }

  // Password Compliance Check
  function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
      showError(input2, "Lösenorden matchar inte");
    }
  }

  // Getting the field name
  function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
  }

  /* Set up event listeners on the form
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (checkRequired([username, email, password, password2])) {
      checkLength(username, 3, 15);
      checkLength(password, 6, 25);
      checkEmail(email);
      checkPasswordsMatch(password, password2);
    }
  });

})();

/* Script for sökning */

const endpoint = 'https://raw.githubusercontent.com/OlgaNiem/MyProg/master/.vscode/books.json';
 
const books = [];
 fetch(endpoint)
 .then(blob => blob.json())
 .then(data => books.push(...data));
console.log(books);
 function findMathches(wordToMatch, books) {
   return books.filter(place => {
     const regex = new RegExp(wordToMatch, 'gi');
     return place.title.match(regex) || place.year.match(regex) || place.author.match(regex)
   });
 }

 function displayMatches() {
   const matchArray = findMathches(this.value, books);
   const html = matchArray.map(place => {
     const regex = new RegExp(this.value, 'gi');
     const titleName = place.title.replace(regex, `<span class="hl">${this.value}</span>`); 
     const authorName = place.author.replace(regex, `<span class="hl">${this.value}</span>`); 
  return `
  <li>
  <span class="name">${titleName}, ${authorName}</span>
  <span class="year">${place.year}</span>
</li>
  `;
    }).join('');
   suggestions.innerHTML = html;
}


})
const tdInput = document.querySelector('.td');
const suggestions = document.querySelector('.suggestions');
  