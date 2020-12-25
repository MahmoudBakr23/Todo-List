import * as projectModule from './project';
import * as todoModule from './todo';

projectModule.projectEventListeners();
todoModule.todosEventListener();

export function sum(a, b) {
    return a + b;
}