// Переменные и константы для бургера
const page = document.querySelector(".page");
const menu = document.querySelector(".menu__list");
const menuIcon = document.querySelector(".menu__icon");
const menuLinks = document.querySelectorAll(".menu__link[data-goto]")


// Бургер-меню
menuIcon.addEventListener('click', () => {
    if(menu.classList.contains("active")){
        menu.classList.remove('active');
        menuIcon.classList.remove('active');
    }else{
        menu.classList.add('active');
        menuIcon.classList.add('active');
    }
})
menu.addEventListener('click', (e) => {
    menu.classList.remove('active');
    menuIcon.classList.remove('active');
})
page.addEventListener('click', (e) => {
    menu.classList.remove('active');
    menuIcon.classList.remove('active');
})




// Плавный скролл
if(menuLinks.length > 0){
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick)
    })

    function onMenuLinkClick(e){
        const menuLink = e.target;
        console.log(menuLink.dataset.goto, document.querySelector(menuLink.dataset.goto));

        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            if(window.screen.width > 1024){
                const gotoValue = gotoBlock.getBoundingClientRect().top + scrollY; 

                window.scrollTo({
                    top: gotoValue,
                    behavior: "smooth"
                });
                e.preventDefault();
            } else{
                const gotoValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('.header').offsetHeight;
                
                window.scrollTo({
                    top: gotoValue,
                    behavior: "smooth"
                });
                e.preventDefault();
            }


        }
    }
}




