import { projectCollections } from "./data.js"

window.onload = () => {
  webpageProjectsData(projectCollections)
  webappProjectsData(projectCollections)
}

function webpageProjectsData(projectCollections) {
  const webpageSlider = document.getElementById('webpage-slider')
  let dataHtml = ''

  const webpageProjects = projectCollections.webpage
  webpageProjects.forEach(project => {
    const {title, demo, links, image, desc, tags} = project
    dataHtml += `
    <div class="all-work card-group">
      <a href="${demo}" class="project-img-group" target="_blank">
        <img src="${image}">  
      </a >
    
      <div class="card-content">
        <div class="project-info">
          <p class="project-title eyecatch">${title}</p> 
          <p class="project-desc">
            ${desc}
          </p>  
                    
          <div class="project-tags">
            ${tags.map(tag => '<span>• ' + tag + '</span>').join('')}
          </div>
        </div>           
        
        <div class="card-page-nav">
          ${links.map(link => '<span>' + link + '</span>').join('')}                  
        </div>                     
      </div> 
    </div>   
    `
    webpageSlider.innerHTML = dataHtml
  })
}

webappProjectsData(projectCollections)
function webappProjectsData(projectCollections) {
  const webappSlider = document.getElementById('webapp-slider')
  let dataHtml = ''

  const webappProjects = projectCollections.webapp
  webappProjects.forEach(project => {
    const {title, demo, links, image, desc, tags} = project
    dataHtml += `
    <div class="all-work card-group">
      <a href="${demo}" class="project-img-group" target="_blank">
        <img src="${image}">  
      </a >
    
      <div class="card-content">
        <div class="project-info">
          <p class="project-title eyecatch">${title}</p> 
          <p class="project-desc">
            ${desc}
          </p>  
                    
          <div class="project-tags">
            ${tags.map(tag => '<span>• ' + tag + '</span>').join('')}
          </div>
        </div>           
        
        <div class="card-page-nav">
          ${links.map(link => '<span>' + link + '</span>').join('')}                  
        </div>                     
      </div> 
    </div>   
    `
    webappSlider.innerHTML = dataHtml
  })
}