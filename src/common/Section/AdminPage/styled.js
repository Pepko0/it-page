import styled from "styled-components";

export const Container = styled.div`
    width: ${({theme}) => theme.width.container};
    margin-top: 100px;

    @media(max-width: ${({theme}) => theme.media.phone}) {
        width: 95vw;
    }
`