//parte CRUD
import { prisma } from './prisma'
import { Task } from '@/src/app/dashboard/page'

export async function getAllTasks() {
    const tasks = await prisma.task.findMany()
    return tasks
}


export async function submitTask(tsk: Task) {
    const task = await prisma.task.create({
        data: tsk,
    })

    console.log("[PRISMA] Creating new task:", task)

   return task
}

export async function removeTask(tskId: number) {
    const task = await prisma.task.delete({
        where: {
            id: tskId
        }
    })

    console.log("[PRISMA] Deleting task with id:", task)

    return task
}

//TODO: Flush all tasks?