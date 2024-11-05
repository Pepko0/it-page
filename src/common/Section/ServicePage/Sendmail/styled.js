import styled from "styled-components";

export const Container = styled.form`
    width: ${({theme}) => theme.width.container};
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2vw;
`

export const TextLabel = styled.label`
    display: block;
    font-family: ${({theme}) => theme.font.dm_serif};
    font-size: 30px;
    color: ${({theme}) => theme.color.mainblue};
`
export const Input = styled.input`
    font-size: 20px;
    width: 100%;
    padding: 10px;
    border: none;
`

export const Message = styled.textarea`
    width: 100%;
    font-size: 20px;
    padding: 10px;
    resize: none;
`