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
            status: true,
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
                alert(`Task "${action.payload.title}" already exists!`);
            } else {
                // Dynamic id logic
                const lastTask = state.tasks[state.tasks.length - 1];
                const newTask: Task = {
                    ...action.payload,
                    id: lastTask ? lastTask.id + 1 : 1
                }
                state.tasks.push(newTask);
            } 
        },
        remove: (state, action: PayloadAction<number>) => {
            state.tasks = [
                ...state.tasks.filter((task) => task.id !== action.payload)
            ]
        },
        changeStatus: (state, action: PayloadAction<number>) => {
            const taskId = action.payload;
            const taskToUpdate = state.tasks.find((task) => task.id === taskId);
            alert(taskToUpdate?.description)

            if (taskToUpdate !== undefined) {
                taskToUpdate.status = !taskToUpdate.status;
            }
        }
    }
})

export const { add, remove, changeStatus } = taskListSlice.actions; 

export default taskListSlice.reducer;