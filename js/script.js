// Переменные и константы для квиза
const DATA = [
    {
        question: "С какой целью вы обращаетесь?",
        answers: [
            {
                id: '1',
                value: "Регистрацию полезной модели"
            },
            {
                id: '2',
                value: "Регистрацию промышленного образца"
            },
            {   
                id: '3',
                value: "Регистрацию прав на использование полезной модели, промобразца, изобретенния"
            },
            {   
                id: '4',
                value: "Подготовка заявки на выдачу патента"
            },
            {   
                id: '5',
                value: "Регистрацию изобретения"
            },
            {   
                id: '6',
                value: "Подготовка заявки на передачу прав патента"
            }
        ]
    },
    {
        question: "С какой целью вы обращаетесь?",
        answers: [
            {
                id: '7',
                value: "Регистрацию изобретения"
            },
            {
                id: '8',
                value: "Регистрацию прав на использование полезной модели, промобразца, изобретенния"
            },
            {   
                id: '9',
                value: "Подготовка заявки на передачу прав патента"
            },
            {   
                id: '10',
                value: "Подготовка заявки на выдачу патента"
            },
            {   
                id: '11',
                value: "Регистрацию полезной модели"
            },
            {   
                id: '12',
                value: "Регистрацию промышленного образца"
            }
        ]
    },{
        question: "С какой целью вы обращаетесь?",
        answers: [
            {
                id: '13',
                value: "Регистрацию прав на использование полезной модели, промобразца, изобретенния"
            },
            {
                id: '14',
                value: "Регистрацию изобретения"
            },
            {   
                id: '15',
                value: "Регистрацию полезной модели"
            },
            {   
                id: '16',
                value: "Подготовка заявки на выдачу патента"
            },
            {   
                id: '17',
                value: "Регистрацию промышленного образца"
            },
            {   
                id: '18',
                value: "Подготовка заявки на передачу прав патента"
            }
        ]
    },{
        question: "С какой целью вы обращаетесь?",
        answers: [
            {
                id: '19',
                value: "Подготовка заявки на передачу прав патента"
            },
            {
                id: '20',
                value: "Регистрацию изобретения"
            },
            {   
                id: '21',
                value: "Регистрацию прав на использование полезной модели, промобразца, изобретенния"
            },
            {   
                id: '22',
                value: "Подготовка заявки на выдачу патента"
            },
            {   
                id: '23',
                value: "Регистрацию промышленного образца"
            },
            {   
                id: '24',
                value: "Регистрацию полезной модели"
            }
        ]
    }
];
const quiz = document.querySelector(".quiz");
const questions = document.querySelector(".quiz__questions");
const answers = document.querySelector(".quiz__answers");
const indicator = document.querySelector(".quiz__indicator");
const btnNext = document.querySelector(".quiz__btn-next");
const btnPrev = document.querySelector(".quiz__btn-prev");
let userAnswers = {};

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

// Слайдер с услугами
new Swiper('.services__slider',{
    navigation: {
        nextEl: '.slider__btn-next',
        prevEl: '.slider__btn-prev'
    },
    slidesPerView: 'auto',
    slidesPerGroup: 1

});

// Слайдер с кейсами
new Swiper('.cases__slider',{
    navigation: {
        nextEl: '.slider__btn-next',
        prevEl: '.slider__btn-prev'
    },
    slidesPerView: 'auto',
    slidesPerGroup: 1

});

// Слайдер с командой
new Swiper('.team__slider',{
    navigation: {
        nextEl: '.slider__btn-next',
        prevEl: '.slider__btn-prev'
    },
    slidesPerView: 'auto',
    slidesPerGroup: 1

});

// Квиз
const renderQuestions = (index) => {
    renderIndicator(index + 1);
    questions.dataset.currentStep = index;

    const renderAnswers = () => DATA[index].answers
        .map((answer) => `
            <li class="quiz__answers-item">
                <label class="quiz__answers-label">
                    <input class="answer__input" type="radio" name="${index}" value="${answer.id}">
                    ${answer.value}
                </label>
            </li>
        `)
        .join("");

    questions.innerHTML = `<div class="quiz__question">${DATA[index].question}</div>`;
    answers.innerHTML = renderAnswers();
};
const renderIndicator = (currentStep) => {
    indicator.innerHTML =  `<span>${currentStep}</span>/${DATA.length}`
};

quiz.addEventListener('change', (e) => {
    if(e.target.classList.contains("answer__input")){
        userAnswers[e.target.name] = e.target.value; 

    }
})

quiz.addEventListener('click', (e) => {
    const nextQuestionIndex = Number(questions.dataset.currentStep);

    if(e.target.classList.contains("quiz__btn-next")){

        if(DATA.length - 1 === nextQuestionIndex){
            btnNext.disabled = true;
        } else{
            renderQuestions(nextQuestionIndex + 1); 
        }

    } else if(e.target.classList.contains("quiz__btn-prev")){
        console.log("Prev");
        if(nextQuestionIndex >= 1){
            renderQuestions(nextQuestionIndex - 1); 
        } else{
            btnPrev.disabled = true;
        }

    }
})

answers.addEventListener('click', (e) => {
    if(e.target.classList.contains("quiz__answers-item")){
        for(let i = 0;i<answers.children.length;i++){
            answers.children[i].classList.remove('active');
        }
        e.target.classList.add('active');
    } else if(e.target.parentNode.parentNode.classList.contains("quiz__answers-item")){
        for(let i = 0;i<answers.children.length;i++){
            answers.children[i].classList.remove('active');
        }
        e.target.parentNode.parentNode.classList.add('active');
    }
    
})

renderQuestions(0); 
