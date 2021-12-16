const hamburger = document.querySelector(".hamburger")

hamburger.addEventListener("click", function() {
  this.classList.toggle('active')
})

const blogCollection = document.querySelectorAll(".blog-item-group")

blogCollection.forEach(blogItem => {
  blogItem.addEventListener('mouseover', () => {
      blogItem.childNodes[1].classList.add('img-darken')
  })

  blogItem.addEventListener('mouseout', () => {
     blogItem.childNodes[1].classList.remove('img-darken')
  })
})