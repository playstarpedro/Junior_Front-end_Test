import { useDispatch } from 'react-redux';
import { remove } from '../../store/reducers/task_list'

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

    const dispatch = useDispatch();

    const removeTask = (id: number) => {
        dispatch(remove(id));
    }

    return (
        <li>
            <h3>{id} - {title}</h3>
            <p>{description}</p>
            <div className='task-footer'>
                <div>
                    <label htmlFor="task-status">Task status:</label>
                    <input  type="checkbox" id='task-status' checked={status} />
                </div>
                <button type='submit' onClick={() => removeTask(id)}><b>Remove task</b></button>
            </div>
        </li>
    )
}

export default TaskListItem