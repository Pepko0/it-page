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
`

export const StyledLink = styled(Link)`
    font-size: 1.5vw;
    text-decoration: none;
    ;
`