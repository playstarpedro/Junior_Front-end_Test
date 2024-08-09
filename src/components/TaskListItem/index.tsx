import './index.css'

type Props = {
    title: string;
    description: string;
    status: boolean;
}

const TaskListItem = (
    {title, description, status}: Props
) => {
    return (
        <li>
            <h3>{title}</h3>
            <p>{description}</p>
            <div>
                <label htmlFor="task-status">Task status:</label>
                <input  type="checkbox" id='task-status' checked={status} />
            </div>
        </li>
    )
}

export default TaskListItem