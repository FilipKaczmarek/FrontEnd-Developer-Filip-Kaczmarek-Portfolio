const hamburgerMenu = document.querySelector('.menu-icon__container');

hamburgerMenu.addEventListener('click', () => {
    const navBar = document.querySelector('.nav-bar');
    if(navBar.classList.contains('close')){
        navBar.classList.remove('close');
        navBar.classList.add('open');
        navBar.style.paddingTop = "1rem";
    } else {
        navBar.classList.remove('open');
        navBar.classList.add('close');
        navBar.style.paddingTop = "0";
    }
})