export async function GET(request: Request) {
    const tasks = await getAllTasks()

    return tasks
 }