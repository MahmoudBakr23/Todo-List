import * as todoModule from './todo'

const projects = [];
const projectsList = document.getElementById('list');
const newProjectBtn = document.getElementById('newProject')
const projectForm = document.getElementById('projectForm')
const togglerBtn = document.querySelector('.navbar-toggler')
const projectDivsContainer = document.getElementById('projectsPanel')

export class Project {
	constructor(title) {
		this.title = title;
		this.opened = false;
	}

	static addProjectToList(project) {
		projects.push(project);
	}

	static displayProjects() {
		projectsList.innerHTML = ``;

		if(projects !== null) {
				projects.forEach((p, index) => {
					const projectTitle = document.createElement('li');
					projectTitle.classList = "text-dark p-1"
					projectTitle.innerHTML = `
							<a data-target=${index} href="#">${p.title.toUpperCase()}</a>
					`;
					projectsList.appendChild(projectTitle)
			})
		}
	}

	static createProjectPanel(index) {
		if(projects[index] && projects[index].opened == false) {
			const projectTodos = document.createElement('div')
			projectTodos.classList = `project-div div-${index} row my-4`
			projectTodos.innerHTML = `
				<div class="col-3">
					<h5 class="text-white">${projects[index].title.toUpperCase()}</h5>
					<button type="button" data-todo-target=${index} class="todoBtn project-btn-${index} btn btn-primary col-3">+</button>
				</div>
				<div class="col-9 todo-div todo-${index}"></div>
				<div class="d-flex flex-column col-12 justify-content-center todo-list" id="todo-list-${index}"></div>
			`
			projectDivsContainer.appendChild(projectTodos);
			projects[index].opened = true;
		} else if(projects[index].opened == true) {
				document.querySelectorAll('.project-div').forEach((p) => {
				if(p.classList.contains('d-none') && p.classList.contains(`div-${index}`)) {
					p.classList.remove('d-none')
				} else {
					p.classList.add('d-none')
					projects[index].opened == false
				}
			})
		}
	}
}

export function projectEventListeners() {
	newProjectBtn.addEventListener('click', () => {
		if (projectForm.classList.contains('d-none')) {
			projectForm.classList.remove('d-none')
		} else {
			projectForm.classList.add('d-none')
		}
	})

	projectForm.addEventListener('submit', (p) => {
		p.preventDefault();

		const title = document.getElementById('projectTitle').value;

		const newProject = new Project(title);

		Project.addProjectToList(newProject);
		Project.displayProjects();

		projectForm.reset();
		projectForm.classList.add('d-none')

		if(projectsList.classList.contains('click')) {
			togglerBtn.click();
			projectsList.classList.remove('click')
		}
	})

	document.getElementById('list').addEventListener('click', (e) => {
		const projectId = e.target.getAttribute('data-target')
		if(projectId !== null) {
			Project.createProjectPanel(projectId)
		}
	})
}