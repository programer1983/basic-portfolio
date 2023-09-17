AOS.init()

const headerburger = document.querySelector(".header__burgrer")
const headerlist = document.querySelector(".header__list")

headerburger.addEventListener("click", open)

function open(){
    headerburger.classList.toggle("active")
    headerlist.classList.toggle("open-burger")
}