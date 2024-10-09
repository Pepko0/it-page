import styled from "styled-components";
import { Link} from "react-router-dom";

export const Container = styled.nav`
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1000;
    background-color: ${({theme}) => theme.color.mercury};
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    box-shadow: 5px 5px 5px 0px #EAEAEA;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 1.5vw;
    color: ${({theme}) => theme.color.mainblue};


    @media(max-width: ${({theme}) => theme.media.tablet}){
        font-size: 2.5vw;
    }

    @media(max-width: ${({theme}) => theme.media.phone}){
        font-size: 4.5vw;
    }
`