import './index.css'

type Props = {
    id: number;
    title: string;
    description: string;
    status: boolean;
}

const TaskListItem = (
    {title, description, status, id}: Props
) => {
    return (
        <li>
            <h3>{id} - {title}</h3>
            <p>{description}</p>
            <div>
                <label htmlFor="task-status">Task status:</label>
                <input  type="checkbox" id='task-status' checked={status} />
            </div>
        </li>
    )
}

export default TaskListItem