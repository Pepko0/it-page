import styled from "styled-components";

export const Container = styled.div`
  width: 90vw;
  height: 500px;
  margin: auto;
  display: flex;
  background-color:  #D6D6D6 ;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 5px 0px #EAEAEA;
`;

export const Title = styled.h2`
  font-size: 1.5vw;
  padding: 10px;
`;

export const IconGitHub = styled.svg`
  width: 100px;
  height: 100px;
  animation-duration: 2s;
  animation-delay: 0.5s;
  fill: grey;
  animation-name: color;
  animation-iteration-count: infinite;

  @keyframes color {
    0% {
      fill: #D6D6D6;
    }
    100% {
      fill: black;
    }
  }
`;
