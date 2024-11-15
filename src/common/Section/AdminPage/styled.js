import styled from "styled-components";

export const Container = styled.div`
    width: ${({theme}) => theme.width.container};
    margin: 100px auto;

    @media(max-width: ${({theme}) => theme.media.phone}) {
        width: 90vw;
    }
`