import styled from "styled-components";

export const Container = styled.form`
    width: ${({ theme }) => theme.width.container};
    margin: 100px auto;
`
export const ContainerUp = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap:20px;
    margin-bottom: 20px;

    @media(max-width: ${({ theme }) => theme.media.phone}){
        grid-template-columns: 1fr;
    }
`

export const TextLabel = styled.label`
    display: block;
    font-family: ${({ theme }) => theme.font.dm_serif};
    font-size: 30px;
    color: ${({ theme }) => theme.color.mainblue};
    margin-bottom: 5px;

    @media(max-width: ${({ theme }) => theme.media.phone}){
        font-size: 25px;
    }
`

export const Input = styled.input`
    width: 100%;
    padding: 15px;
    border: none;

    @media(max-width: ${({ theme }) => theme.media.phone}){
        font-size: 15px;
    }
`

export const CustomRB = styled.label`
    display: inline-flex;
    align-items: center;
    
    &:before{
        content: '';
        display: block;
        height: 1.25em;
        width: 1.25em;
        border: solid 1px;
        border-radius: 50%;
        margin-right: 0.5em;
    }
        
    &:hover{
        cursor: pointer;
    }
`;

export const RadioInput = styled.input.attrs({ type: 'radio' })`
    display: none;

    &:checked + ${CustomRB} {
        color: ${({theme}) => theme.color.mainblue};


        &::before{
        background: radial-gradient(
        0.75em circle at center,
        currentColor 50%,
        transparent 55%
        );
    }
}
`;

export const Message = styled.textarea`
    width: 100%;
    font-size: 20px;
    padding: 10px;
    resize: none;
    min-height: 200px;

    @media(max-width: ${({ theme }) => theme.media.phone}){
        font-size: 15px;
    }
`

export const Button = styled.button`
    margin: 30px 0;
    padding:20px;
    width: 100%;
    font-size: 30px;
    background-color: ${({ theme }) => theme.color.mainblue};
    color: white;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s;


    &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.color.cornflowerblue} ;
    }

`
