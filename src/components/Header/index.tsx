import * as S from "./styles";

const Header = () => {
  return (
    <S.Header>
      <S.HeaderContainer className="container">
      <h1>Task List</h1>
      <S.TaskStatus>
        <p className="to-do">Tasks pending: <b className="pending">{1}</b></p>
        <p>Tasks completed: <b className="completed">{1}</b></p>
      </S.TaskStatus>
      </S.HeaderContainer>
    </S.Header>
  )
};

export default Header;
