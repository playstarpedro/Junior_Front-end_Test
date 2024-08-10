import styled from "styled-components";
import variables from "../../styles/variables";

export const TaskForm = styled.form`
    background-color: ${variables.lightYellow};
    border: 2px solid ${variables.orange};
    padding: 20px;
    margin-bottom: 10px;
    border-radius: 12px;
    display: block;
`

export const TaskTitleForm = styled.div`
    display: block;
    margin-bottom: 10px;

    label {
        width: 100%;
        margin-bottom: 4px;
    }

    input {
        padding: 8px;
        border-radius: 10px;
        border-bottom: 2px solid ${variables.orange};
        width: 100%;
        margin-top: 10px;

        &.invalid {
            border-bottom: 2px solid red;
        }
    }
`

export const TaskDescriptionForm = styled.div`
    margin-bottom: 10px;

    label {
        width: 100%;
    }

    input {
        padding: 8px;
        border-radius: 10px;
        border-bottom: 2px solid ${variables.orange};
        width: 100%;
        margin-top: 10px;

        &.invalid {
            border-bottom: 2px solid red;
        }
    }
`

export const FormButton = styled.div`
    display: flex;
    justify-content: end;
    margin-top: 10px;
`