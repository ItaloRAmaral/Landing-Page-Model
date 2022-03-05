const btnMobile = document.querySelector('#btn-mobile');

function toggleMenu (e){
    if (e.type === 'touchstart') e.preventDefault();
    const navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('active');
    const active = navBar.classList.contains('active');
    e.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        e.currentTarget.setAttribute('aria-label', 'Fechar Menu')
    } else {
        e.currentTarget.setAttribute('aria-label', 'Abrir Menu')
    }
}

function toggleHamburguer(e){
    if (e.type === 'touchstart') e.preventDefault();
    const menuHamburguer = document.querySelector('.hamburguer');
    menuHamburguer.classList.toggle('teste');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

btnMobile.addEventListener('click', toggleHamburguer);
btnMobile.addEventListener('touchstart', toggleHamburguer);

function closeMenu (e) {
    if (e.type === 'touchstart') e.preventDefault();
    const navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('active');
}

const navMenu = document.querySelectorAll('.menu')


for(let index = 0; index < navMenu.length; index+= 1){
    navMenu[index].addEventListener('click', closeMenu);
}

function tirarXHamburguerPeloMenu () {
    const menuHamburguer = document.querySelector('.hamburguer');
    menuHamburguer.classList.toggle('teste');
}

for (let index = 0; index < navMenu.length; index += 1) {
    navMenu[index].addEventListener('click', tirarXHamburguerPeloMenu);
}
