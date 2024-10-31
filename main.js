const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const header = document.querySelector("header");

menu.addEventListener('click',()=>{
    header.classList.add('active');
    
})
close.addEventListener('click',()=>{
    header.classList.remove('active');
})