import { RootReducer } from '../../store';
import TaskListItem from '../TaskListItem';

import { useSelector } from 'react-redux';

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