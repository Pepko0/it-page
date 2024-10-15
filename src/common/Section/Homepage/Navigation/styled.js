import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  margin: auto;
  width: 90vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr ;
  justify-content: center;
  align-items: center;
  grid-gap: 20px;
 // border: solid;
  
  /*
  background-image: url("https://i.postimg.cc/0QQ20867/homepage.jpg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  */
`;

export const Image = styled.img`
  width: 100%;
  height: 400px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5); /* Dodaje cień pod obrazem */
  margin: auto;
`;

export const Nav = styled.nav`
  position: absolute;
  width: 30vw;
  margin: auto 50vw;
  padding: 30px;
  border-radius: 1%;
  text-align: center;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.5);

  @media (max-width: ${({ theme }) => theme.media.phone}) {
    width: 60vw;
    margin-left: 0;
    position: relative;
    transform: translate(0%, 0%);
    top: 0%;
    left: 0%;
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
