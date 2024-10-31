import styled from "styled-components";

export const Container = styled.div`
  width: ${({theme}) => theme.width.component};
  padding: 50px;
  margin: auto;
  display: flex;
  background-color: #d6d6d6;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 5px 0px #eaeaea;
`;

export const Title = styled.h2`
  font-size: 1.8vw;
  padding: 10px;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    font-size: 2.2vw;
  }

  @media (max-width: ${({ theme }) => theme.media.phone}) {
    font-size: 4vw;
  }
`;

export const IconGitHub = styled.svg`
  width: 12vw;
  animation-duration: 2s;
  animation-delay: 0.5s;
  fill: #df5252;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    width: 18vw;
  }

  @media (max-width: ${({ theme }) => theme.media.phone}) {
    width: 25vw;
  }
`;
