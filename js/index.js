import { projectData } from "./data.js"

window.onload = () => {
  renderProjectData(projectData)
}

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



renderProjectData(projectData)

function renderProjectData(projectData) {
  const projectSlider = document.getElementById("project-slider")
  let dataHtml = ''

  for(let project of projectData) {
    dataHtml += `
    <div class="all-work card-group">
      <a href="${project.demo}" class="project-img-group" target="_blank">
        <img src="${project.image}">  
      </a >
    
      <div class="card-content">
        <div class="project-info">
          <p class="project-title eyecatch">${project.title}</p> 
          <p class="project-desc">
            ${project.desc}
          </p>  
                    
          <div class="project-tags">
            ${project.tags.map(tag => '<span>▵' + tag + '</span>').join('')}
          </div>
        </div>           
        
        <div class="card-page-nav">
          ${project.links.map(link => '<span>' + link + '</span>').join('')}                  
        </div>                     
      </div> 
    </div>   
    `
  }
  projectSlider.innerHTML = dataHtml
}