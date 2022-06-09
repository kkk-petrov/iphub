<?php
header('HTTP/1.1 404 Not Found');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="favicon.ico">
    <title>IPhub</title>

    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/main.css">
</head>
<body>
    <header class="header">
        <div class="header__container container">
            <a href="index.html" class="header__logo">
                <img src="img/logo.svg" alt="logo" class="header__logo-image">
            </a>
            <div class="header__contact contact">
                <a href="tel:+78888888888" class="contact__number">+7 (888) 888 88 88</a>
                <a href="#" class="contact__button">Получить консультацию</a>
            </div>
            
            <nav class="header__menu menu">
                <div class="menu__icon">
                    <span></span>
                </div>
                <ul class="menu__list">
                    <li class="menu__item"><a data-goto="" href="services.html" class="menu__link">Услуги</a></li>
                    <li class="menu__item"><a data-goto="" href="cases.html" class="menu__link">Кейсы</a></li>
                    <li class="menu__item"><a data-goto="" href="faq.html" class="menu__link">FAQ</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main class="page">
        <section class="error">
            <div class="error__wrapper">
                <div class="error__container container">
                    <img src="img/error.png" alt="" class="error__image">
                    <h1 class="error__text">К сожалению, страница не найдена.<br>Вернитесь на главную</h1>
                    <a href="index.html" class="error__btn btn">На главную</a>
                    
                </div>
            </div>
        </section>
    </main>


    <footer class="footer">
        <div class="footer__wrapper">
            <div class="footer__container container">
                <div class="footer__text">
                    <img src="img/logo.svg" alt="" class="footer__logo">
                    <p class="footer__subtitle">Общество с ограниченной ответственностью «Центр интеллектуальной собственности и инноваций „АйПиХаб“»</p>
                    <p class="footer__docs"><span>ИНН:</span> 7703472433 <span>КПП:</span> 770301001</p>
                </div>
                <div class="footer__decor decor decor-grey"></div>
                <div class="footer__content">
                    <div class="footer__nav">
                        <p class="footer__nav-title">Навигация:</p>
                        <ul class="footer__nav-content">
                            <li class="menu__item"><a data-goto="" href="services.html" class="menu__link">Услуги</a></li>
                            <li class="menu__item"><a data-goto="" href="cases.html" class="menu__link">Кейсы</a></li>
                            <li class="menu__item"><a data-goto="" href="faq.html" class="menu__link">FAQ</a></li>
                        </ul>
                    </div>
                    <div class="footer__contacts">
                        <p class="footer__contacts-title">Наши контакты:</p>
                        <ul class="footer__contacts-content">
                            <li class="footer__contacts-item"><a href="mailto:kkpetrov.dev@gmail.com">kkpetrov.dev@gmail.com</a></li>
                            <li class="footer__contacts-item"><a href="tel:+7888888888">+38 (012) 345 67 89</a></li>
                        </ul>
                    </div>
                    <div class="footer__social">
                        <p class="footer__social-title">Мы в соцсетях:</p>
                        <ul class="footer__social-content">
                            <li class="footer__social-item"><a target="_blank" href="https://t.me/kk_ppetrov">Telegram</a></li>
                            <li class="footer__social-item"><a target="_blank" href="https://github.com/kkk-petrov">GitHub</a></li>
                        </ul>
                    </div>
                    <div class="footer__map">
                        <p class="footer__map-title">Как добраться:</p>
                        <ul class="footer__map-content">
                            <li class="footer__map-item"><a href="#">Схема проезда</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer__info">
                    <p class="footer__copyright">© 2021 IPhub. Все права защищены.</p>
                    <p class="footer__offer"><a href="#">Публичная оферта</a></p>
                    <p class="footer__terms"><a href="#">Пользовательское соглашение</a></p>
                </div>
            </div>
        </div>
    </footer>


    
    <script src="js/script.js"></script>
</body>
</html>