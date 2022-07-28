const nav = document.querySelector(".nav-home")
const hero = document.getElementById("hero")


const heroOptions = {
  rootMargin: '-50px 0px 0px',
}

const heroObserver = new IntersectionObserver((entries, heroObserver) => {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      nav.classList.add('sticky')
    } else {
      nav.classList.remove('sticky')
    }
  })
}, heroOptions)

heroObserver.observe(hero)