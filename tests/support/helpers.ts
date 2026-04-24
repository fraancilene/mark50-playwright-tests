import { expect, APIRequestContext } from "@playwright/test"
import { TaskModel } from "../fixtures/task.model"


export async function deleteTaskByHelper(request: APIRequestContext, taskName:string){
    // deletando a tarefa pela api helper - para usar a mesma massa de teste
     await request.delete('http://localhost:3333/helper/tasks/' + taskName)    // deletando a tarefa - para usar a mesma massa de teste
}

export async function createTask(request: APIRequestContext, task: TaskModel){
    const newTask = await request.post('http://localhost:3333/tasks/', {data: task})
    expect(newTask.ok()).toBeTruthy()

}