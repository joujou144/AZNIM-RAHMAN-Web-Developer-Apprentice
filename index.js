const nav = document.getElementById("js-nav")
const hamburger = document.getElementById("hamburger")
const mobileMenu = document.getElementById("nav-links")
const menuLinks = document.querySelectorAll(".nav-links li a")
const hero = document.getElementById("hero")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  mobileMenu.classList.toggle("active")
})

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    mobileMenu.classList.toggle("active")
  })
})

const heroOptions = {
  rootMargin: "-100px 0px 0px"
}

const heroObserver = new IntersectionObserver((entries, heroObserver) => {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      nav.classList.add("scroll-down")
    } else {
      nav.classList.remove("scroll-down")
    }
  })
}, heroOptions)

heroObserver.observe(hero)

