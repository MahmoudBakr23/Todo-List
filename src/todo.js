import * as projectModule from './project'

const todoList = [];

export class Todo {
  constructor(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
  }


}

export function displayAddTodoButton() {
	const projectsPanel = document.getElementById('projectsPanel');
	projectsPanel.innerHTML = `
														<button type="button" class="btn btn-primary" id="newProject">New Project</button>
                            `;

  projectsPanel.classList.remove('d-none');

}