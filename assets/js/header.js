// Responsive menu
const menu = document.querySelector('.menu')
const body = document.querySelector('body')
const burger = document.querySelector('.burger')
burger.onclick = () => {
    menu.classList.toggle('active')
    body.classList.toggle('active')
    burger.classList.toggle('active')
}
window.onresize = () => {
    if (window.innerWidth > 1024) {
        menu.classList.remove('active')
        body.classList.remove('active')
        burger.classList.remove('active')
    }
}
