const projects = [];

export class Project {
	constructor(title) {
		this.title = title;
	}

	static addProjectToList(project) {
		projects.push(project);
	}

	static displayProjects() {
		const projectsList = document.getElementById('list');
		projectsList.innerHTML = ``;

		if(projects !== null) {
				projects.forEach((p) => {
					const projectTitle = document.createElement('li');
					projectTitle.classList = "text-dark p-1"
					projectTitle.innerHTML = `
							<a href="#">${p.title}</a>
					`.toUpperCase();
					projectsList.appendChild(projectTitle)
			})
		}
	}
}

const newProjectBtn = document.getElementById('newProject')
const projectForm = document.getElementById('projectForm')

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
		document.querySelector('.navbar-toggler').click();
	})
}