import styled from "styled-components";
import { Link } from "react-router-dom";
/*
export const Container = styled.div`
  height: 50vh;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  // border: solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  background-image: url("https://i.postimg.cc/nrV0zp0p/IMG-3954.avif");
  //box-shadow: 10px 10px 26px 50px #fc6299 inset;
`;
*/

export const Container = styled.div`
  margin: auto;
  width: 80vw;
  height: 100vh;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 10px;

  @media(max-width: ${({theme}) => theme.media.phone}){
    grid-template-columns: 1fr;
    width: 90vw;
  }
`;

export const Background1 = styled.div`
  background-image: url("https://i.postimg.cc/nrV0zp0p/IMG-3954.avif");
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  
`
export const Background2 = styled.div`
  background-image: url("https://i.postimg.cc/nrV0zp0p/IMG-3954.avif");
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`
export const Background3 = styled.div`
  background-image: url("https://i.postimg.cc/nrV0zp0p/IMG-3954.avif");
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`
export const Background4 = styled.div`
  background-image: url("https://i.postimg.cc/nrV0zp0p/IMG-3954.avif");
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`


export const Navigation = styled.nav`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  padding: 30px;
  border-radius: 1%;
  text-align: center;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.5);

  @media(max-width: ${({theme}) => theme.media.phone}){
    width: 60vw;
  }
`;

export const NavigationTitle = styled.h1`
  font-size: 1.5vw;
  font-weight: bold;

  @media(max-width: ${({theme}) => theme.media.phone}){
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

  
  @media(max-width: ${({theme}) => theme.media.phone}){
    padding: 4vw;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.5vw;

  
  @media(max-width: ${({theme}) => theme.media.phone}){
    font-size: 3vw;
  }
`;
