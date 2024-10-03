import styled from "styled-components";

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 90vw;
    margin: auto;

    @media(max-width:${({theme}) => theme.media.tablet}){
        grid-template-columns: 1fr 1fr;
    }

    @media(max-width:${({theme}) => theme.media.phone}){
        grid-template-columns: 1fr;
    }
`;
