import styled from "styled-components";
import { Container } from "../../styles";
import variables from "../../styles/variables";

export const Header = styled.header`
    background-color: ${variables.orange};
    color: white;
    padding: 16px;
    width: 100%;
    margin-bottom: 12px;
`

export const HeaderContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const TaskStatus = styled.div`
    display: flex;

    p {
        margin-left: 10px;
    }

    .completed {
    color: ${variables.green};
    }

    .pending {
    color: ${variables.red};
    }
`