const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
link.addEventListener("mouseenter", () => {

link.style.textShadow = "0 0 10px #39ff88";

});

link.addEventListener("mouseleave", () => {

link.style.textShadow = "none";

});
});
/* ============================= */
/* Smooth Scroll */
/* ============================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior:"smooth"
});

});

});


/* ============================= */
/* Reveal Animation on Scroll */
/* ============================= */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){

for(let i = 0; i < reveals.length; i++){

let windowHeight = window.innerHeight;
let elementTop = reveals[i].getBoundingClientRect().top;
let elementVisible = 100;

if(elementTop < windowHeight - elementVisible){

reveals[i].classList.add("active");

}

}

}

window.addEventListener("scroll", revealOnScroll);


/* ============================= */
/* Navbar Active Link */
/* ============================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", ()=>{

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop;
const sectionHeight = section.clientHeight;

if(pageYOffset >= sectionTop - 200){

current = section.getAttribute("id");

}

});

navLinks.forEach(a =>{

a.classList.remove("active");

if(a.getAttribute("href") == "#" + current){

a.classList.add("active");

}

});

});


/* ============================= */
/* Avatar Hover Effect */
/* ============================= */

const avatar = document.querySelector(".avatar");

avatar.addEventListener("mousemove", (e)=>{

let x = (window.innerWidth / 2 - e.pageX) / 30;
let y = (window.innerHeight / 2 - e.pageY) / 30;

avatar.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;

});

avatar.addEventListener("mouseleave", ()=>{

avatar.style.transform = "rotateY(0deg) rotateX(0deg)";

});


/* ============================= */
/* Scroll Progress Bar */
/* ============================= */

const progressBar = document.createElement("div");

progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.height = "4px";
progressBar.style.background = "#00ff99";
progressBar.style.zIndex = "9999";

document.body.appendChild(progressBar);

window.addEventListener("scroll", ()=>{

let scroll = document.documentElement.scrollTop;
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

let scrolled = (scroll / height) * 100;

progressBar.style.width = scrolled + "%";

});