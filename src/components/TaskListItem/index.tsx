import { useDispatch } from 'react-redux';
import { remove } from '../../store/reducers/task_list'

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

    return (
        <S.ListItem>
            <h3>{id} - {title}</h3>
            <p>{description}</p>
            <S.ListItemFooter>
                <div>
                    <label htmlFor="task-status">Task status:</label>
                    <input  type="checkbox" id='task-status' checked={status} />
                </div>
                <S.ListItemButton type='submit' onClick={() => removeTask(id)}><b>Remove task</b></S.ListItemButton>
            </S.ListItemFooter>
        </S.ListItem>
    )
}

export default TaskListItem