import styled from "styled-components";

export const Container = styled.form`
    width: ${({theme}) => theme.width.container};
    border: solid;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
`



