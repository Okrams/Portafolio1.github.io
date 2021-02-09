document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.querySelector('.btn-menu');
    const menu = document.querySelector('.menu-items');
    if(btnMenu){ 
        btnMenu.addEventListener('click', () => {
            menu.classList.toggle('show');
        })

    }
})