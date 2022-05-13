const endpoint = 'https://gist.githubusercontent.com/zer0cheros/144c99f743a1d83699bc7571242f14bf/raw/76e3d45cf90058b36823d17cc95cd4d5a37fbcf6/gistfile1.txt';

const searchingInput = document.querySelector('.searching');
const suggestions = document.querySelector('.suggestions');

searchingInput.addEventListener('change', displayMatches);
searchingInput.addEventListener('keyup', displayMatches);


const cities = [];
fetch(endpoint)
  .then(res => res.json())
  .then(data => cities.push(...data));
function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    // here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, 'gi');
    return place.author.match(regex) || place.title.match(regex)
  });
}

function numberWithCommas(x) {
  if(x.toString() == 'undefiend'){
    return
  }else{  
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
  

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.author.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.title.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.pages)}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}



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
