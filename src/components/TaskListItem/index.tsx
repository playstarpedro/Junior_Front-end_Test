import './index.css'

const TaskListItem = () => {
    return (
        <li>
            <h3>New Task:</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex labore explicabo enim nesciunt ipsa cum alias. Reprehenderit, sed? Necessitatibus itaque voluptatum hic similique, officiis libero quisquam id odio. Impedit, cupiditate?</p>
            <div>
                <label htmlFor="task-status">Task status:</label>
                <input  type="checkbox" id='task-status'/>
            </div>
        </li>
    )
}

export default TaskListItem