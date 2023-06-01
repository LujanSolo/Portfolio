import { projectsArray } from "./data";

let projectHtml = '';

projectHtml += `
  <div class="project-card">
  
    <div class="card-header">
      <h2 class="card-title">
        ${project.title}
      </h2>
    </div>

    <img
      src="${project.img}"
      class="card-image"
    >

    <h3 class="card-desc">
      ${project.desc}
    </h3>

    <footer class="card-footer">
      <p>DEPLOYED AT</p>
      <a href="${project.online}">
        <img
          class="${project.class}"
          src="${project.deploy-icon}"
          alt="icon for the hosting server"
        >
      </a>

      <fr></fr>

      <p>GITHUB REPO</p>
      <a href="${project.github}">
        <img
          src="${project.deploy-icon}"
          class="${project-class}"
          alt="icon for github"
        >
      </a>
    </footer>
  </div>
`