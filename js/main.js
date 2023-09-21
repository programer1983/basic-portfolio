AOS.init()

const headerburger = document.querySelector(".header__burgrer")
const headerlist = document.querySelector(".header__list")
let html = document.querySelector("html")


/* ======== Disabling site scrolling under the burger menu =================== */

headerburger.addEventListener("click", burgerscroling)

function burgerscroling(){
    html.classList.toggle("unscroll")
}


/* ===== Opening burger menu ================================================ */

headerburger.addEventListener("click", open)

function open(){
    headerburger.classList.toggle("active")
    headerlist.classList.toggle("open-burger")
}


/* ======= Closing the burger menu after clicking on the link =============== */

headerlist.querySelectorAll(".header__link").forEach(link => {
    link.addEventListener("click", () => {
        headerburger.classList.remove("active")
        headerlist.classList.remove("open-burger")
        html.classList.remove("unscroll")
    })
})


/* ======== Smooth scrolling to site blocks from the menu =================== */

const anchors = document.querySelectorAll('[href*="#"]');

anchors.forEach(anchor => {
    anchor.addEventListener("click", (event) => {
        event.preventDefault()

        const blockID = anchor.getAttribute("href").substring(1)
        document.getElementById(blockID).scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    })
})


