
//let image = document.getElementById('image1');
let slideIndex = 0;
showSlides();
const scrollLinks = document.querySelectorAll('a[href^="#"]');

/*if (image) {
  window.addEventListener('scroll', function() {
    let value = window.scrollY;
    if (value * 0.75 < 500) {
      image1.style.left = value * 0.75 + 'px';
      image2.style.left = value * 0.75 + 'px';
      image3.style.left = value * 0.75 + 'px';
    }
  });
}*/


scrollLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

 var typed = new Typed(".typing", {
      strings: ["Bonafide USeP Student", "Web Developer", "Designer", "Gamer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slideshow");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000);
}

function openNav() {
  document.getElementById("Sidenav").style.width = "250px";
  document.getElementById("openbtn").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("Sidenav").style.width = "0";
  document.getElementById("openbtn").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}