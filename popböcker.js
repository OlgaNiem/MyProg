/* Script for navigation menu */

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


  const panels = document.querySelectorAll('.panel');

    function toggleOpen() {
      console.log('Hello');
      this.classList.toggle('open');
    }

 /* Script for top 5 books page*/
    function toggleActive(e) {
      console.log(e.propertyName);
      if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
      }
    }

    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

  /* Script for top button */
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
  