import styled from "styled-components";
import variables from "../../styles/variables";
import { Button } from "../../styles";

export const ListItem = styled.li`
    background-color: ${variables.lightYellow};
    padding: 20px;
    margin-bottom: 12px;
    border-radius: 12px;
`

export const TaskTitle = styled.h3`
    color: ${variables.orange};
    margin-bottom: 8px;;

    &.completed {
        text-decoration: line-through;
    }
`

export const TaskDescription = styled.h3`
    margin-bottom: 16px;
    background-color: white;
    padding: 8px;
    border-radius: 4px;
    padding-bottom: 16px;
    border-bottom: 2px solid #ccc;
`

export const ListItemFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    label {
        margin-right: 10px;
    }
`

export const TaskStatusContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    border-radius: 10px;
    padding: 8px;

    input {
        margin-left: 10px;
    }

    &.completed {
        background-color: ${variables.green};
    }
    
    &.pending {
        background-color: ${variables.lightRed};
    }
`

export const ListItemButton = styled(Button)`
    background-color: ${variables.red};

    &:hover {
        background-color: ${variables.lightRed};
    }
`

export const changeStatusButton = styled(Button)`
    cursor: pointer;
    background-color: ${variables.orange};
`