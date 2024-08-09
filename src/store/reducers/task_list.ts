import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type taskList = {
    tasks: Task[]
}

const initialState: taskList = {
    tasks: [
        {
            id: 1,
            title: 'test title',
            description: 'test description',
            status: false,
        }
    ]
}

const taskListSlice = createSlice({
    name: 'taskList',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Task>) => {
            // Non-repeating task logic
            const taskAlreadyExists = state.tasks.find(
                (task) =>
                    task.title.toLowerCase() === action.payload.title.toLowerCase()
            )

            if (taskAlreadyExists) {
                alert(`Task "${action.payload.title}" already exists!`)
            } else {
                // Dynamic id logic
                const lastTask = state.tasks[state.tasks.length - 1];
                const newTask: Task = {
                    ...action.payload,
                    id: lastTask ? lastTask.id + 1 : 1
                }
                state.tasks.push(newTask);
            } 
        }
    }
})

export const { add } = taskListSlice.actions; 

export default taskListSlice.reducer;