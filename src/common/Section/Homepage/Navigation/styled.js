import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  margin: auto;
  width: 90vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  grid-gap: 20px;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }

  @media(max-width: ${({theme}) => theme.media.phone}){
    grid-template-columns: 0fr;
    background-image: url("https://i.postimg.cc/SQdHpWvQ/homepage5.jpg") ;
    background-size: cover;
    background-repeat: no-repeat; 
    padding: 20px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 400px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  margin: auto;
`;

export const ImageTabletOff = styled.img`
  width: 100%;
  height: 400px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  margin: auto;
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    display: none;
  }
`;

export const ImagePhoneOff = styled.img`
  width: 100%;
  height: 400px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  margin: auto;
  @media (max-width: ${({ theme }) => theme.media.phone}) {
    display: none;
  }
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
    width: 70vw;
    position: relative;
    margin: 5px auto;
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
  padding: 10px;
  margin: 5px;

  :hover {
    color: red;
  }

  @media (max-width: ${({ theme }) => theme.media.phone}) {
    padding: 4vw;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 2vw;
  margin: 10px;
  border-bottom: solid 1px;

  @media (max-width: ${({ theme }) => theme.media.phone}) {
    font-size: 3vw;
  }
`;
