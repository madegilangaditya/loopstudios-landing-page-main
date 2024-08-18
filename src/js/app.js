console.log('Hello, Laravel Mix!');

const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');
const header = document.querySelector('header');

menuOpen.addEventListener('click', function(e){
    e.preventDefault();
    this.classList.add('hide');
    menuClose.classList.add('active');
    header.classList.add('active');
});

menuClose.addEventListener('click', function(e){
    e.preventDefault();
    this.classList.remove('active');
    menuOpen.classList.remove('hide');
    header.classList.remove('active');
});