import * as project from '../src/project.js'

describe('Project class tests', () => {
  afterEach(() => {
    project.Project.addProjectToList(project)
  })

  test('Validates a title', () => {
    const project1 = new project.Project('my project')
    expect(project1.title).toEqual('my project')
    project.Project.addProjectToList(project1)
  });

  test('should be not opened by default', () => {
    const project2 = new project.Project('2nd project')
    expect(project2.opened).toBe(false)
    project.Project.addProjectToList(project2)
  });

  test('should add every new project to the array', () => {
    const pIndex1 = project.projects[1].title
    expect(pIndex1).toEqual('my project')
  })
})

describe('DOM elements', () => {
  test('new project button should exist', () => {
    expect(document.getElementById('newProject')).toEqual(project.newProjectBtn)
  })
})

