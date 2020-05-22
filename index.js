// select element
const selectElement = function(element)
{
    return document.querySelector(element);
};

//select all elements into an array
const selectElements = function(element)
{
    return document.querySelectorAll(element);
};

const menu = selectElement('.menu');
const body = selectElement('body');

menu.addEventListener('click', function()
{
    body.classList.toggle('open');
});
//Pre-load
const image = selectElement('.hero');
const bigImg = document.createElement("img");
bigImg.onload = function(){
    image.style.backgroundImage = "url(" +this.src + ")";
};
bigImg.src = "./pic/intro-final.jpg";

// parallax
window.addEventListener('scroll', function()
{
    const parallax = selectElements('.parallax');
    let scrollPosition = window.pageYOffset;
    let count = 0;

    parallax.forEach(element => {
        if(this.innerWidth > 758){
        count++;
        element.style.transform = 'translateY(' +scrollPosition *(-0.5-(count*0.3)) +'px)';
        }
    });
    
});

// Scroll Reveal libary script
window.sr = ScrollReveal();
sr.reveal('.animate-left', {
    origin:'left',
    duration:1000,
    distance:'25rem',
    delay:300
});

sr.reveal('.animate-right', {
    origin:'right',
    duration:1000,
    distance:'25rem',
    delay:600
});

sr.reveal('.animate-top', {
    origin:'top',
    duration:1000,
    distance:'1rem',
    delay:600
});

sr.reveal('.animate-bottom', {
    origin:'bottom',
    duration:2000,
    distance:'5rem',
    delay:600
});

//Language



