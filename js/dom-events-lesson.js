let pageWrapper = document.querySelector(`.page-wrapper`)
let toggleMenu = document.querySelector(`.das-burger-wrapper`)

toggleMenu.addEventListener('click', function (){
    pageWrapper.classList.toggle('mobile-menu-open');
});
