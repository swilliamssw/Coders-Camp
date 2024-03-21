// header scrolling effect
$(window).on('scroll', function() {
    if ($(window).scrollTop()) {
        $('header').addClass('nav-show');

    } else {
        $('header').removeClass('nav-show');
    }

})

//hamburger
const navSlide = () => {
    const hamburger = document.querySelector(".hamburger");
    const navbar = document.querySelector(".nav-bar");
    const navLinks = document.querySelectorAll(".nav-bar li");

    hamburger.onclick = () => {

        navbar.classList.toggle("nav-active");

        //Animation links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+1}s`;
            }
        });
        //hamburger animation
        hamburger.classList.toggle("toggle");
    }

}

window.onload = () => navSlide();




//Scroll to top 

let mybutton = document.getElementById("top-arrow");

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "fixed";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}