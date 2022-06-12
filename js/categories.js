const categories = document.querySelector('.categories__list');

categories.addEventListener('click', (e) => {
    if(e.target.classList.contains('categories__item')){
        console.log(e.target)
        for(let i = 0;i<categories.children.length;i++){
            categories.children[i].classList.remove('active');
        }
        e.target.classList.add('active');
    }
})