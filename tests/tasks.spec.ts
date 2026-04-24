import { test, expect } from '@playwright/test'
import { TaskModel } from './fixtures/task.model'
import { deleteTaskByHelper, createTask } from './support/helpers'



test('Deve poder cadastrar uma nova tarefa', async ({ page, request }) => {

        const task: TaskModel = {
        name: 'Ler um livro de TypeScript',
        is_done: false
    }

    // Dado que eu tenho uma nova tarefa
    await deleteTaskByHelper(request, task.name)
  
    
    // E que estou na página de cadastro
    await page.goto('http://localhost:8080')

    // Quando faço o cadastro dessa tarefa
    const inputTaskName = page.locator('input[class*=InputNewTask]') //definição de um objeto
    await inputTaskName.fill(task.name)
    await page.click('css=button >> text=Create')
    
    // Então essa tarefa deve ser exibida na lista
    const target = page.locator(`css=.task-item p >> text=${task.name}`)
    await expect(target).toBeVisible()
})

test('Não deve permitir tarefa duplicada', async ({page, request})=> {
    const task: TaskModel = {
        name: 'Comprar Ketchup',
        is_done: false
    }

    await deleteTaskByHelper(request, task.name)
    await createTask(request, task)

    await page.goto('http://localhost:8080')
    const inputTaskName = page.locator('input[class*=InputNewTask]') //definição de um objeto
    await inputTaskName.fill(task.name)
    await page.click('css=button >> text=Create')

    const target = page.locator('.swal2-html-container')
    await expect(target).toHaveText('Task already exists!')


})