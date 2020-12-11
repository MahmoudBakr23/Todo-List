import * as projectModule from './project'
const parentContainer = document.getElementById('projectsPanel')

export class Todo {
  constructor(title, description, priority, dueDate, identifier) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
    this.identifier = identifier;
  }

  static createTodoForm(index) {
    const todosForm = document.createElement('form')
    todosForm.classList = `d-flex flex-wrap todo-form form-${index}`
    todosForm.id = "form-todo"
    todosForm.innerHTML = `
      <input type="text" id="title-todo" class="form-control" placeholder="Name:*" required>
      <input type="text" id="desc-todo" class="form-control" placeholder="Description:*" required>
      <select class="browser-default custom-select form-control" id="menu" required>
        <option selected>Select Priority</option>
        <option value="Immediate">Immediate</option>
        <option value="Important">Important</option>
        <option value="Regular">Regular</option>
        <option value="Soon">Soon</option>
        <option value="Later">Later</option>
      </select>
      <input type="datetime-local" id="date-todo" class="form-control w-25" required>
      <button type="submit" class="btn btn-success" data-add-todo=${index}>+</button>
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
        <li class="p-2 priority ${todo.priority}">${todo.priority}</li>
        <li class="p-1">${todo.dueDate}</li>
        <div class="d-flex justify-content-evenly">
          <li><a href="#" class="btn btn-warning btn-sm edit">🖊</a></li>
          <li><a href="#" class="btn btn-danger btn-sm delete">X</a></li>
        </div>
      `
      todoList.appendChild(todoItem)
    }
    const priorities = parentContainer.querySelectorAll('.priority')
    priorities.forEach((p) => {
      if(p.classList.contains('Immediate')) {
        p.classList.add('bg-danger')
      } else if(p.classList.contains('Important')) {
        p.classList.add('bg-warning')
      } else if(p.classList.contains('Regular')) {
        p.classList.add('bg-success')
      } else if(p.classList.contains('Soon')) {
        p.classList.add('bg-info')
      } else {
        p.classList.add('text-secondary')
      }
    })
  }

  static editTodo(todo, el) {
    console.log(todo);
    console.log(el);
  }
}

function deleteTodo(el) {
  if(el.classList.contains(`delete`)) {
    el.parentElement.parentElement.parentElement.remove();
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
    const editEl = e.target

    if(addBtnId !== null) {
      const theForm = document.getElementById(`form-todo`)
      theForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById(`title-todo`).value;
        const description = document.getElementById(`desc-todo`).value;
        const priority = document.getElementById('menu').value;
        const dueDate = document.getElementById(`date-todo`).value;
        const identifier = addBtnId;

        const newTodo = new Todo(title, description, priority, dueDate, identifier)
        Todo.displayTodos(addBtnId, newTodo)

        theForm.reset();
      })
    }

    if(editEl !== null && editEl.classList.contains('edit')) {
      Todo.editTodo(editEl)
      const theChildren = editEl.parentElement.parentElement.parentElement.children;
      document.getElementById(`title-todo`).value = theChildren[0].innerHTML;
      document.getElementById(`desc-todo`).value = theChildren[1].innerHTML;
      document.getElementById('menu').value = theChildren[2].innerHTML;
      document.getElementById(`date-todo`).value = theChildren[3].innerHTML;

      editEl.parentElement.parentElement.parentElement.remove();
    }
  })

  parentContainer.addEventListener('click', (e) => {
    const elId = e.target
    if(elId !== null) {
      deleteTodo(elId)
    }
  })
}