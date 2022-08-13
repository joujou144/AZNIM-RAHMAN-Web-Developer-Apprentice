const hamburger = document.getElementById("hamburger")
const mobileMenu = document.getElementById("nav-links")
const menuLinks = document.querySelectorAll(".nav-links li a")

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