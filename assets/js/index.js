'use strict';
// const toaster = require('toastr');


/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("pa-nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});



/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    }
  }
}

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
const headerActions = document.getElementsByClassName('pa-navbar-link');
const headerAction = (event) => {
  toggleNavbar()
  let label = event.target.innerText.toLowerCase();
  if(label === 'contact me') label = 'contact';
  let goto = document.querySelector(`[aria-label=${label}]`)
    $('html,body').animate(
      {
        scrollTop: $(goto).offset().top
      },
      'slow'
      );
}
addEventOnElements(headerActions, "click", headerAction);

function callToaster(description, header) {
  toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "preventDuplicates": true,
    "onclick": null,
    "showDuration": "100",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "show",
    "hideMethod": "hide"
};
  toastr.success(description, header)
}
$('#emailForm').on('submit', (e)=>{
  // e.preventDefault();
  callToaster('Redirecting to creating Email', 'Success')
})

function resumeAction(event) {
  window.open('https://drive.google.com/file/d/1QART9eAsrgRqwyU4qjRCy-JIXJ7hDPgn/view?usp=sharing','_blank')
}