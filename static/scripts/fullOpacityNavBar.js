document.addEventListener("DOMContentLoaded", function() { 
    const navbar = document.getElementById("navbar");
    const heroHeight = document.querySelector(".navbar-container-1").offsetHeight;

    const toggleNavbarVisibility = function() {
        if (window.scrollY >= heroHeight - heroHeight / 3) {
            navbar.classList.add("navbar-visible");
        } else {
            navbar.classList.remove("navbar-visible");
        }
    }


window.addEventListener("scroll",toggleNavbarVisibility);

});