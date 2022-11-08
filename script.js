const navToggle = document.querySelector('.mobile-nav-toggle');
const navSect = document.querySelector('.nav-section');

navToggle.addEventListener('click', function(){
    navSect.hasAttribute('data-visible') 
        ? navToggle.setAttribute("aria-expanded",false)
        : navToggle.setAttribute("aria-expanded",true);
    navSect.toggleAttribute('data-visible');
    });