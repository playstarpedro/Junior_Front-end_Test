import styled from "styled-components";
import variables from "../../styles/variables";
import { Button } from "../../styles";

export const ListItem = styled.li`
    background-color: ${variables.lightYellow};
    padding: 20px;
    margin-bottom: 12px;
    border-radius: 12px;

    h3 {
        color: ${variables.orange};
        margin-bottom: 8px;;
    }

    p {
        margin-bottom: 16px;
        background-color: white;
        padding: 8px;
        border-radius: 4px;
        padding-bottom: 16px;
        border-bottom: 2px solid #ccc;
    }
`

export const ListItemFooter = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ListItemButton = styled(Button)`
    background-color: ${variables.red};

    &:hover {
        background-color: ${variables.lightRed};
    }
`