import styled from "styled-components";

export const LogoGH = styled.svg`
  width: 75px;
  fill: ${({ theme }) => theme.color.black};
  transition: fill 0.3s ease;

  :hover {
    fill: ${({ theme }) => theme.color.tundora};
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
  fill: ${({ theme }) => theme.color.linkedine};
  transition: fill 0.3s ease;
  :hover {
    fill: ${({ theme }) => theme.color.cornflowerblue};
  }

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    width: 8vw;

    :hover {
      fill: ${({ theme }) => theme.color.linkedine};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.phone}) {
    width: 10vw;
  }
`;