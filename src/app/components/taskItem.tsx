//I tipi vanno importati!! Se più componenti richiamano uno stesso tipo conviene creare uno sheet types.tsx
import {Task} from "../dashboard/page"
//{Task} perchè si tratta di un export normale battezzato. 
//Gli export default non possono essere importati con {X}, bensì con X, perché "Because JavaScript modules can export many named things, but only one default thing." Export default dice "la cosa principale di sto file è sta funzione.". Poi ci possono essere n export battezzati.


//Qui è type e non interface perchè è una convenzione usare type per i props e interface per gli effettivi tipi.
type TaskProp = {
    task: Task;
}

export default function TaskItem({task}: TaskProp) {
  return (
    <div>
      <li className="flex items-center justify-between p-2 border rounded">
        <div className="flex items-center gap-2">
          <input type="checkbox" />
          <span>{task.label}</span>
          <span></span>
        </div>
        <button className="text-red-500 hover:underline">Delete</button>
      </li>
    </div>
  );
}
