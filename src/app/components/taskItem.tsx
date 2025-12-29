//I tipi vanno importati!! Se più componenti richiamano uno stesso tipo conviene creare uno sheet types.tsx
import Link from "next/link";
import { Task } from "../dashboard/page";
//{Task} perchè si tratta di un export normale battezzato.
//Gli export default non possono essere importati con {X}, bensì con X, perché "Because JavaScript modules can export many named things, but only one default thing." Export default dice "la cosa principale di sto file è sta funzione.". Poi ci possono essere n export battezzati.

//Qui è type e non interface perchè è una convenzione usare type per i props e interface per gli effettivi tipi.
//se hai bisogno di passare più props di diverso tipo, semplicemente aggiungili all'interfaccia.
//per il tipo funzione: arrow func con tipizzazione anche per parametro + return value
type TaskItemProps = {
  task: Task;
  removeTask: (taskId: number) => void;
  changeTaskStatus: (changeEvent: React.ChangeEvent<HTMLInputElement>, taskId: number) => void;
};

//qui metti il prop tra {} perchè devi destrutturare l'oggetto props che la funzione si prende. Se non lo fai viene fuori un prop {task: {}}
export default function TaskItem({
  task,
  removeTask,
  changeTaskStatus,
}: TaskItemProps) {
  return (
    <div>
      <li className="flex items-center justify-between p-2 border rounded">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            onChange={(e) => {
              changeTaskStatus(e, task.id);
            }}
          />
          <Link href={"/dashboard/" + task.id}>
            <span>{task.label}</span>
          </Link>
          <span></span>
        </div>
        <button
          onClick={() => {
            removeTask(task.id);
          }}
          className="text-red-500 hover:underline">
          Delete
        </button>
      </li>
    </div>
  );
}
