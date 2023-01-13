let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  
}


let timVine = document.getElementById("tim-vine");
let navbar = document.getElementById("main-nav");
let navPos = navbar.getBoundingClientRect().top;
let navbarLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", e => {
  
  let scrollPos = window.scrollY;
  if (scrollPos > navPos) {
    navbar.classList.add('sticky');
    header.classList.add('navbarOffsetMargin');
  } else {
    navbar.classList.remove('sticky');
    header.classList.remove('navbarOffsetMargin');
  }
  
    navbarLinks.forEach(link => {
      let section = document.querySelector(link.hash);
      if (scrollPos + 150 > section.offsetTop && scrollPos + 150 < section.offsetTop + section.offsetHeight ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
});


