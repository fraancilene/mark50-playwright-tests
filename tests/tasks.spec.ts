import { expect, test } from '@playwright/test'
import { TaskModel } from './fixtures/task.model'
import { deleteTaskByHelper, createTask } from './support/helpers'
import { TasksPage } from './support/pages/tasks'
import data from './fixtures/tasks.json'



test('Deve poder cadastrar uma nova tarefa', async ({ page, request }) => {
    const task = data.success as TaskModel
    const tasksPage: TasksPage = new TasksPage(page)


    // Dado que eu tenho uma nova tarefa
    await deleteTaskByHelper(request, task.name)
  
    
    // E que estou na página de cadastro
    await tasksPage.go()

    // Quando faço o cadastro dessa tarefa
    await tasksPage.create(task)
    
    // Então essa tarefa deve ser exibida na lista
    await tasksPage.shouldHaveText(task.name)

})

test('Não deve permitir tarefa duplicada', async ({page, request})=> {
    const task = data.duplicate as TaskModel

    const tasksPage: TasksPage = new TasksPage(page)

    await deleteTaskByHelper(request, task.name)
    await createTask(request, task)

       // E que estou na página de cadastro
    await tasksPage.go()

    // Quando faço o cadastro dessa tarefa
    await tasksPage.create(task)
    await tasksPage.alertHaveText('Task already exists!')

})

test('Campo Obrigatório', async ({ page }) => {
     const task = data.required as TaskModel


    const tasksPage: TasksPage = new TasksPage(page)
    await tasksPage.go()
    await tasksPage.create(task)

    // validação explicita recomendada nesse caso
    const validationMessage = await tasksPage.inputTaskname.evaluate (e => (e as HTMLInputElement).validationMessage)
    expect(validationMessage).toEqual('This is a required field')

})