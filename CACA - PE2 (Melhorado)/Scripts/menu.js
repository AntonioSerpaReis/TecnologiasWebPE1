const menuToggle = document.querySelector('#mobile-menu');
const mainNav    = document.querySelector('.main-nav');
const mainHeader = document.querySelector('.main-header');

// Abre/fecha o menu ao clicar no hambúrguer
menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    mainNav.classList.toggle('active');
    menuToggle.classList.toggle('is-active');
});

// Em desktop: fecha ao clicar fora do header
document.addEventListener('click', (e) => {
    if (window.innerWidth >= 1024 && !mainHeader.contains(e.target)) {
        mainNav.classList.remove('active');
        menuToggle.classList.remove('is-active');
    }
});

// Limpa o estado ao redimensionar
window.addEventListener('resize', () => {
    mainNav.classList.remove('active');
    menuToggle.classList.remove('is-active');
});

// Fecha ao clicar num link
mainNav.querySelectorAll('.anav').forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        menuToggle.classList.remove('is-active');
    });
});