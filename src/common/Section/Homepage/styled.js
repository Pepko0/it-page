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
  height: 100vh;
  display: grid;
  align-items: center;
  justify-content: center;
  border: solid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

`;

export const Background1 = styled.div`
  background-color: red;
  width: 100%;
  height: 100%;
`
export const Background2 = styled.div`
  background-color: green;
  width: 100%;
  height: 100%;
`
export const Background3 = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
`
export const Background4 = styled.div`
  background-color: yellow;
  width: 100%;
  height: 100%;
`


export const Navigation = styled.nav`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 40vw;
  padding: 30px;
  border-radius: 1%;
  text-align: center;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.5);
`;

export const NavigationTitle = styled.h1`
  font-size: 2vw;
  font-weight: bold;
`;

export const Button = styled.button`
  width: 100px;
  margin: 10px;
`;

export const Ul = styled.ul`
  padding: 0;
`;

export const Lists = styled.li`
  list-style-type: none;
  background-color: ${({ theme }) => theme.color.lightgray};
  padding: 15px;
  border-radius: 10px;
  margin: 10px;

  :hover {
    color: red;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 2vw;
`;
