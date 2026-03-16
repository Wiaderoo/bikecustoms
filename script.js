/* MENU */

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.onclick = function(){
menu.classList.toggle("active");
};


/* SLIDER */

const slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
  slides.forEach(slide => slide.classList.remove("active")); // wszystkie ukryj
  slides[index].classList.add("active");                     // pokaż aktualne
  index++;
  if (index >= slides.length) {
    index = 0; // wróć do pierwszego
  }
}

setInterval(showSlide, 4000); // zmiana co 4 sekundy


/* SCROLL ANIMACJA */

function reveal(){

let reveals = document.querySelectorAll(".reveal");

for(let i=0;i<reveals.length;i++){

let windowHeight = window.innerHeight;
let elementTop = reveals[i].getBoundingClientRect().top;
let elementVisible = 120;

if(elementTop < windowHeight - elementVisible){
reveals[i].classList.add("active");
}

}

}

window.addEventListener("scroll", reveal);
reveal();
