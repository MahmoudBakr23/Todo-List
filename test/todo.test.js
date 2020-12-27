import * as todo from '../src/todo.js'

describe('Todo class tests', () => {

    test('check todo properties', () => {
        const myTodo = new todo.Todo('my todo', 'this is my todo', 'important', '12/27/2020', 1)
        expect(myTodo.title).toEqual('my todo')
        expect(myTodo.description).toEqual('this is my todo')
        expect(myTodo.priority).toEqual('important')
        expect(myTodo.dueDate).toEqual('12/27/2020')
        expect(myTodo.identifier).toEqual(1)
    });
})
