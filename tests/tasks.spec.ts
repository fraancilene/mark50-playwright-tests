import { expect, test } from '@playwright/test'
import { TaskModel } from './fixtures/task.model'
import { deleteTaskByHelper, createTask } from './support/helpers'
import { TasksPage } from './support/pages/tasks'



test('Deve poder cadastrar uma nova tarefa', async ({ page, request }) => {

    const tasksPage: TasksPage = new TasksPage(page)


    const task: TaskModel = {
        name: 'Ler um livro de TypeScript',
        is_done: false
    }

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
    const tasksPage: TasksPage = new TasksPage(page)
    const task: TaskModel = {
        name: 'Comprar Ketchup',
        is_done: false
    }

    await deleteTaskByHelper(request, task.name)
    await createTask(request, task)

       // E que estou na página de cadastro
    await tasksPage.go()

    // Quando faço o cadastro dessa tarefa
    await tasksPage.create(task)
    await tasksPage.alertHaveText('Task already exists!')

})

test('Campo Obrigatório', async ({ page }) => {
    const task: TaskModel = {
        name: '',
        is_done: false
    }

    const tasksPage: TasksPage = new TasksPage(page)
    await tasksPage.go()
    await tasksPage.create(task)

    // validação explicita recomendada nesse caso
    const validationMessage = await tasksPage.inputTaskname.evaluate (e => (e as HTMLInputElement).validationMessage)
    expect(validationMessage).toEqual('This is a required field')

})