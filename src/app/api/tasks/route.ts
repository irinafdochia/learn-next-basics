import { getAllTasks } from "../../../../lib/taskData"

export async function GET() {
    const tasks = await getAllTasks()
    //Qui stiamo wrappando l'array risultante e trasformandolo in un formato erogabile in HTTP con Header text/json!!
    //Prende il JSON in entrata e lo mette nel body, poi setta l'header text/json
    //Le API devono rispondere con una response!! 
    return Response.json(tasks)
 }