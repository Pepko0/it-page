import styled from "styled-components";

export const Container = styled.div`
  width: ${({theme}) => theme.width.component};
  padding:50px;
  margin: auto;
  display: flex;
  background-color:  #D6D6D6 ;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 5px 0px #EAEAEA;
`;

export const Title = styled.h2`
  font-size: 2vw;
  padding: 10px;

  @media(max-width: ${({theme}) => theme.media.tablet}){
    font-size: 3vw
  }

  @media(max-width: ${({theme}) => theme.media.phone}){
    font-size: 4vw
  }
`;

export const IconGitHub = styled.svg`
  width:12vw;
  animation-duration: 2s;
  animation-delay: 0.5s;
  fill: grey;
  animation-name: color;
  animation-iteration-count: infinite;

  @media (max-width: ${({ theme }) => theme.media.phone}) {
    width: 35vw;
  }

  @keyframes color {
    0% {
      fill: #D6D6D6;
    }
    100% {
      fill: black;
    }
  }
`;
