import { getAllTasks } from "@/lib/taskData"
import { submitTask } from "@/lib/taskData"
import { removeTask } from "@/lib/taskData"

export async function GET() {
    const tasks = await getAllTasks()
    console.log("[GET] Entered get request")
    //Qui stiamo wrappando l'array risultante e trasformandolo in un formato erogabile in HTTP con Header text/json!!
    //Prende il JSON in entrata e lo mette nel body, poi setta l'header text/json
    //Le API devono rispondere con una response!! 
    return Response.json(tasks)
}

export async function POST(request: Request) {
    try {
        const data = await request.json()

        console.log("[POST] request entered:", data)

        const newSubmittedTask = await submitTask(data)

        return Response.json(newSubmittedTask, { status: 201 })
    } catch (error) {
        console.log("[Error]:", error)
        return new Response.json("Something went wrong", { status: 500 })
    }
}

export async function DELETE(request: Request) {
    try {
        const req = await request.json()
        const taskId = req.id

        console.log("[DELETE] Task id: ", taskId, req)
        const rmvTask = await removeTask(taskId)

        if (rmvTask) {
            return new Response(null, { status: 204 })
        }
    } catch (error) {
        return new Response.json("Something went wrong", { status: 500 })
    }
}