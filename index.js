//Menu burger 
const burger = document.querySelector('.menu-burger');
const navMenu = document.querySelector('.menu-list-nav');
const html = document.querySelector('html');

function toggleMenu() {
    burger.classList.toggle('open');
    burger.classList.toggle('burger-open');
    navMenu.classList.toggle('close');
    html.classList.toggle('scroll-close');
}
 
burger.addEventListener('click', toggleMenu);
navMenu.addEventListener('click', toggleMenu); 

document.addEventListener('click', function (e) {
    const target = e.target;
    const menu = target == burger || burger.contains(target);
    const menuBurger = target == navMenu;
    const menuActive = burger.classList.contains('open');

    if (!menu && !menuBurger && menuActive) {
        toggleMenu();
    }
});

console.log(`Оценка - 85 баллов:

1.Вёрстка соответствует макету. Ширина экрана 390px (48/48)
 - [x] блок <header> +6
 - [x] секция preview +9
 - [x] секция steps +9
 - [x] секция destinations +9
 - [x] секция stories +9
 - [x]	блок <footer> +6
2.Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется (15/15)
 - [x] нет полосы прокрутки при ширине страницы от 1440рх до 390px +7
 - [x] нет полосы прокрутки при ширине страницы от 390px до 320рх +8
3.На ширине экрана 390рх и меньше реализовано адаптивное меню (22/22)
 - [x] при ширине страницы 390рх панель навигации скрывается, появляется бургер-иконка +2
 - [x] при нажатии на бургер-иконку плавно появляется адаптивное меню +4
 - [x] адаптивное меню соответствует макету +4
 - [x] при нажатии на крестик адаптивное меню плавно скрывается уезжая за экран +4
 - [x] ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +4 (все кроме Account, она пока что просто закрывает меню)
 - [x] при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна +4
 `);





