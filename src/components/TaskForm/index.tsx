import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { add } from '../../store/reducers/task_list'

import * as S from './styles'
import { Button } from '../../styles';

const TaskForm = () => {
    const dispatch = useDispatch();

    const addNewTask = (task: Task) => {
        dispatch(add(task));
    }

    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [newTaskDescription, setNewTaskDescription] = useState('');

    return (
            <S.TaskForm >
                <S.FormInputArea>
                    <label htmlFor="task-title">Task title:</label>
                    <input value={undefined} type="text" id="task-title" onChange={(e) => setNewTaskTitle(e.target.value)} required/>
                </S.FormInputArea>
                <S.FormInputArea>
                    <label htmlFor="task-description">Task description:</label>
                    <input value={undefined} type="text" id="task-description" onChange={(e) => setNewTaskDescription(e.target.value)} required/>
                </S.FormInputArea>
                <Button disabled = {newTaskDescription == '' || newTaskDescription == ''} type='button' onClick={() => addNewTask({id: 1, title: newTaskTitle, description: newTaskDescription, status: false})}> 
                    <b>Add new task</b>
                </Button>
            </S.TaskForm>
    )
}

export default TaskForm;