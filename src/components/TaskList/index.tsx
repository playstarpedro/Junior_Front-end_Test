import { RootReducer } from '../../store';
import { useSelector } from 'react-redux';

import TaskListItem from '../TaskListItem';

const TaskList = () => {
    const { tasks } = useSelector((state: RootReducer) => state.taskList)

    return (
    <div>
        <ul>
            {tasks.map((task) => (
                <TaskListItem title={task.title} description={task.description} status={task.status} key={task.id} id={task.id} />
            ))}
        </ul>
    </div>
    )
}

export default TaskList;