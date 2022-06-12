// Переменные и константы для FAQ
const faq = document.querySelector(".faq");
const faqList = document.querySelector(".faq__list");
const faqItem = document.querySelector(".faq__list-item");
const faqQuestion = document.querySelector(".faq__list-question");
const faqAnswer = document.querySelector(".faq__list-item__answer");
const faqBtn = document.querySelector(".faq__list-question__image");

// FAQ
faqList.addEventListener('click', (e) => {
    // if(e.target.classList.contains("faq__list-item")){
    //     for(let i = 0;i<faqList.children.length;i++){
    //         faqList.children[i].classList.remove('active');
    //         // faqList.children[i].classList.remove('active');
    //     }
    //     e.target.classList.add('active');
    // } else 
    
    if(e.target.parentNode.classList.contains("faq__list-item")){


        if(e.target.parentNode.classList.contains('active')){
            console.log('active')
            e.target.parentNode.classList.remove('active');
        }else{
            console.log('ne active')
            for(let i = 0;i<faqList.children.length;i++){
                faqList.children[i].classList.remove('active');
            }
            e.target.parentNode.classList.add('active');

        }
    }





    // if(e.target.classList.contains('faq__list-question')){
    //     for(let i = 0;i<faqList.children.length;i++){
    //         faqList.children[i].classList.remove('active');
    //     }
    //     if(e.target.classList.contains('active')){
    //         console.log('active')
    //         e.target.classList.remove('active');
    //     } else{
    //         console.log('ne active')
    //         e.target.parentNode.classList.add('active');
    //     }
    // }
})