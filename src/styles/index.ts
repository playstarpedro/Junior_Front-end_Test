import styled, { createGlobalStyle } from "styled-components";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    border: none;
}

body {
    background-color: ${variables.yellow};
}
`
export const Container = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
`
export const Button = styled.button`
    background-color: ${variables.orange};
    color: white;
    padding: 8px;
    border-radius: 10px;

    &:hover {
        background-color: ${variables.lightOrange};
    }
`

export default GlobalStyle;