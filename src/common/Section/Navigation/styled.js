import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
  background-color: ${({ theme }) => theme.color.mercury};
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 30px;
  color: ${({ theme }) => theme.color.mainblue};
  transition: color 0.3s ease;
  &:hover {
    color: ${({theme}) => theme.color.cornflowerblue};
  }


  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    font-size: 2.5vw;
  }

  @media (max-width: ${({ theme }) => theme.media.phone}) {
    font-size: 4.5vw;
  }
`;
