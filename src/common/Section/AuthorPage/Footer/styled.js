import styled from "styled-components";

export const Container = styled.footer`
  width: ${({ theme }) => theme.width.component};
  margin: 40px auto;
  height: 100px;
`;

export const SubText = styled.p`
  font-size: 1vw;
  @media (max-width: ${({ theme }) => theme.media.phone}) {
    font-size: 3vw;
    margin-bottom: 0px;
  }
`;

export const Mail = styled.a`
  text-decoration: none;
  font-size: 2vw;
  font-weight: bold;
  color: ${({ theme }) => theme.color.mainblue};

  @media (max-width: ${({ theme }) => theme.media.phone}) {
    font-size: 5vw;
  }
`;

export const Text = styled.p`
  font-size: 1.3vw;

  @media (max-width: ${({ theme }) => theme.media.phone}) {
    font-size: 3.5vw;
  }
`;

export const LogoGH = styled.svg`
  width: 5vw;
  fill: ${({ theme }) => theme.color.black};

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
  width: 5vw;
  fill: "#000000";
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
