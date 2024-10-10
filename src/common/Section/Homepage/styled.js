import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  margin: auto;
  width: 90vw;
  height: 100vh;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-gap: 10px;
`;

export const Navigation = styled.nav`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  margin-left: 20vw;
  padding: 30px;
  border-radius: 1%;
  text-align: center;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.5);

  @media (max-width: ${({ theme }) => theme.media.phone}) {
    width: 60vw;
    margin-left: 0;
  }
`;

export const NavigationTitle = styled.h1`
  font-size: 1.5vw;
  font-weight: bold;

  @media (max-width: ${({ theme }) => theme.media.phone}) {
    font-size: 3vw;
  }
`;

export const Ul = styled.ul`
  padding: 0;
`;

export const Lists = styled.li`
  list-style-type: none;
  background-color: ${({ theme }) => theme.color.lightgray};
  padding: 1vw;
  border-radius: 10px;
  margin: 10px;

  :hover {
    color: red;
  }

  @media (max-width: ${({ theme }) => theme.media.phone}) {
    padding: 4vw;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.5vw;
  margin: 20px;

  @media (max-width: ${({ theme }) => theme.media.phone}) {
    font-size: 3vw;
  }
`;
