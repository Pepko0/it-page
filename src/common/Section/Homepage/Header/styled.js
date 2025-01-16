import styled from "styled-components";

export const Header = styled.header`
  width:  ${({ theme }) => theme.width.component};
  margin: 100px auto 40px;
  display: grid;
  grid-template-columns: auto 3fr;
  grid-gap: 2vw;

  @media (max-width: ${({ theme }) => theme.media.phone}) {
    grid-template-columns: 1fr;
  }
`;

export const Logo = styled.svg`
  width: 20em;
  margin: auto;
  border-radius: 100%;
  box-shadow: 5px 5px 5px 0px #e8e8e8;
  fill:${({ theme }) => theme.color.lightgray};
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(255, 221, 0, 1) 0%,
    rgba(194, 104, 0, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    width: 25vw;
  }

  @media (max-width: ${({ theme }) => theme.media.phone}) {
    align-self: center;
    justify-self: center;
    width: 40vw;
  }
`;

export const Title = styled.h1`
  font-size: 2vw;
  margin-top: 0px;

  @media (max-width: ${({ theme }) => theme.media.phone}) {
    font-size: 5vw;
  }
`;

export const SubText = styled.p`
  font-size: 1vw;
  @media (max-width: ${({ theme }) => theme.media.phone}) {
    font-size: 3vw;
    margin-bottom: 0px;
  }
`;

export const Text = styled.p`
  font-size: 1.3vw;

  @media (max-width: ${({ theme }) => theme.media.phone}) {
    font-size: 3.5vw;
  }
`;
