const hamburger = document.querySelector(".hamburger")
const nav = document.querySelector(".links")
const blogCollection = document.querySelectorAll(".blog-item-group")
const projectGroup = document.querySelectorAll(".project-img-group")

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

projectGroup.forEach(projectImg => {
  projectImg.addEventListener('mouseover', () => {
      projectImg.childNodes[1].classList.add('project-img-color')
  })

  projectImg.addEventListener('mouseout', () => {
     projectImg.childNodes[1].classList.remove('project-img-color')
  })
})

