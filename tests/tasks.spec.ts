import { test, expect } from '@playwright/test'

test('Deve poder cadastrar uma nova tarefa', async ({page, request}) => {

    // Dado que eu tenho uma nova tarefa
    const taskName = 'Ler um livro de TypeScript'
    await request.delete('http://localhost:3333/helper/tasks/' + taskName)    // deletando a tarefa - para usar a mesma massa de teste
    
    // E que estou na página de cadastro
    await page.goto('http://localhost:8080')

    // Quando faço o cadastro dessa tarefa
    const inputTaskName = page.locator('input[class*=InputNewTask]') //definição de um objeto
    await inputTaskName.fill(taskName)
    await page.click('css=button >> text=Create')
    
    // Então essa tarefa deve ser exibida na lista
    const target = page.getByTestId('task-item')
    await expect(target).toHaveText(taskName)

    //await page.click('xpath=//button[contains(text(), "Create")]') enviando formulário com xpath
    //await inputTaskName.press('Enter') // enviando o formulário
})