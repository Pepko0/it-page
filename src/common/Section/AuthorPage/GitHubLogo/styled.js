import styled from "styled-components";

export const Content = styled.div`
    margin-top: 20px;
    display: grid;
    margin-bottom: 30px;;
`

export const LogoGH = styled.svg`
  margin: auto;
  width: 75px;
  fill: ${({ theme }) => theme.color.mainblue};

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    width: 8vw;
  }

  @media (max-width: ${({ theme }) => theme.media.phone}) {
    width: 10vw;
  }
`;

export const Title = styled.p`
    margin-top: 2px;
    margin-bottom: 0px;
    text-align: center;
    font-weight: bold;
    font-size: 2.5em;

    @media (max-width: ${({ theme }) => theme.media.tablet}) {
    font-size: 3vw;
  }

  @media (max-width: ${({ theme }) => theme.media.phone}) {
    font-size: 5vw;
  }
`;

export const Text = styled.p`
    font-size: 1.7em;
    margin: auto;
    margin-top: 10px;

    @media (max-width: ${({ theme }) => theme.media.tablet}) {
    font-size: 2vw;
  }

  @media (max-width: ${({ theme }) => theme.media.phone}) {
    font-size: 3vw;
    margin-bottom: 0px;
  }
`;