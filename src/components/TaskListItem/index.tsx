import { useDispatch } from 'react-redux';
import { remove, changeStatus } from '../../store/reducers/task_list'

import * as S from './styles'

type Props = {
    id: number;
    title: string;
    description: string;
    status: boolean;
}

const TaskListItem = (
    {title, description, status, id}: Props
) => {

    const dispatch = useDispatch();

    const removeTask = (id: number) => {
        dispatch(remove(id));
    }

    const changeTaskStatus = (id: number) => {
        dispatch(changeStatus(id));
    }

    return (
        <S.ListItem>
            <S.TaskTitle className={status ? 'completed' : ''}>{id} - {title}</S.TaskTitle>
            <S.TaskDescription>{description}</S.TaskDescription>
            <S.ListItemFooter>
                <S.TaskStatusContainer className={status ? 'completed' : 'pending'}>
                    <p>Task status:</p>
                    <input  type="checkbox" id='task-status' checked={status} />
                </S.TaskStatusContainer>
                <div>
                    <S.changeStatusButton className={status ? 'completed' : 'pending'} type='button' onClick={() => changeTaskStatus(id)}>
                        {status ? ('Mark as pending') : ('Mark as completed')}
                    </S.changeStatusButton>
                    <S.ListItemButton type='submit' onClick={() => removeTask(id)}><b>Remove task</b></S.ListItemButton>
                </div>
            </S.ListItemFooter>
        </S.ListItem>
    )
}

export default TaskListItem