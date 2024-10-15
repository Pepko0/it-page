import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px;
  margin-top: 20px;
  bottom: 0;
`;

export const Block = styled.div`
  padding: 50px;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.font.dm_serif};
  font-style: italic;
  font-size: 50px;
  margin-bottom: 5px;
  margin-top: 0px;
`;

export const Text = styled.p``;

export const LogoGH = styled.svg`
  width: 75px;
  fill: ${({ theme }) => theme.color.white};

  :hover {
    fill: ${({ theme }) => theme.color.gray};
  }

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    width: 8vw;

    :hover {
      fill: ${({ theme }) => theme.color.black};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.phone}) {
    width: 10vw;
  }
`;

export const LogoLk = styled.svg`
  width: 75px;
  fill: ${({ theme }) => theme.color.white};
  :hover {
    fill: ${({ theme }) => theme.color.linkedine};
  }

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    width: 8vw;

    :hover {
      fill: ${({ theme }) => theme.color.black};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.phone}) {
    width: 10vw;
  }
`;
