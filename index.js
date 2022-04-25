const hamburger = document.querySelector(".hamburger")
const nav = document.querySelector(".links")
const blogCollection = document.querySelectorAll(".blog-item-group")


hamburger.addEventListener("click", function() {
  this.classList.toggle('active')

  const visibility = nav.getAttribute("data-visible")
  if (visibility === "false") {
    nav.setAttribute("data-visible", true)
  } else {
    nav.setAttribute("data-visible", false)
  }

  console.log(visibility)
})

blogCollection.forEach(blogItem => {
  blogItem.addEventListener('mouseover', () => {
      blogItem.childNodes[1].classList.add('img-darken')
  })

  blogItem.addEventListener('mouseout', () => {
     blogItem.childNodes[1].classList.remove('img-darken')
  })
})


