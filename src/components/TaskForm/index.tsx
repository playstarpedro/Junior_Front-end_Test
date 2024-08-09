import './index.css'

const TaskForm = () => {
    return (
        <div className='task-form'>
            <form >
                <div>
                    <label htmlFor="task-title">Task title:</label>
                    <input type="text" id="task-title"/>
                </div>
                <div>
                    <label htmlFor="task-description">Task description:</label>
                    <input type="text" id="task-description"/>
                </div>
                <button type='button'> 
                    <b>Add new task</b>
                </button>
            </form>
        </div>
    )
}

export default TaskForm;