import { projectsArray } from "./data.js";


function getProjectHtml() {
  let projectHtml = '';

  projectsArray.forEach((project) => {
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
          <a href="${project.online}" target="_blank">
            <img
              class="mini-icons"
              src="${project.icon}"
              alt="icon for the hosting server"
            >
          </a>

          <fr></fr>

          <p>GITHUB REPO</p>
          <a href="${project.github}" target="_blank">
            <img
              class="mini-icons"
              src="${project.icon}"
              alt="icon for github"
            >
          </a>
        </footer>
      </div>
    `
  });
  return projectHtml;
};


function render() {
  document.getElementById('projects').innerHTML = getProjectHtml();
}

render()
