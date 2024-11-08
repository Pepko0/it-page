import styled from "styled-components";

export const Container = styled.div`
    width: ${({theme}) => theme.width.container};
    margin:100px auto;
`

export const Task = styled.li`
    background-color: ${({theme}) => theme.color.mercury};
    list-style: none;
    margin: 20px 0;
    padding: 10px;
    box-shadow: 5px 5px 0px 0px #9B9B9B;
`

export const Title = styled.h2`
    color: ${({theme}) => theme.color.mainblue};
    padding: 10px;
    border-bottom: solid 1px;
    margin: -3px -10px;
    font-size: 30px;
    margin-bottom: 30px;

`
export const Text = styled.label`
    color: ${({theme}) => theme.color.gray};
    font-size: 20px;
`

export const ImportantText = styled.label`
    font-weight: bold;
    color: ${({theme}) => theme.color.mainblue};
    font-size: 20px;


`
export const Items = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const BlockItem = styled.div`
    margin: 10px 0;
`