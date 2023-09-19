AOS.init()

const headerburger = document.querySelector(".header__burgrer")
const headerlist = document.querySelector(".header__list")

headerburger.addEventListener("click", open)

function open(){
    headerburger.classList.toggle("active")
    headerlist.classList.toggle("open-burger")
}



let html = document.querySelector("html")
const burger = document.querySelector(".header__burgrer")

burger.addEventListener("click", burgerscroling)

function burgerscroling(){
    html.classList.toggle("unscroll")
}

