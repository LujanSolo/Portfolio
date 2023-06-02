import { projectsArray } from "./data.js";

document.addEventListener('click', (e)=>{
  if(e.target.dataset.project){
    handleProjectsClick(e.target.dataset.project)
  }
  else if(e.target.dataset.about){
    console.log('clicked')
    handleAboutClick(e.target.dataset.about)
  }
  else if(e.target.dataset.back){
    handleBackClick(e.target.dataset.back);
  }
});

function handleProjectsClick(ii){
  document.getElementById('projects').classList.toggle('hidden');
  hideHero();
}

function handleAboutClick(ii){
  document.getElementById('about-me').classList.toggle('hidden');
  hideHero();
}

function handleBackClick(ii){
  document.getElementById('hero').classList.toggle('hidden');
}

function hideHero(){
  document.getElementById('hero').setAttribute('class', 'hidden');
}

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


function render() {
  document.getElementById('projects').innerHTML = getProjectHtml();
}

render()
