/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");



_project__WEBPACK_IMPORTED_MODULE_0__.projectEventListeners()
_todo__WEBPACK_IMPORTED_MODULE_1__.todosEventListener()

/***/ }),

/***/ "./src/project.js":
/*!************************!*
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => /* binding */ Project,
/* harmony export */   "projectEventListeners": () => /* binding */ projectEventListeners
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");


const projects = [];
const projectsList = document.getElementById('list');
const newProjectBtn = document.getElementById('newProject')
const projectForm = document.getElementById('projectForm')
const togglerBtn = document.querySelector('.navbar-toggler')
const projectDivsContainer = document.getElementById('projectsPanel')

class Project {
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

function projectEventListeners() {
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

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Todo": () => /* binding */ Todo,
/* harmony export */   "todosEventListener": () => /* binding */ todosEventListener
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");

const parentContainer = document.getElementById('projectsPanel')

class Todo {
  constructor(title, description, dueDate, identifier) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.identifier = identifier;
  }

  static createTodoForm(index) {
    const todosForm = document.createElement('form')
    todosForm.classList = `d-flex flex-wrap todo-form form-${index}`
    todosForm.id = "form-todo"
    todosForm.innerHTML = `
      <input type="text" id="title-todo" class="form-control w-25" placeholder="Name:*" required>
      <input type="text" id="desc-todo" class="form-control w-25" placeholder="Description:*" required>
      <input type="datetime-local" id="date-todo" class="form-control w-25" required>
      <button type="submit" class="btn btn-success w-25" data-add-todo=${index}>Add</button>
    `
    const todosContainers = document.querySelectorAll('.todo-div')
    todosContainers.forEach((c) => {
      c.innerHTML = ``
      if(c.classList.contains(`todo-${index}`)){
        c.appendChild(todosForm)
      }
    })
  }

  static displayTodos(index, todo) {
    const todoList = document.getElementById(`todo-list-${index}`)

    if(todoList.id == `todo-list-${todo.identifier}`) {
      const todoItem = document.createElement('ul')
      todoItem.classList = `p-3 mt-2 d-flex flex-wrap bg-light align-items-center justify-content-between list-unstyled text-center`
      todoItem.innerHTML = `
        <li class="p-1">${todo.title}</li>
        <li class="p-1">${todo.description}</li>
        <li class="p-1">${todo.dueDate}</li>
        <li><a href="#" class="btn btn-danger btn-sm delete">X</a></li>
      `
      todoList.appendChild(todoItem)
    }
  }
}

function deleteTodo(el) {
  if(el.classList.contains(`delete`)) {
    el.parentElement.parentElement.remove();
  }
}

function todosEventListener(){
  parentContainer.addEventListener('click', (e) => {
    const btnId = e.target.getAttribute('data-todo-target')
    if(btnId !== null) {
      Todo.createTodoForm(btnId)
    }
  })

  parentContainer.addEventListener('click', (e) => {
    const addBtnId = e.target.getAttribute('data-todo-target')
    if(addBtnId !== null) {
      const theForm = document.getElementById(`form-todo`)
      theForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById(`title-todo`).value;
        const description = document.getElementById(`desc-todo`).value;
        const dueDate = document.getElementById(`date-todo`).value;
        const identifier = addBtnId;

        const newTodo = new Todo(title, description, dueDate, identifier)
        Todo.displayTodos(addBtnId, newTodo)

        theForm.reset();
      })
    }
  })

  parentContainer.addEventListener('click', (e) => {
    const elId = e.target
    if(elId !== null) {
      deleteTodo(elId)
    }
  })
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=main.js.map