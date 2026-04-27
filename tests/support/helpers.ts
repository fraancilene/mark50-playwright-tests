import { expect, APIRequestContext } from "@playwright/test"
import { TaskModel } from "../fixtures/task.model"
import 'dotenv/config'

const BASE_API = process.env.BASE_API

if (!BASE_API) {
    throw new Error('BASE_API não foi definida no arquivo .env')
}


export async function deleteTaskByHelper(request: APIRequestContext, taskName:string){
    // deletando a tarefa pela api helper - para usar a mesma massa de teste
     await request.delete(`${BASE_API}/helper/tasks/${taskName}`)    // deletando a tarefa - para usar a mesma massa de teste
}

export async function createTask(request: APIRequestContext, task: TaskModel){
    const newTask = await request.post(`${BASE_API}/tasks/`, {data: task})
    expect(newTask.ok()).toBeTruthy()

}
