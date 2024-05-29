import { projectsArray } from "./data.js";

function getProjectHtml() {
  let projectHtml = '';

  projectsArray.map((project) => {
    projectHtml += `
      <div class="project-card">
        
        <div class="card-header">
          <h2 class="card-title">
            ${project.title}
          </h2>
        </div>
        <a href="${project.online}" target="_blank" rel="noopener">
        <img
          src="${project.img}"
          class="card-image img-fluid"
          loading="lazy"
        >
        </a>
        <h3 class="card-desc">
          ${project.desc}
        </h3>

        <footer class="card-footer">
          <p class="icon-desc">DEPLOYED VIA</p>
          <a href="${project.online}" target="_blank">
            <img
              class="card-icons"
              src="${project.hosticon}"
              alt="icon for the hosting server"
            >
          </a>

          <p class="icon-desc">GITHUB REPO</p>
          <a href="${project.github}" target="_blank">
            <img
              class="card-icons"
              src="${project.giticon}"
              alt="icon for github"
            >
          </a>
        </footer>
      </div>
    `
  });
  return projectHtml;
};

function renderProjects() {
  document.getElementById('projects').innerHTML = getProjectHtml();
};

document.addEventListener('click', (e) => {
  if (e.target.dataset.project) {
    localStorage.setItem('renderProjects', 'true');
    location.href = 'projects.html';
  }
  else if (e.target.dataset.about) {
    location.href = '../../about.html';
  }
});

// Event Listener for Projects Page - to render if page is loaded
window.addEventListener('load', () => {
  const shouldRenderProjects = localStorage.getItem('renderProjects');

  if (shouldRenderProjects === 'true') {
    renderProjects();
  }
});

