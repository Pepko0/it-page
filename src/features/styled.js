import styled from "styled-components";

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width:  ${({theme}) => theme.width.component};
    margin: auto;
    
    @media(max-width: 1900px){
        grid-template-columns: 1fr 1fr;
    }

    @media(max-width:${({theme}) => theme.media.phone}){
        grid-template-columns: 1fr;
    }
`;
