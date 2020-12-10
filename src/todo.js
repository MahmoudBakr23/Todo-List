import * as projectModule from './project'
const parentContainer = document.getElementById('projectsPanel')

export class Todo {
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

export function todosEventListener(){
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