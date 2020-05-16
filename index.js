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


// parallax
window.addEventListener('scroll', function()
{
    const parallax = selectElements('.parallax');
    let scrollPosition = window.pageYOffset;
    let count = 0;

    parallax.forEach(element => {
        //if(scrollPosition<500){
        count++;
        element.style.transform = 'translateY(' +scrollPosition *(-0.5-(count*0.3)) +'px)';
        //}
    });
    
});
