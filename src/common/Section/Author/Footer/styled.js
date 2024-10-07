import styled from "styled-components";

export const Container = styled.footer`
    width: 90vw;
    margin: auto;
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
    font-size: 2vw;
`

export const Text = styled.p`
  font-size: 1.3vw;

  @media (max-width: ${({ theme }) => theme.media.phone}) {
    font-size: 3.5vw;
  }
`;