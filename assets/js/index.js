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
  if(document.querySelector('.pa-overlay.active')) toggleNavbar();
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

let button = document.getElementsByClassName("pa-theme-button");

let toggled = false;
let theme = window.localStorage.getItem('data-theme');
if(theme) document.documentElement.setAttribute('data-theme', theme);
function themeChange(event) {
  if (toggled) {
    toggled = false;
    document.documentElement.setAttribute('data-theme', 'dark');
    window.localStorage.setItem('data-theme', 'dark');
    setThemeRelatedProp();
    return;
  }
  toggled = true;
  document.documentElement.setAttribute('data-theme', 'light');
  window.localStorage.setItem('data-theme', 'light');
  setThemeRelatedProp();
}
addEventOnElements(button, "click", themeChange);
function setThemeRelatedProp() {
  if(window.localStorage.getItem('data-theme') === 'dark') {
    button[0].style.top = '0%';
    button[0].setAttribute('title','Change theme to light');//
    document.querySelector('.pa-container>a img').setAttribute('src','./assets/images/agathiyan-logo-black-short.png')
  } else {
    button[0].style.top = '10%';
    button[0].setAttribute('title','Change theme to dark');
    document.querySelector('.pa-container>a img').setAttribute('src','./assets/images/agathiyan-logo-only-short.png')
  } 
}
setThemeRelatedProp();

// Event listener for the button click
let toggleButton = document.getElementsByClassName('toggleButton')
function toggleMagic() {
    let getCanvas = document.querySelector('canvas');
    
    if (getCanvas.style.display === 'none') {
      getCanvas.style.display = ''
    } else {
      getCanvas.style.display = 'none'
    }
}
addEventOnElements(toggleButton, "click", toggleMagic);
setTimeout(() => {
  $('.toggleButton').trigger('click')
}, 1000);
let toggleMoreButton = document.getElementsByClassName('pa-more-action-toggle-icon');
function toggleMoreAction(event) {
  let getToggleIcon = document.querySelector('.pa-more-action-toggle');
    
  if (getToggleIcon.style.display === 'none') {
    getToggleIcon.style.display = 'block'
    if(document.getElementsByClassName('pa-overlay-container').length) {
      document.body.style.overflow = 'hidden';
      document.getElementsByClassName('pa-overlay-container')[0].append(getToggleIcon)
    } else {
      document.body.style.overflow = 'hidden';
      let div = document.createElement('div')
      div.classList.add('pa-overlay-container');
      div.append(getToggleIcon)
      document.body.appendChild(div);
    }
    dropdownLikePosition(event)
  } else {
    // if(document.getElementsByClassName('pa-overlay-container').length) document.getElementsByClassName('pa-overlay-container')[0].remove();
    document.body.style.overflow = '';
    getToggleIcon.style.display = 'none'
  }
}
toggleMoreAction()
addEventOnElements(toggleMoreButton, "click", toggleMoreAction);
let popupPositionEvent = '';
let resizeObserver = '';
function dropdownLikePosition(event) {

  let openedPopupComponent = document.querySelector('.pa-more-action-toggle');
  popupPositionEvent = event;
  let currentEventTarget = popupPositionEvent['target'];
  const windowHeight = window.innerHeight;
  let clickedPosition, clickedBtnWidth, clickedBtnHeight;
  if (currentEventTarget.classList.contains('clickedbtnWidth')) {
    clickedPosition = currentEventTarget.getBoundingClientRect();
    clickedBtnWidth = currentEventTarget.offsetWidth;
    clickedBtnHeight = currentEventTarget.offsetWidth;
  } else {
    clickedPosition = currentEventTarget.closest(".clickedBtnWidth").getBoundingClientRect();
    clickedBtnWidth = currentEventTarget.closest(".clickedBtnWidth").offsetWidth;
    clickedBtnHeight = currentEventTarget.closest(".clickedBtnWidth").offsetHeight;
  }
  let xPosition = clickedPosition.left;
  let yPosition = clickedPosition.top;
  var openedPopupWidth = openedPopupComponent.offsetWidth;
  let openedPopupHeight = openedPopupComponent.offsetHeight;

  let position = {
    top: undefined,
    left: undefined
  };
  // choose left are right
  if ((window.innerWidth - xPosition) - (openedPopupWidth + clickedBtnWidth) > 0) {
    position['left'] = Math.floor(xPosition);
  } else {
    position['left'] = Math.floor(xPosition - openedPopupWidth);
  }
  // choose top or bottom or center

  if (windowHeight - (yPosition + openedPopupHeight + clickedBtnHeight) > 0) {
    position['top'] = Math.floor(yPosition + clickedBtnHeight);
  }
  else {
    if (((yPosition) > openedPopupHeight)) {
      // find hidden area of popup height and add with ct
      position['top'] = Math.floor((yPosition - openedPopupHeight));
    }
    else {
      position['top'] = Math.floor((yPosition - 25) - ((yPosition + openedPopupHeight) - windowHeight));
    }
  }
  // // height set to unset -> to make content based height for balloon popup
  // resizeObserver = new ResizeObserver(entries => {
  //   for (const entry of entries) {
  //     // Check for width change
  //     if ((popupLastHeight !== entry.target['offsetHeight'] && entry.target['offsetHeight'] !== 0) || (popupLastWidth !== entry.target['offsetWidth']) && entry.target['offsetWidth'] !== 0) {
  //       dropdownLikePosition(popupPositionEvent);
  //       resizeObserver.unobserve(popupSize);
  //     }
  //   }
  // });
  // // Select the element to observe
  // popupSize = $(openedPopupComponent)[0] || undefined;
  // popupLastHeight = popupSize?.['offsetHeight'];
  // popupLastWidth = popupSize?.['offsetWidth'];
  // // Start observing the element
  // if (popupSize) {
  //   resizeObserver.observe(popupSize);
  // }
  $(openedPopupComponent).css({ left: position.left, top: position.top });

}
document.body.addEventListener(
  'click', (event)=>{
    if(event.target.classList.contains('pa-more-action-toggle-icon') || $(event.target).parents('.pa-more-action-toggle').length) {
      return
    } else {
      document.body.style.overflow = '';
      document.querySelector('.pa-more-action-toggle').style.display = 'none'
    }
  }
)

  if (localStorage.getItem("magicAlertPopup") !== "shown") {
    let target;
    let openedPopup = document.getElementById("once-popup");
    if(window.innerWidth > 992) {
      target = document.querySelector('.pa-more-action-toggle-icon');
    } else {
      target = document.getElementsByClassName("pa-nav-open-btn")[0];
    }
    setTimeout(() => {
      $("#once-popup").fadeIn();
      if(document.getElementsByClassName('pa-overlay-container').length) {
        document.body.style.overflow = 'hidden';
        document.getElementsByClassName('pa-overlay-container')[0].append(openedPopup)
      } else {
        document.body.style.overflow = 'hidden';
        let div = document.createElement('div')
        div.classList.add('pa-overlay-container');
        div.append(openedPopup)
        document.body.appendChild(div);
      }
      callAlertPosition(target, openedPopup);
      closeMagicAlert();
    }, 1000);
    localStorage.setItem("magicAlertPopup", "shown");
  }
  function closeMagicAlert() {
    document.body.style.overflow = '';
    $("#once-popup").delay(1500).fadeOut();
  }
  let popupPositionTarget = '';
  function callAlertPosition(target, openedPopup) {

    let openedPopupComponent = openedPopup;
   let popupPositionTarget = target;
    let currentEventTarget = popupPositionTarget;
    const windowHeight = window.innerHeight;

    let clickedPosition, clickedBtnWidth, clickedBtnHeight;
      clickedPosition = currentEventTarget.getBoundingClientRect();
      clickedBtnWidth = currentEventTarget.offsetWidth;
      clickedBtnHeight = currentEventTarget.offsetWidth;

    let xPosition = clickedPosition.left;
    let yPosition = clickedPosition.top;
    var openedPopupWidth = openedPopupComponent.offsetWidth;
    let openedPopupHeight = openedPopupComponent.offsetHeight;
  
    let position = {
      top: undefined,
      left: undefined
    };
    // choose left are right
    if ((window.innerWidth - xPosition) - (openedPopupWidth + clickedBtnWidth) > 0) {
      position['left'] = Math.floor(xPosition);
    } else {
      position['left'] = Math.floor(xPosition - openedPopupWidth);
    }
    // choose top or bottom or center
  
    if (windowHeight - (yPosition + openedPopupHeight + clickedBtnHeight) > 0) {
      position['top'] = Math.floor(yPosition + clickedBtnHeight);
    }
    else {
      if (((yPosition) > openedPopupHeight)) {
        // find hidden area of popup height and add with ct
        position['top'] = Math.floor((yPosition - openedPopupHeight));
      }
      else {
        position['top'] = Math.floor((yPosition - 25) - ((yPosition + openedPopupHeight) - windowHeight));
      }
    }
    // // height set to unset -> to make content based height for balloon popup
    // resizeObserver = new ResizeObserver(entries => {
    //   for (const entry of entries) {
    //     // Check for width change
    //     if ((popupLastHeight !== entry.target['offsetHeight'] && entry.target['offsetHeight'] !== 0) || (popupLastWidth !== entry.target['offsetWidth']) && entry.target['offsetWidth'] !== 0) {
    //       dropdownLikePosition(popupPositionTarget);
    //       resizeObserver.unobserve(popupSize);
    //     }
    //   }
    // });
    // // Select the element to observe
    // popupSize = $(openedPopupComponent)[0] || undefined;
    // popupLastHeight = popupSize?.['offsetHeight'];
    // popupLastWidth = popupSize?.['offsetWidth'];
    // // Start observing the element
    // if (popupSize) {
    //   resizeObserver.observe(popupSize);
    // }
    $(openedPopupComponent).css({ left: position.left, top: position.top });
  
  }

  // if (localStorage.getItem("magicShow") !== false) {
  //   setTimeout(() => {
  //     $('.toggleButton').trigger('click')
  //   }, 1000);
  // } 
  let projectView = document.getElementsByClassName('project-name');
  function viewProject(event) {
    let obj = {
      'Dog love':'https://be-bees.github.io/doglove/',
      'Resume V2.0':'https://be-bees.github.io/agathiyan/',
      'Simple Dice Game':'https://be-bees.github.io/dicegame/',
      'Resume V1.0':'https://be-bees.github.io/resume/'
    };
    window.open(obj[event?.target?.innerText],'_blank');
  }
  addEventOnElements(projectView, "click", viewProject);