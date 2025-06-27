const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.about-pages');

hamMenu.addEventListener('click', ()=>{
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})
