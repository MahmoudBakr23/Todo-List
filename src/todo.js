import * as projectModule from './project'
const todoArr = []

export class Todo {
  constructor(title, description, dueDate, identifier) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.identifier = identifier;
  }

  static createTodoForm(index) {
    const todosForm = document.createElement('form')
    todosForm.classList = `d-flex flex-wrap d-none todo-form form-${index}`
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

  static addTodoToArr(todo) {
    todoArr.push(todo)
  }

  // static displayTodos(index) {
  //   const todosList = document.createElement(`div`)
  //   todosList.classList = `d-flex flex-column col-12 justify-content-center todo-list-${index}`
  //   todosList.innerHTML = ``

  //   if(todoArr !== null) {
  //     todoArr.forEach((todo, i) => {
  //       if(todosList.classList.contains(`todo-list-${todo.identifier}`)) {
  //         const theTodo = document.createElement('ul')
  //         theTodo.classList = " my-2 p-3 d-flex justify-content-between align-items-center list-unstyled bg-white"
  //         theTodo.innerHTML = `
  //           <li class="p-1">${todo.title}</li>
  //           <li class="p-1">${todo.description}</li>
  //           <li class="p-1">${todo.dueDate}</li>
  //           <li data-remote-todo=${i}>X</li>
  //         `
  //         todosList.appendChild(theTodo);
  //       }
  //     })
  //   }
  // }
}


export function todosEventListener(){
  document.getElementById('projectsPanel').addEventListener('click', (e) => {
    const btnId = e.target.getAttribute('data-todo-target')
    if(btnId !== null) {
      Todo.createTodoForm(btnId)
    }
  })

  // document.getElementById('projectsPanel').addEventListener('click', (e) => {
  //   const addBtnId = e.target.getAttribute('data-add-todo')
  //   if(addBtnId !== null) {
  //     const theForm = document.getElementById(`form-todo`)
  //     theForm.addEventListener('submit', (e) => {
  //       e.preventDefault();
  //       const title = document.getElementById(`title-todo`).value;
  //       const description = document.getElementById(`desc-todo`).value;
  //       const dueDate = document.getElementById(`date-todo`).value;
  //       const identifier = addBtnId;

  //       const newTodo = new Todo(title, description, dueDate, identifier)
  //       Todo.addTodoToArr(newTodo)
  //       console.log(todoArr)
  //       Todo.displayTodos(addBtnId)
  //     })
  //   }
  // })
}