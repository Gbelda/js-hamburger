const burgerElement = document.querySelector('.hamburger-menu');
const menuBtn = document.querySelector('.fa-bars')
const closeBtn = document.querySelector('.fa-times')

menuBtn.addEventListener('click', function () {
    burgerElement.classList.add("active")

})

closeBtn.addEventListener('click', function () {
    burgerElement.classList.remove("active")

})