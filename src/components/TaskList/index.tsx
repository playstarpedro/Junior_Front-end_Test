import TaskListItem from '../TaskListItem';

const TaskList = () => {
    return (
    <div>
        <ul>
            <TaskListItem title='tst' description='tst' status={false}/>
        </ul>
    </div>
    )
}

export default TaskList;