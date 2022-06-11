// Переменные и константы для бургера
const page = document.querySelector(".page");
const menu = document.querySelector(".menu__list");
const menuIcon = document.querySelector(".menu__icon");
const menuLinks = document.querySelectorAll(".menu__link[data-goto]")

// Переменные и константы для попапа
const popup = document.querySelector('.popup');
const popupContainer = document.querySelector('.popup__container');
const popupOpen = document.querySelector('.btn-big');
const popupClose = document.querySelector('.popup__btn-close__image');
const popupItem = document.querySelector('.popup__item');
const popupInputs = document.querySelectorAll('.popup__item-input');
const popupEmail = document.querySelector('#popup-email');
const popupTel = document.querySelector('#popup-tel');
const popupCheckbox = document.querySelector('#popup-checkbox');
const popupBtn = document.querySelector('.popup__btn');
const nums = '1234567890';

// Попап
page.addEventListener('click', (e) => {
    console.log(e.target)
    if(e.target.classList.contains('btn-big')){
        popup.classList.add('active')
    }
})
popup.addEventListener('click', (e) => {
    console.log(e.target)
    if(e.target == popupContainer || e.target == popupClose){
        popup.classList.remove('active')  
    }
})



// Проверка на пустые поля
popupBtn.addEventListener('click', (e) => {
    popupInputs.forEach(popupInput => {
            if(popupInput.value != ''){
                popupInput.parentNode.classList.remove('empty');
            } else {
                popupInput.parentNode.classList.add('empty');
            }
    })

    if(popupEmail.value.includes('@') && popupEmail.value.indexOf('@') != popupEmail.value.length-1){
        console.log(popupEmail.value.indexOf('@'));
        popupCheckbox.parentNode.classList.remove("empty");
    } else{
        popupEmail.parentNode.classList.add("empty"); 
    }

    if(popupCheckbox.checked == false){
        popupCheckbox.parentNode.classList.add("empty");
    } else{
        popupCheckbox.parentNode.classList.remove("empty");
    }

})

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

