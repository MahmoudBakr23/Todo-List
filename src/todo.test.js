const rewire = require("rewire")
const todo = rewire("./todo")
const deleteTodo = todo.__get__("deleteTodo")
// @ponicode
describe("todo.Todo.createTodoForm", () => {
    test("0", () => {
        let callFunction = () => {
            todo.Todo.createTodoForm(100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            todo.Todo.createTodoForm(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            todo.Todo.createTodoForm(-1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            todo.Todo.createTodoForm(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            todo.Todo.createTodoForm(-100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            todo.Todo.createTodoForm(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("todo.Todo.displayTodos", () => {
    test("0", () => {
        let callFunction = () => {
            todo.Todo.displayTodos(-100, { priority: 10 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            todo.Todo.displayTodos(1, { priority: 80 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            todo.Todo.displayTodos(0, { priority: 5 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            todo.Todo.displayTodos(0, { priority: 4 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            todo.Todo.displayTodos(0, { priority: 2 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            todo.Todo.displayTodos(-Infinity, { priority: -Infinity })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("deleteTodo", () => {
    test("0", () => {
        let callFunction = () => {
            deleteTodo({ classList: { contains: () => false }, parentElement: { parentElement: { parentElement: { remove: () => "Becky Bednar" } } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            deleteTodo({ classList: { contains: () => false }, parentElement: { parentElement: { parentElement: { remove: () => "Janet Homenick" } } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            deleteTodo({ classList: { contains: () => false }, parentElement: { parentElement: { parentElement: { remove: () => "Maurice Purdy" } } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            deleteTodo({ classList: { contains: () => true }, parentElement: { parentElement: { parentElement: { remove: () => "Maurice Purdy" } } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            deleteTodo({ classList: { contains: () => false }, parentElement: { parentElement: { parentElement: { remove: () => "Gail Hoppe" } } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            deleteTodo(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("todo.todosEventListener", () => {
    test("0", () => {
        let callFunction = () => {
            todo.todosEventListener()
        }
    
        expect(callFunction).not.toThrow()
    })
})
