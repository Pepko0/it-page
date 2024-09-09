import styled from "styled-components";

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
  box-shadow: 10px 10px 26px 50px #fc6299 inset;
`;

export const Navigation = styled.div`
  border: solid 1px;
  margin-left: 45vw;
  max-width: 20vw;
  text-align: center;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.5);
`;

export const NavigationTitle = styled.p`
  font-size: 2vw;
  font-weight: bold;
`;

export const Button = styled.button`
  width: 100px;
  margin: 10px;
`;
