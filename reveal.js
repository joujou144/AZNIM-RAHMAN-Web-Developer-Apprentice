ScrollReveal({
  // reset: true,
  distance: '50px',
  duration: 2500,
  delay: 300
})

ScrollReveal().reveal('.hero-bg, .intro-bio .page-nav', { delay: 200, origin: 'left'})
ScrollReveal().reveal('.nav-home-menu li', { delay: 200, origin: 'top', interval: 200 })
ScrollReveal().reveal('.intro-bio .page-nav', { delay: 300, origin: 'bottom'})
ScrollReveal().reveal('.featured .order-two', { delay: 300, origin: 'right'})
ScrollReveal().reveal('.featured .order-left', { delay: 300, origin: 'left'})
ScrollReveal().reveal('.featured .card-content', { delay: 400, origin: 'bottom'})

ScrollReveal().reveal('.full-bio .bio-text', { delay: 200, origin: 'top'})
ScrollReveal().reveal('.full-bio .bio-img', { delay: 300, origin: 'bottom'})