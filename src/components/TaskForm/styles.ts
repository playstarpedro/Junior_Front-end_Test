import styled from "styled-components";
import variables from "../../styles/variables";

export const TaskForm = styled.form`
    background-color: ${variables.lightYellow};
    padding: 20px;
    margin-bottom: 10px;
    border-radius: 12px;
    align-items: center;
    display: flex;
    justify-content: space-between;
`

export const FormInputArea = styled.div`
    display: flex;
    align-items: center;

    input {
        padding: 8px;
        border-radius: 10px;
        border-bottom: 2px solid ${variables.orange};
        margin-left: 14px;
        width: 300px;
    }
`