import { useSelector } from "react-redux";
import { RootReducer } from "../../store";

import * as S from "./styles";

const Header = () => {

  const { tasks } = useSelector((state: RootReducer) => state.taskList)
  
  const returnCompletedTaks = (tasks: Task[]): number => {
    const completedTasks = tasks.filter((task) => task.status === true);
    return completedTasks.length;
  }

  const returnPendingTasks = (tasks: Task[]): number => {
    const completedTasks = tasks.filter((task) => task.status === false);
    return completedTasks.length;
  }

  return (
    <S.Header>
      <S.HeaderContainer className="container">
      <h1>Task List</h1>
      <S.TaskStatus>
        <p>Tasks: <b>{tasks.length}</b></p>
        <p>Tasks completed: <b className="completed">{returnCompletedTaks(tasks)}</b></p>
        <p>Tasks pending: <b className="pending">{returnPendingTasks(tasks)}</b></p>
      </S.TaskStatus>
      </S.HeaderContainer>
    </S.Header>
  )
};

export default Header;
