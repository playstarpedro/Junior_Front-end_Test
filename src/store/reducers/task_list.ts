import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type taskList = {
    tasks: Task[]
}

const initialState: taskList = {
    tasks: []
}

const taskListSlice = createSlice({
    name: 'taskList',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Task>) => {
            state.tasks.push(action.payload)
        }
    }
})

export default taskListSlice.reducer;