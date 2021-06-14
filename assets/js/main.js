// nav responsive
const nav = document.querySelector('.toggleNav');
const menu = document.querySelector('nav ul');

function openmenu(e){
    e.preventDefault();
    menu.classList.toggle('open');
}
nav.addEventListener('click', openmenu);