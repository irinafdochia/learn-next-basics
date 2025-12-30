//parte CRUD
import { prisma } from './prisma'

export async function getAllTasks() {
    const tasks = await prisma.task.findMany()
    return tasks
}
