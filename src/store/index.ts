import { configureStore } from "@reduxjs/toolkit";
import taskListReducer from './reducers/task_list'

const store = configureStore({
    reducer: {
        taskList: taskListReducer,
    }
});


export default store;
export type RootReducer = ReturnType<typeof store.getState>