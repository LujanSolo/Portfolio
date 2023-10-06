import { projectsArray } from "./data.js";


// location.href = thatHtmlPage

// function handleProjectsClick(ii) {
//   document.getElementById('projects').classList.toggle('hidden');
//   document.getElementById('proj-btn-div').classList.toggle('hidden');
//   hideHero();
// }

// function handleProjectsBackClick(ii) {
//   document.getElementById('hero').classList.toggle('hidden');
//   document.getElementById('proj-btn-div').classList.toggle('hidden');
//   document.getElementById('projects').classList.toggle('hidden');
// }

// function handleAboutClick(ii) {
//   document.getElementById('about-me').classList.toggle('hidden');
//   document.getElementById('about-btn-div').classList.toggle('hidden');
//   hideHero();
// }

// function handleAboutBackClick(ii) {
//   document.getElementById('hero').classList.toggle('hidden');
//   document.getElementById('about-btn-div').classList.toggle('hidden');
//   document.getElementById('about-me').classList.toggle('hidden');
// }



// function hideHero() {
//   document.getElementById('hero').setAttribute('class', 'hidden');
// }

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

        <img
          src="${project.img}"
          class="card-image"
        >

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
}

document.addEventListener('click', (e) => {
  if (e.target.dataset.project) {
    localStorage.setItem('renderProjects', 'true');
    location.href = '../../project.html';
  }
  else if (e.target.dataset.about) {
    location.href = '../../about.html';
  }
});

// Event Listener for Projects Page - to render if page is loaded
window.addEventListener('load', () => {
  const shouldRenderProjects = localStorage.getItem('renderProjects');

  if (shouldRenderProjects === 'true') {
    // localStorage.removeItem('renderProjects');
    renderProjects();
  }
})

